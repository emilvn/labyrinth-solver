import { Grid } from "./grid.js";
import labyrinth from "./Labyrinth.js";
import { Queue } from "./queue.js";
import Stack from "./stack.js";
import * as view from "./view.js";

window.addEventListener("load", init);

const TICK_RATE = 100;
// prettier-ignore
const STRATEGY = [
  "west",
  "south",
  "north",
  "east",
];
const grid = new Grid(labyrinth.rows, labyrinth.cols);

function init() {
  labyrinth.maze.flatMap((c) => c).forEach((c) => grid.set(c.row, c.col, c));
  view.init(grid);
  view.displayStartAndGoal(labyrinth);
  bfs(grid);
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, TICK_RATE));
}

async function dfs(grid) {
  const stack = new Stack();
  const goal = grid.get(labyrinth.goal.row, labyrinth.goal.col);
  let current = grid.get(labyrinth.start.row, labyrinth.start.col);
  stack.push(current);
  while (current.row !== goal.row || current.col !== goal.col) {
    current.visited = true;
    view.displayGrid(grid);
    let deadEnd = true;
    const northCell = grid.get(current.row - 1, current.col);
    const eastCell = grid.get(current.row, current.col + 1);
    const southCell = grid.get(current.row + 1, current.col);
    const westCell = grid.get(current.row, current.col - 1);
    for (const direction of STRATEGY) {
      if (!current[direction] && direction === "north" && !northCell?.visited) {
        current = northCell;
        stack.push(northCell);
        deadEnd = false;
        break;
      }
      if (!current[direction] && direction === "east" && !eastCell?.visited) {
        current = eastCell;
        stack.push(eastCell);
        deadEnd = false;
        break;
      }
      if (!current[direction] && direction === "south" && !southCell?.visited) {
        current = southCell;
        stack.push(southCell);
        deadEnd = false;
        break;
      }
      if (!current[direction] && direction === "west" && !westCell?.visited) {
        current = westCell;
        stack.push(westCell);
        deadEnd = false;
        break;
      }
    }
    if (deadEnd) {
      handleDFSDeadEnd(stack);
      current = stack.peek();
    }
    await sleep(TICK_RATE);
  }
  goal.visited = true;
  view.displayGrid(grid);
}

function handleDFSDeadEnd(stack) {
  const deadEnd = stack.pop();
  view.markDeadEnd(deadEnd.row, deadEnd.col);
}

async function bfs(grid) {
  const queue = new Queue();
  const start = grid.get(labyrinth.start.row, labyrinth.start.col);
  const goal = grid.get(labyrinth.goal.row, labyrinth.goal.col);
  queue.enqueue(start);
  let current = start;
  current.visited = true;
  while (current.row !== goal.row || current.col !== goal.col) {
    current = queue.dequeue();
    current.visited = true;
    view.displayGrid(grid);
    const northCell = grid.get(current.row - 1, current.col);
    const eastCell = grid.get(current.row, current.col + 1);
    const southCell = grid.get(current.row + 1, current.col);
    const westCell = grid.get(current.row, current.col - 1);
    for (const direction of STRATEGY) {
      if (!current[direction] && direction === "north" && !northCell?.visited) {
        northCell.parent = current;
        queue.enqueue(northCell);
      }
      if (!current[direction] && direction === "east" && !eastCell?.visited) {
        eastCell.parent = current;
        queue.enqueue(eastCell);
      }
      if (!current[direction] && direction === "south" && !southCell?.visited) {
        southCell.parent = current;
        queue.enqueue(southCell);
      }
      if (!current[direction] && direction === "west" && !westCell?.visited) {
        westCell.parent = current;
        queue.enqueue(westCell);
      }
    }

    await sleep(TICK_RATE);
  }
  goal.visited = true;
  let tmp = goal;
  while (tmp) {
    view.markShortestPath(tmp.row, tmp.col);
    tmp = tmp.parent;
    await sleep(TICK_RATE);
  }
  view.displayGrid(grid);
}

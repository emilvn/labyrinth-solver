import { Grid } from "./grid.js";
import generateLabyrinth from "./labyrinth.js";
import { Queue } from "./queue.js";
import Stack from "./stack.js";
import * as view from "./view.js";

window.addEventListener("load", init);

const TICK_RATE = 50;
// prettier-ignore
const STRATEGY = [
  "south",
  "north",
  "west",
  "east",
];
const ROWS = 10;
const COLS = 10;

let grid = new Grid(ROWS, COLS);
let labyrinth = generateLabyrinth(ROWS, COLS);

function init() {
  loop();
}

function loop() {
  shuffleArray(STRATEGY);
  view.displayStrategy(STRATEGY);
  view.displayAlgorithm("Breadth First Search");
  resetGrid();
  bfs(grid).then(() => {
    resetGrid();
    view.displayAlgorithm("Depth First Search");
    dfs(grid).then(loop);
  });
}

function resetGrid() {
  structuredClone(labyrinth)
    .maze.flatMap((c) => c)
    .forEach((c) => grid.set(c.row, c.col, c));
  view.init(grid);
  view.displayStartAndGoal(labyrinth);
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
    const adjacentMap = {
      north: grid.get(current.row - 1, current.col),
      east: grid.get(current.row, current.col + 1),
      south: grid.get(current.row + 1, current.col),
      west: grid.get(current.row, current.col - 1),
    };
    for (const direction of STRATEGY) {
      const adjacent = adjacentMap[direction];
      if (!current[direction] && !adjacent?.visited) {
        current = adjacent;
        stack.push(adjacent);
        deadEnd = false;
        break;
      }
    }
    if (deadEnd) {
      const deadEnd = stack.pop();
      view.markDeadEnd(deadEnd.row, deadEnd.col);
      current = stack.peek();
    }
    await sleep(TICK_RATE);
  }
  goal.visited = true;
  view.displayGrid(grid);
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
    const adjacentMap = {
      north: grid.get(current.row - 1, current.col),
      east: grid.get(current.row, current.col + 1),
      south: grid.get(current.row + 1, current.col),
      west: grid.get(current.row, current.col - 1),
    };
    for (const direction of STRATEGY) {
      const adjacent = adjacentMap[direction];
      if (!current[direction] && !adjacent?.visited) {
        adjacent.parent = current;
        queue.enqueue(adjacent);
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

// for randomizing strategy each run
function shuffleArray(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

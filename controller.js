import { Grid } from "./grid.js";
import labyrinth from "./Labyrinth.js";
import Stack from "./stack.js";
import * as view from "./view.js";

window.addEventListener("load", init);

const stack = new Stack();
const grid = new Grid(labyrinth.rows, labyrinth.cols);

function init() {
  labyrinth.maze.flatMap((c) => c).forEach((c) => grid.set(c.row, c.col, c));
  view.init(grid);
}

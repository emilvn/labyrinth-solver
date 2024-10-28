/**
 * @typedef Labyrinth
 * @property {number} rows
 * @property {number} cols
 * @property {{row: number, col: number}} start
 * @property {{row: number, col: number}} goal
 * @property {{row: number, col: number, north: boolean, east: boolean, west: boolean, south: boolean}[][]} maze
 */

/**
 * @type {Labyrinth}
 */
const labyrinth = {
  rows: 4,
  cols: 4,
  start: { row: 0, col: 0 },
  goal: { row: 2, col: 3 },
  maze: [
    [
      { row: 0, col: 0, north: true, east: true, west: true, south: false },
      { row: 0, col: 1, north: true, east: false, west: true, south: false },
      { row: 0, col: 2, north: true, east: false, west: false, south: true },
      { row: 0, col: 3, north: true, east: true, west: false, south: false },
    ],
    [
      { row: 1, col: 0, north: false, east: false, west: true, south: true },
      { row: 1, col: 1, north: false, east: true, west: false, south: true },
      { row: 1, col: 2, north: true, east: false, west: true, south: false },
      { row: 1, col: 3, north: false, east: true, west: false, south: true },
    ],
    [
      { row: 2, col: 0, north: true, east: false, west: true, south: false },
      { row: 2, col: 1, north: true, east: true, west: false, south: true },
      { row: 2, col: 2, north: false, east: true, west: true, south: false },
      { row: 2, col: 3, north: true, east: true, west: true, south: false },
    ],
    [
      { row: 3, col: 0, north: false, east: false, west: true, south: true },
      { row: 3, col: 1, north: true, east: false, west: false, south: true },
      { row: 3, col: 2, north: false, east: false, west: false, south: true },
      { row: 3, col: 3, north: false, east: true, west: false, south: true },
    ],
  ],
};

export default labyrinth;

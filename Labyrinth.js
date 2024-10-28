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
  rows: 10,
  cols: 10,
  start: { row: 0, col: 0 },
  goal: { row: 9, col: 9 },
  maze: [
    [
      { row: 0, col: 0, north: true, east: false, west: true, south: true },
      { row: 0, col: 1, north: true, east: false, west: false, south: false },
      { row: 0, col: 2, north: true, east: false, west: false, south: true },
      { row: 0, col: 3, north: true, east: false, west: false, south: false },
      { row: 0, col: 4, north: true, east: true, west: false, south: true },
      { row: 0, col: 5, north: true, east: true, west: true, south: false },
      { row: 0, col: 6, north: true, east: false, west: true, south: true },
      { row: 0, col: 7, north: true, east: true, west: false, south: false },
      { row: 0, col: 8, north: true, east: false, west: true, south: true },
      { row: 0, col: 9, north: true, east: true, west: false, south: false },
    ],
    [
      { row: 1, col: 0, north: true, east: true, west: true, south: false },
      { row: 1, col: 1, north: false, east: true, west: true, south: true },
      { row: 1, col: 2, north: true, east: false, west: true, south: false },
      { row: 1, col: 3, north: false, east: true, west: false, south: true },
      { row: 1, col: 4, north: true, east: false, west: true, south: false },
      { row: 1, col: 5, north: false, east: true, west: false, south: true },
      { row: 1, col: 6, north: true, east: false, west: true, south: false },
      { row: 1, col: 7, north: false, east: true, west: false, south: true },
      { row: 1, col: 8, north: true, east: false, west: true, south: false },
      { row: 1, col: 9, north: false, east: true, west: false, south: true },
    ],
    [
      { row: 2, col: 0, north: false, east: false, west: true, south: true },
      { row: 2, col: 1, north: true, east: false, west: false, south: true },
      { row: 2, col: 2, north: false, east: true, west: false, south: false },
      { row: 2, col: 3, north: true, east: false, west: true, south: true },
      { row: 2, col: 4, north: false, east: false, west: false, south: false },
      { row: 2, col: 5, north: true, east: false, west: false, south: true },
      { row: 2, col: 6, north: false, east: true, west: false, south: false },
      { row: 2, col: 7, north: true, east: false, west: true, south: true },
      { row: 2, col: 8, north: false, east: false, west: false, south: false },
      { row: 2, col: 9, north: true, east: true, west: false, south: true },
    ],
    [
      { row: 3, col: 0, north: true, east: true, west: true, south: false },
      { row: 3, col: 1, north: true, east: true, west: true, south: false },
      { row: 3, col: 2, north: false, east: false, west: true, south: true },
      { row: 3, col: 3, north: true, east: true, west: false, south: false },
      { row: 3, col: 4, north: false, east: false, west: true, south: true },
      { row: 3, col: 5, north: true, east: true, west: false, south: false },
      { row: 3, col: 6, north: false, east: false, west: true, south: true },
      { row: 3, col: 7, north: true, east: true, west: false, south: false },
      { row: 3, col: 8, north: false, east: false, west: true, south: true },
      { row: 3, col: 9, north: true, east: true, west: false, south: false },
    ],
    [
      { row: 4, col: 0, north: false, east: false, west: true, south: true },
      { row: 4, col: 1, north: false, east: true, west: false, south: false },
      { row: 4, col: 2, north: true, east: true, west: true, south: true },
      { row: 4, col: 3, north: false, east: false, west: true, south: false },
      { row: 4, col: 4, north: true, east: true, west: false, south: true },
      { row: 4, col: 5, north: false, east: false, west: true, south: false },
      { row: 4, col: 6, north: true, east: true, west: false, south: true },
      { row: 4, col: 7, north: false, east: false, west: true, south: false },
      { row: 4, col: 8, north: true, east: false, west: false, south: true },
      { row: 4, col: 9, north: false, east: true, west: false, south: false },
    ],
    [
      { row: 5, col: 0, north: true, east: true, west: true, south: false },
      { row: 5, col: 1, north: false, east: false, west: true, south: true },
      { row: 5, col: 2, north: true, east: true, west: false, south: false },
      { row: 5, col: 3, north: false, east: false, west: true, south: true },
      { row: 5, col: 4, north: true, east: false, west: false, south: false },
      { row: 5, col: 5, north: false, east: true, west: false, south: true },
      { row: 5, col: 6, north: true, east: false, west: true, south: false },
      { row: 5, col: 7, north: false, east: true, west: false, south: true },
      { row: 5, col: 8, north: true, east: false, west: true, south: false },
      { row: 5, col: 9, north: false, east: true, west: false, south: true },
    ],
    [
      { row: 6, col: 0, north: false, east: true, west: true, south: true },
      { row: 6, col: 1, north: true, east: false, west: true, south: false },
      { row: 6, col: 2, north: false, east: false, west: false, south: true },
      { row: 6, col: 3, north: true, east: true, west: false, south: false },
      { row: 6, col: 4, north: false, east: false, west: true, south: true },
      { row: 6, col: 5, north: true, east: false, west: false, south: false },
      { row: 6, col: 6, north: false, east: true, west: false, south: true },
      { row: 6, col: 7, north: true, east: false, west: true, south: false },
      { row: 6, col: 8, north: false, east: true, west: false, south: true },
      { row: 6, col: 9, north: true, east: true, west: false, south: false },
    ],
    [
      { row: 7, col: 0, north: true, east: false, west: true, south: false },
      { row: 7, col: 1, north: false, east: true, west: false, south: true },
      { row: 7, col: 2, north: true, east: false, west: true, south: false },
      { row: 7, col: 3, north: false, east: true, west: false, south: true },
      { row: 7, col: 4, north: true, east: false, west: true, south: false },
      { row: 7, col: 5, north: false, east: true, west: false, south: true },
      { row: 7, col: 6, north: true, east: false, west: true, south: false },
      { row: 7, col: 7, north: false, east: true, west: false, south: true },
      { row: 7, col: 8, north: true, east: false, west: true, south: false },
      { row: 7, col: 9, north: false, east: true, west: false, south: true },
    ],
    [
      { row: 8, col: 0, north: false, east: true, west: true, south: true },
      { row: 8, col: 1, north: true, east: false, west: true, south: false },
      { row: 8, col: 2, north: false, east: true, west: false, south: true },
      { row: 8, col: 3, north: true, east: false, west: true, south: false },
      { row: 8, col: 4, north: false, east: true, west: false, south: true },
      { row: 8, col: 5, north: true, east: false, west: true, south: false },
      { row: 8, col: 6, north: false, east: true, west: false, south: true },
      { row: 8, col: 7, north: true, east: false, west: true, south: false },
      { row: 8, col: 8, north: false, east: true, west: false, south: true },
      { row: 8, col: 9, north: true, east: true, west: false, south: false },
    ],
    [
      { row: 9, col: 0, north: true, east: true, west: true, south: true },
      { row: 9, col: 1, north: false, east: true, west: true, south: true },
      { row: 9, col: 2, north: true, east: false, west: true, south: true },
      { row: 9, col: 3, north: false, east: true, west: false, south: true },
      { row: 9, col: 4, north: true, east: false, west: true, south: true },
      { row: 9, col: 5, north: false, east: false, west: false, south: true },
      { row: 9, col: 6, north: true, east: false, west: false, south: true },
      { row: 9, col: 7, north: false, east: false, west: false, south: true },
      { row: 9, col: 8, north: true, east: false, west: false, south: true },
      { row: 9, col: 9, north: false, east: true, west: false, south: true }, // Goal cell
    ],
  ],
};

// const labyrinth = {
//   rows: 4,
//   cols: 4,
//   start: { row: 0, col: 0 },
//   goal: { row: 2, col: 3 },
//   maze: [
//     [
//       { row: 0, col: 0, north: true, east: true, west: true, south: false },
//       { row: 0, col: 1, north: true, east: false, west: true, south: false },
//       { row: 0, col: 2, north: true, east: false, west: false, south: true },
//       { row: 0, col: 3, north: true, east: true, west: false, south: false },
//     ],
//     [
//       { row: 1, col: 0, north: false, east: false, west: true, south: true },
//       { row: 1, col: 1, north: false, east: true, west: false, south: true },
//       { row: 1, col: 2, north: true, east: false, west: true, south: false },
//       { row: 1, col: 3, north: false, east: true, west: false, south: true },
//     ],
//     [
//       { row: 2, col: 0, north: true, east: false, west: true, south: false },
//       { row: 2, col: 1, north: true, east: true, west: false, south: true },
//       { row: 2, col: 2, north: false, east: true, west: true, south: false },
//       { row: 2, col: 3, north: true, east: true, west: true, south: false },
//     ],
//     [
//       { row: 3, col: 0, north: false, east: false, west: true, south: true },
//       { row: 3, col: 1, north: true, east: false, west: false, south: true },
//       { row: 3, col: 2, north: false, east: false, west: false, south: true },
//       { row: 3, col: 3, north: false, east: true, west: false, south: true },
//     ],
//   ],
// };

export default labyrinth;

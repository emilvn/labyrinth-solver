/**
 * @typedef Labyrinth
 * @property {number} rows
 * @property {number} cols
 * @property {{row: number, col: number}} start
 * @property {{row: number, col: number}} goal
 * @property {{row: number, col: number, north: boolean, east: boolean, west: boolean, south: boolean}[][]} maze
 */

/**
 * Creates a labyrinth using Recursive Backtracking
 * @param {number} rows row count
 * @param {number} cols column count
 * @returns {Labyrinth}
 */
function generateLabyrinth(rows, cols) {
  // init labyrinth with all walls set
  const maze = Array.from({ length: rows }, (_, row) =>
    Array.from({ length: cols }, (_, col) => ({
      row,
      col,
      north: true,
      east: true,
      south: true,
      west: true,
      visited: false,
    }))
  );

  const directions = [
    { row: -1, col: 0, wall: "north", opposite: "south" },
    { row: 1, col: 0, wall: "south", opposite: "north" },
    { row: 0, col: -1, wall: "west", opposite: "east" },
    { row: 0, col: 1, wall: "east", opposite: "west" },
  ];

  function insideWalls(row, col) {
    return row >= 0 && row < rows && col >= 0 && col < cols;
  }

  // move in random directions through the maze until all cells have been visited
  // carving a path by removing walls between cells we move through
  // we use recursive backtracking by recursively moving through the grid until we hit a dead end
  // then we simply don't make the recursive call, and it will go "back" to the latest other valid direction
  // until there are no valid paths left in the grid
  function carve(row, col) {
    maze[row][col].visited = true;

    for (const dir of directions.toSorted(() => Math.random() - 0.5)) {
      const newRow = row + dir.row;
      const newCol = col + dir.col;

      if (insideWalls(newRow, newCol) && !maze[newRow][newCol].visited) {
        // remove wall between current cell and neighbour
        maze[row][col][dir.wall] = false;
        maze[newRow][newCol][dir.opposite] = false;

        carve(newRow, newCol);
      }
    }
  }

  carve(0, 0);

  // remove visited from all cells again.
  maze.forEach((r) => r.forEach((c) => (c.visited = false)));

  const start = { row: 0, col: 0 };

  // pick a random goal on the east/south edge of the labyrinth
  let goal;
  if (Math.random() > 0.5) {
    goal = { row: rows - 1, col: Math.floor(Math.random() * cols) };
  } else {
    goal = { row: Math.floor(Math.random() * rows), col: cols - 1 };
  }

  const labyrinth = {
    rows,
    cols,
    start,
    goal,
    maze,
  };

  return labyrinth;
}

export default generateLabyrinth;

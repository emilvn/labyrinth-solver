export function init(grid) {
  for (let i = 0; i < grid.rowNum; i++) {
    for (let j = 0; j < grid.colNum; j++) {
      const cell = grid.get(i, j);
      const cellElement = document.createElement("div");
      cellElement.classList.add("cell");
      if (cell?.north) {
        cellElement.classList.add("wall");
        cellElement.classList.add("north");
      }
      if (cell?.east) {
        cellElement.classList.add("wall");
        cellElement.classList.add("east");
      }
      if (cell?.south) {
        cellElement.classList.add("wall");
        cellElement.classList.add("south");
      }
      if (cell?.west) {
        cellElement.classList.add("wall");
        cellElement.classList.add("west");
      }
      cellElement.dataset.row = i;
      cellElement.dataset.col = j;
      document.querySelector("#labyrinth").appendChild(cellElement);
    }
  }
  document.documentElement.style.setProperty("--row-num", grid.rowNum);
  document.documentElement.style.setProperty("--col-num", grid.colNum);
}

export function displayGrid(grid) {
  const cells = document.querySelectorAll("#labyrinth .cell");
  for (let i = 0; i < grid.rowNum; i++) {
    for (let j = 0; j < grid.colNum; j++) {
      const cell = grid.get(i, j);
      const cellElement = document.querySelector(
        `.cell[data-row="${i}"][data-col="${j}"]`
      );
      if (cell?.visited) {
        cellElement.classList.add("visited");
      }
    }
  }
}

/**
 *
 * @param {import("./Labyrinth").Labyrinth} labyrinth
 */
export function displayStartAndGoal(labyrinth) {
  const startElement = document.querySelector(
    `.cell[data-row="${labyrinth.start.row}"][data-col="${labyrinth.start.col}"]`
  );
  const goalElement = document.querySelector(
    `.cell[data-row="${labyrinth.goal.row}"][data-col="${labyrinth.goal.col}"]`
  );
  startElement.innerText = "start";
  goalElement.innerText = "goal";
}

export function markDeadEnd(row, col) {
  const cellElement = document.querySelector(
    `.cell[data-row="${row}"][data-col="${col}"]`
  );
  cellElement.classList.add("dead-end");
}

export function markShortestPath(row, col) {
  const cellElement = document.querySelector(
    `.cell[data-row="${row}"][data-col="${col}"]`
  );
  cellElement.classList.add("shortest-path");
}

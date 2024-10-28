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
  const cells = document.querySelectorAll("#grid .cell");
  // clear all cells
  for (const cell of cells) {
    cell.classList.remove("snake", "food");
  }
  // set snake and food cells
  for (let i = 0; i < grid.rowNum; i++) {
    for (let j = 0; j < grid.colNum; j++) {
      const cell = document.querySelector(
        `.cell[data-row="${i}"][data-col="${j}"]`
      );
      const cellValue = grid.get(i, j);
      if (cellValue === 0) {
        cell.classList.remove("snake", "food");
      } else if (cellValue === 1) {
        cell.classList.add("snake");
      } else if (cellValue === 2) {
        cell.classList.add("food");
      }
    }
  }
}

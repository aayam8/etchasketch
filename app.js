const container = document.getElementById('container');

function makeGrid(rows,cols) {
  for (let c = 0; c < (rows * cols) ; c++) {
    let cell = document.createElement('div');
    cell.classList.add('grid-items');
    container.appendChild(cell);
  };
};

makeGrid(16, 16);

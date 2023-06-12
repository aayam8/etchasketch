const container = document.getElementById('board');

function makeGrid(size) {
  board.style.setProperty('--grid-rows', size); // creating css variables and storing their values
  board.style.setProperty('--grid-cols', size); 
  for (let c = 0; c < (size * size) ; c++) {
    let cell = document.createElement('div');
    cell.classList.add('grid-items');
    container.appendChild(cell);
  };
};

makeGrid(16); // Single is enough as we are creating a square

const DEFAULT_SIZE = 16;

let currentSize = DEFAULT_SIZE;

const container = document.getElementById('board');
const clsBtn = document.getElementById('clear');
const sizeBtn = document.getElementById('size16');
const sizeBtn2 = document.getElementById('size32')

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

clsBtn.onclick = () => clear();
sizeBtn.onclick = (e) => setSize(sizeBtn.value);
sizeBtn2.onclick = (e) => setSize(sizeBtn2.value);

function makeGrid(size) {
  board.style.setProperty('--grid-rows', size); // creating css variables and storing their values
  board.style.setProperty('--grid-cols', size); 
  for (let c = 0; c < (size * size) ; c++) {
    let cell = document.createElement('div');
    cell.classList.add('grid-items');
    cell.addEventListener('mouseover', draw);
    cell.addEventListener('mouseDown', draw);
    container.appendChild(cell);
  };
};

function draw(d) {
  if (d.type === 'mouseover' && !mouseDown) {
    return d.target.style.backgroundColor = `rgb(0,0,0)`;
  }
};

function clear(){
  container.innerHTML = '';
  makeGrid(currentSize);
}

function setSize(e){
  if(e === '16'){
    currentSize = e;
    container.innerHTML = '';
    makeGrid(parseInt(e));
  }
  else if(e === '32'){
    currentSize = e;
    container.innerHTML = '';
    makeGrid(parseInt(e));
  }
} 

makeGrid(DEFAULT_SIZE); // Single is enough as we are creating a square

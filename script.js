const gridContainer = document.getElementById('gridContainer');

let gridSize;
setGridSize(16);
changeSquareColorDarkGreen();

document.getElementById('changeGridSizeButton').addEventListener('click', () => {
  removeExistingGrid();
  gridSize = prompt('Choose the desired grid size (1 - 99):\n\nExample: 16 = 16 x 16 grid.');
    if (gridSize > 99 || gridSize < 1) {
      alert('Please insert a number from 0 to 99.');
      gridSize = 16;
    }
  setGridSize(gridSize);
  changeSquareColorDarkGreen();
});

document.getElementById('selectDarkGreenPencilButton').addEventListener('click', () => changeSquareColorDarkGreen());
document.getElementById('clearGridButton').addEventListener('click', () => clearGrid());
document.getElementById('selectRainbowPencilButton').addEventListener('click', () => changeSquareColorRGB());
document.getElementById('selectEraserButton').addEventListener('click', () => changeSquareColorNone());

function setGridSize(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    let newRow = document.createElement('div');
    newRow.classList.add('row');
    gridContainer.appendChild(newRow);
  
    for (let j = 0; j < gridSize; j++) {
      let newRowSquare = document.createElement('div');
      newRowSquare.classList.add('rowSquares');
      newRow.appendChild(newRowSquare);
    }
  }
}

function removeExistingGrid() {
  
  const rows = document.querySelectorAll('.row');
  
  for (let row of rows) {
    gridContainer.removeChild(gridContainer.lastChild);
  }
}

function changeSquareColorRGB() {
  
  const rowSquares = document.querySelectorAll('.rowSquares');

  for (let rowSquare of rowSquares) {
    rowSquare.addEventListener('mouseover', () => {
      let redRandomValue = Math.floor(Math.random() * 256);
      let greenRandomValue = Math.floor(Math.random() * 256);
      let blueRandomValue = Math.floor(Math.random() * 256);
      rowSquare.setAttribute('style', `background-color: rgb(${redRandomValue}, ${greenRandomValue}, ${blueRandomValue})`);
    });
  }
}

function changeSquareColorDarkGreen() {
  
  const rowSquares = document.querySelectorAll('.rowSquares');

  for (let rowSquare of rowSquares) {
    rowSquare.addEventListener('mouseover', () => {
      rowSquare.setAttribute('style', `background-color: #2C3333`);
    });
  }
}

function changeSquareColorNone() {
  
  const rowSquares = document.querySelectorAll('.rowSquares');

  for (let rowSquare of rowSquares) {
    rowSquare.addEventListener('mouseover', () => {
      rowSquare.setAttribute('style', `background-color: #CBEDD5`);
    });
  }
}

function clearGrid() {
  
  const rowSquares = document.querySelectorAll('.rowSquares');
  
  for (let rowSquare of rowSquares) {
    rowSquare.setAttribute('style', `background-color: #CBEDD5`);
  }
}
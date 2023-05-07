const gridContainer = document.getElementById('gridContainer');

let gridSize;
setGridSize(16);
changeSquareColor();

document.getElementById('changeGridSizeButton').addEventListener('click', () => {
  gridSize = prompt('Choose the desired grid size (1 - 99):');
    if (gridSize > 99) {}
  removeExistingGrid();
  setGridSize(gridSize);
  changeSquareColor();
});

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
  
  rows.forEach((e) => {
    for(let i = 0; i < rows.length; i++) {
      e.removeChild(e.lastChild);
    }
  });
    for(k = 0; k < rows.length; k++){
      gridContainer.removeChild(gridContainer.lastChild);
    }
}

function changeSquareColor() {
  
  const rowSquares = document.querySelectorAll('.rowSquares');

  rowSquares.forEach((e) => {
    e.addEventListener('mouseover', () => {
      let redRandomValue = Math.floor(Math.random() * 256);
      let greenRandomValue = Math.floor(Math.random() * 256);
      let blueRandomValue = Math.floor(Math.random() * 256);
      e.setAttribute('style', `background-color: rgb(${redRandomValue}, ${greenRandomValue}, ${blueRandomValue})`);
    });
  });
}
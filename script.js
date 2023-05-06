const gridContainer = document.getElementById('gridContainer');

let gridSize;
setGridSize(16);

document.getElementById('changeGridSizeButton').addEventListener('click', () => {
  gridSize = prompt('Type the amount of squares per side you want the new grid to have:');
  removeExistingGrid();
  setGridSize(gridSize);
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

const rows = document.querySelectorAll('.row');

function removeExistingGrid() {
  rows.forEach((e) => {
    for(let i = 0; i < rows.length; i++) {
      e.removeChild(e.lastChild);
    }
  })
  for(let j = 0; j < rowSquares.length; j++) {
    gridContainer.removeChild(gridContainer.lastChild);
  }
}

const rowSquares = document.querySelectorAll('.rowSquares');

rowSquares.forEach((e) => {
  e.addEventListener('mouseover', () => {
    e.setAttribute('style', 'background-color: blue');
  });
});
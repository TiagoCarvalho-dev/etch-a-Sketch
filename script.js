for (let i = 0; i < 16; i++) {
  let newRow = document.createElement('div');
  newRow.classList.add('row');
  document.getElementById('gridContainer').appendChild(newRow);

  for (let j = 0; j < 16; j++) {
    let newRowSquare = document.createElement('div');
    newRowSquare.classList.add('rowSquares');
    newRow.appendChild(newRowSquare);
  }
}

const rowSquares = document.querySelectorAll('.rowSquares');
rowSquares.forEach((e) => {
  e.addEventListener('mouseover', () => {
    e.setAttribute('style', 'background-color: blue');
  });
});
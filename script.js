for (let i = 0; i < 16; i++) {
  let newRow = document.createElement('div');
  newRow.classList.add('row');
  document.getElementById('gridContainer').appendChild(newRow);

  for (let j = 0; j < 16; j++) {
    let newColumn = document.createElement('div');
    newColumn.classList.add('rowSquares');
    newRow.appendChild(newColumn);
  }
}

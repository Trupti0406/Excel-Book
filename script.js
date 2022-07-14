const topRow = document.querySelector(".top_row");
const leftCol = document.querySelector(".left_col");
let grid = document.querySelector(".grid");

// Left Colum cells 1 to 100
for (let i = 1; i <= 100; i++) {
  //create a cell
  let div = document.createElement("div");
  div.setAttribute("class", "cell");
  div.textContent = i;
  leftCol.appendChild(div);
}

// Top row cell A to z
for (let i = 1; i <= 26; i++) {
  //create a cell
  let div = document.createElement("div");
  div.setAttribute("class", "cell");
  div.textContent = String.fromCharCode(i + 64);
  topRow.appendChild(div);
}

// Creating grid
for (let cols = 1; cols <= 100; cols++) {
  let row = document.createElement("div");
  row.setAttribute("class", "row");
  for (let rows = 1; rows <= 26; rows++) {
    let col = document.createElement("div");
    col.setAttribute("class", "cell");
    col.textContent = `${String.fromCharCode(64 + rows)} - ${cols}`;
    row.appendChild(col);
  }
  grid.appendChild(row);
}

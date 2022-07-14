// Creating a grid
function init() {
  // Left Colum cells 1 to 100
  let leftCol = document.querySelector(".left_col");
  for (let i = 1; i <= 100; i++) {
    //create a cell
    let div = document.createElement("div");
    div.setAttribute("class", "cell");
    div.textContent = i;
    leftCol.appendChild(div);
  }

  // Top row cell A to z
  let topRow = document.querySelector(".top_row");
  for (let i = 1; i <= 26; i++) {
    //create a cell
    let div = document.createElement("div");
    div.setAttribute("class", "cell");
    div.textContent = String.fromCharCode(i + 64);
    topRow.appendChild(div);
  }

  // Creating grid
  let grid = document.querySelector(".grid");
  for (let rows = 1; rows <= 100; rows++) {
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    for (let cols = 1; cols <= 26; cols++) {
      let col = document.createElement("div");
      col.setAttribute("class", "cell");
      // col.textContent = `${String.fromCharCode(64 + cols)} - ${rows}`;
      col.setAttribute("contenteditable", "true");
      // Set two attributes of our own to identify each cell without showing any change on UI
      col.setAttribute("column_id", cols);
      col.setAttribute("row_id", rows);

      row.appendChild(col);
    }
    grid.appendChild(row);
  }
}
init();

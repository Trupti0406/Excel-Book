// Adress bar Implementation
let cells = document.querySelectorAll(".grid .cell");
let addressBar = document.querySelector(".address_bar");
// 1) Eventlistener on all cells => onlick
for (let i = 0; i < cells.length; i++) {
  // 2) When a cell is clicked => Element mil jaye
  cells[i].addEventListener("click", function (e) {
    let currentCell = e.currentTarget;
    console.log(currentCell);
    // 3) get rid, cid => address mein convert
    let rid = Number(currentCell.getAttribute("row_id"));
    let cid = Number(currentCell.getAttribute("column_id"));
    let address = String.fromCharCode(cid + 64) + rid;
    // console.log(address);
    // 4) put it in address bar
    addressBar.value = address;
  });
}

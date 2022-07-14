// Changing Font Size
let fontSizeSelector = document.querySelector(".font_size");
fontSizeSelector.addEventListener("change", function () {
  let fontSize = fontSizeSelector.value;
  // 1) set = > address get
  let { rid, cid } = getRidCidFromAddressBar();
  // 2) address => ui cell get
  let cell = document.querySelector(
    `.grid .cell[row_id = "${rid}"] [column_id = "${cid}"]`
  );
  // 3) style => set

  cell.style.fontSize = fontSize + "px";
});
function getRidCidFromAddressBar() {
  let address = addressBar.value;
  console.log(address);
  return addressToRidCid(address);
}

function addressToRidCid(address) {
  // D2 => columnid = 4, rid = 2
  let columnCharacter = address.charCodeAt(0);
  let rowCharacter = address.substr(1);
  let cid = Number(columnCharacter) - 65;
  let rid = Number(rowCharacter) - 1;
  return { rid: rid, cid: cid };
  //   console.log(columnCharacter + "" + rowCharacter);
}

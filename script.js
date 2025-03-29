let divGrid = 16;

let container = document.querySelector("#container"); 

function createDivGrid(number=gridLH) {
for (let i=0; i<number; i++) {
  let divRow = document.createElement("div")
 // divRow.textContent = "text"
  divRow.setAttribute(
    "style",
    "background-color: #ffaadd; border: white, solid, 1px; flex-grow: 1;"
  )
  divRow.setAttribute("class", "divRow");
  
  container.appendChild(divRow)


for (let i=0; i<number; i++) {
  let divCell = document.createElement("div")
  divCell.setAttribute("style", "background-color: #ddFFFF; border: lightGray, solid, white;")
  //divCell.textContent="cell"

  divCell.setAttribute("class", "divCell")
  divRow.appendChild(divCell)}
} 
}


createDivGrid();

const controls = document.createElement("div");
controls.textContent = "Placeholder text";
container.appendChild(controls)
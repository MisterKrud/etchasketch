let divGrid = 16;

let container = document.querySelector("#container"); 
const gridContainer = document.createElement("div");
gridContainer.setAttribute("id","grid-container")
  container.appendChild(gridContainer);

function createDivGrid(number=divGrid) {
  
for (let i=0; i<number; i++) {
  let divRow = document.createElement("div")
 // divRow.textContent = "text"
  //divRow.setAttribute(
    //"style",
    //"background-color: #ffaadd; border: white, solid, 1px; flex-grow: 1;"
  //)
  divRow.setAttribute("class", "divRow");
  
  gridContainer.appendChild(divRow)


for (let i=0; i<number; i++) {
  let divCell = document.createElement("div")
 // divCell.setAttribute("style", "border: Gray, solid, 2px;")
 // divCell.textContent="cell"

  divCell.setAttribute("class", "divCell")
  divRow.appendChild(divCell)}
} 
}


createDivGrid();

const controls = document.createElement("div");
controls.setAttribute("id", "controls")
controls.textContent = "Placeholder text";
container.appendChild(controls)

const gridNumberInput = document.createElement("input");
controls.appendChild(gridNumberInput);

let gridNumberValue = gridNumberInput.value;

const gridNumberButton = document.createElement("button");
controls.appendChild(gridNumberButton);


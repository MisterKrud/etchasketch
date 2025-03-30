let divGrid = 16;

//create a div container for the grid and append it to the main html container
let container = document.querySelector("#container"); 
const gridContainer = document.createElement("div");
gridContainer.setAttribute("id","grid-container")
  container.appendChild(gridContainer);


//function to determine size of the grid
function createDivGrid(number=divGrid) {

  gridContainer.innerHTML = '';

for (let i=0; i<number; i++) {
  let divRow = document.createElement("div")
 // divRow.textContent = "text"
  //divRow.setAttribute(
    //"style",
    //"background-color: #ffaadd; border: white, solid, 1px; flex-grow: 1;"
  //
  divRow.setAttribute("class", "divRow");
  container.prepend(gridContainer)
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

//function removeGrid() {
  //createDivGrid(1);
//}
//createDivGrid();
//removeGrid;

//create div for customising grid
const controls = document.createElement("div");
controls.setAttribute("id", "controls")
container.appendChild(controls)


//create buttonwith event listener to execute gridsize function
const gridNumberButton = document.createElement("button");
gridNumberButton.textContent = "Create Grid"
controls.appendChild(gridNumberButton);

//create input field for grid size
const gridNumberInput = document.createElement("input");
gridNumberInput.setAttribute("type","number");

console.log(divGrid)
controls.appendChild(gridNumberInput);




gridNumberButton.addEventListener("click", () => {
  
  divGrid = parseInt(gridNumberInput.value);
  createDivGrid(divGrid);
  
});




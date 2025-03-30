let divGrid = 16;

//create a div container for the grid and append it to the main html container
let container = document.querySelector("#container");
const gridContainer = document.createElement("div");
gridContainer.setAttribute("id", "grid-container");
container.appendChild(gridContainer);

//function to determine size of the grid
function createDivGrid(number = divGrid) {
 //clear grid
  gridContainer.innerHTML = "";

  //create x rows
  for (let i = 0; i < number; i++) {
    let divRow = document.createElement("div");

    divRow.setAttribute("class", "divRow");
    container.prepend(gridContainer);
    gridContainer.appendChild(divRow);

//create x cells in each row
    for (let i = 0; i < number; i++) {
      let divCell = document.createElement("div");

      divCell.setAttribute("class", "divCell");
      divRow.appendChild(divCell);
    }
  }
  const cellsToColor = document.querySelectorAll(".divCell");

  // colour each cell red on mouseover
  cellsToColor.forEach((i) => {
    i.addEventListener("mouseenter", () => {
      i.setAttribute("style", "background-color: red;");
    });
    
  });

  cellsToColor.forEach((i) => {
    i.addEventListener("mouseleave", () => {
      i.setAttribute("style", "background-color: pink;");
    });
    
  });
}

//create div for customising grid
const controls = document.createElement("div");
controls.setAttribute("id", "controls");
container.appendChild(controls);

//create buttonwith event listener to execute gridsize function
const gridNumberButton = document.createElement("button");
gridNumberButton.textContent = "Create Grid";
controls.appendChild(gridNumberButton);

//create input field for grid size
const gridNumberInput = document.createElement("input");
gridNumberInput.setAttribute("type", "number");

console.log(divGrid);
controls.appendChild(gridNumberInput);

gridNumberButton.addEventListener("click", () => {
  divGrid = parseInt(gridNumberInput.value);
  createDivGrid(divGrid);
});

//divCell.addEventListener("mouseover", () => {
//divCell.setAttribute("style", "backgroundColor: red;")
//})

createDivGrid();

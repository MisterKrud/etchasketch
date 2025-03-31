let divGrid = 16;

//create a div container for the grid and append it to the main html container
let container = document.querySelector("#container");
const gridContainer = document.createElement("div");
gridContainer.setAttribute("id", "grid-container");
container.appendChild(gridContainer);

//create array of random colours
const colourArray = [
  "#ff0000",
  "#00ff00",
  "#0000ff",
  "#ffff00",
  "#00ffff",
  "#ff00ff",
  "#ffa500",
  "#800080",
  "#ff1493",
];


let randomColour = Math.floor((Math.random()*9)+1);

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
    let r = Math.floor((Math.random()*9)+1);
    i.addEventListener("mouseenter", () => {
      let chosenColour = colourPicker.value;
     
      
      i.setAttribute("style", `background-color: ${colourArray[r]};`);
      
      
      
    });
    
    i.addEventListener("mouseleave", () => {
      let chosenColour = colourPicker.value;
      
      i.setAttribute("style", `background-color: ${colourArray[r]}50;`);
      console.log(colourArray[r]+50)
      
    });
  });

  //cellsToColor.forEach((i) => {
   
 // });
}

//create div for customising grid controls
const controlsContainer = document.createElement("div");
controlsContainer.setAttribute("id", "controls-container");
container.appendChild(controlsContainer);

//create div for grid sizing
const gridSizerDiv = document.createElement("div");
gridSizerDiv.setAttribute("class", "control-divs");

controlsContainer.appendChild(gridSizerDiv);

//create div for colour picker
const colourPickerDiv = document.createElement("div");
colourPickerDiv.setAttribute("class", "control-divs");

controlsContainer.appendChild(colourPickerDiv);

//create buttonwith event listener to execute gridsize function
const gridNumberButton = document.createElement("button");
gridNumberButton.textContent = "Change Grid Size (max: 100)";
gridSizerDiv.appendChild(gridNumberButton);

//create input field for grid size
const gridNumberInput = document.createElement("input");
gridNumberInput.setAttribute("type", "number");
gridNumberInput.setAttribute("max", 100);

const colourPicker = document.createElement("input");
colourPicker.setAttribute("type", "color");
colourPicker.defaultValue = "#ff0000";

const colourPickerTextLabel = document.createElement("p");
colourPickerTextLabel.textContent = "Choose your colour";
colourPickerDiv.appendChild(colourPickerTextLabel);
colourPickerDiv.appendChild(colourPicker);

gridSizerDiv.appendChild(gridNumberInput);

gridNumberButton.addEventListener("click", () => {
  divGrid = parseInt(gridNumberInput.value);
  if (divGrid > 100) {
    divGrid = 100;
  }
  createDivGrid(divGrid);
});

//divCell.addEventListener("mouseover", () => {
//divCell.setAttribute("style", "backgroundColor: red;")
//})

createDivGrid();

let gridLH = 16;

let container = document.querySelector("#container"); 

function createDivRow(number) {
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


createDivRow(16);
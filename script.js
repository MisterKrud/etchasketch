let gridLH = 16;

let container = document.querySelector("#container"); 
let div
//let divArray = []
function createDiv(number) {
for (let i=0; i<number; i++) {
  let div = document.createElement("div")
  div.textContent = "text"
  div.setAttribute(
    "style",
    "background-color: #ffaadd; border: white, solid, 1px; flex-grow: 1;flex-wrap: wrap"

  )
  
  container.appendChild(div)
 
} 
}
createDiv(16) ;


"use strict"
//selectors
let color = document.querySelector(".container");
const btn = document.querySelector("button");

//functions
function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

//arow
/*btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  color.style.backgroundColor = rndCol;
});
*/

//declaration
btn.addEventListener("click", function () {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  color.style.backgroundColor = rndCol;
  btn.style.color = rndCol;
  });
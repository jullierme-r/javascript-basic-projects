const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

button = document.querySelector("#btn");
span = document.querySelector(".color");
body = document.querySelector("body");
let last = -1;

//whenever clicked updates de bg-color of the page and put the color name/code in the container area
button.addEventListener("click", ()=> {
  let index = randomBgColor();

  //If the new index is the same as the previous one, it prevents the non color changing by moving to the next color in the array and applying it. If the index correspond to the last element, it goes to the beginning of the array.
  if(last === index && index < 3) {
    index++;
  } else if (last === index && index === 3) {
    index = 0;
  }
  last = index;
  span.textContent = colors[index];
  body.style = `background: ${colors[index]};`  
});

function randomBgColor() { //generates a random index to access the array position
  let randomIndex = Math.floor(Math.random() * 4);
  return randomIndex;
}
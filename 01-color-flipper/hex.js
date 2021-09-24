const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let button = document.querySelector("#btn");
let body = document.querySelector("body");
let span = document.querySelector(".color");

//whenever clicked updates de bg-color of the page through the generated hex code and put the color code in the container area
button.addEventListener("click", ()=> {
  let hexCode = randomHex();
  body.style = `background: #${hexCode};`;
  span.textContent = `#${hexCode}`;
});

function randomHex() { //generates a random hex code to change the bg color of the page
  let randHexcode = "";
  let hexIndex;
  for (let i=0; i < 6; i++) {
    hexIndex = hexArrayPosition();
    randHexcode += hex[hexIndex];
  }
  return randHexcode;
}

function hexArrayPosition() { //generates a random number to access an array position
  let randIndex;
  randIndex = Math.floor(Math.random() * 15);
  return randIndex;
}
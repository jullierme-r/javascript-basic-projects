const box = document.querySelector(".container");
const radius = document.querySelectorAll(".radius");
const textArea = document.querySelector("#clipboard");
const btn = document.querySelector(".btn");

let tl = 0;
let tr = 0;
let bl = 0;
let br = 0;

radius.forEach(rad => {
  //adds a change event to each corner input
  rad.addEventListener("change", ()=> {
    if (rad.id === "top-left") {
      tl = Number(rad.value);
    } else if (rad.id === "top-right") {
      tr = Number(rad.value);
    } else if (rad.id === "bottom-left") {
      bl = Number(rad.value);
    } else if (rad.id === "bottom-right"){
      br = Number(rad.value);
    }
    box.style = `border-radius: ${tl}px ${tr}px ${br}px ${bl}px;`;
    textArea.value = `border-radius: ${tl}px ${tr}px ${br}px ${bl}px;`;
  });
});

btn.addEventListener("click", () => {
  textArea.select(); //select all the text in the area
  navigator.clipboard.writeText(textArea.value); //writes the text to the clipboard
});
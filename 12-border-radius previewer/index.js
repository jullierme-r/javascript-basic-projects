const box = document.querySelector(".container");
const radius = document.querySelectorAll(".radius");

let tl = 0;
let tr = 0;
let bl = 0;
let br = 0;

radius.forEach(rad => {
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
  });
});
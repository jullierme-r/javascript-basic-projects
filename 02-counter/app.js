let value = document.querySelector("#value");
let button = document.querySelectorAll(".btn");
let cont = 0;

button.forEach(btn => {
  btn.addEventListener("click", (e)=>{
    if(e.target.classList.contains("decrement")){
      cont--;
    } else if(e.target.classList.contains("clear")) {
      cont = 0;
    } else {
      cont++;
    }
    value.textContent = cont;
    setColor(cont);
  });
});

function setColor(cont){
  if(cont > 0) {
    value.style = "color: green;";
  } else if (cont < 0) {
    value.style = "color: red;";
  } else {
    value.style = "color: #222";
  }
}
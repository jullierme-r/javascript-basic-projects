// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

let loader = document.querySelector(".preloader");
let video = document.querySelector(".video-container");
let button = document.querySelector(".switch-btn");

window.addEventListener("load", ()=> {
  loader.classList.add("hide-preloader");
});

button.addEventListener("click", ()=>{
  button.classList.toggle("slide");
  if(button.classList.contains("slide")){
    video.pause();
  } else {
    video.play();
  }
});
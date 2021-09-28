// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
let year = document.querySelector("#date"); //get the current date
year.textContent = new Date().getFullYear(); //display at the date area the current year

// ********** close links ************
let navMobile = document.querySelector(".nav-toggle");
let linksContainer = document.querySelector(".links-container");
let links = document.querySelector(".links");

navMobile.addEventListener("click", ()=> {
  let navLinkContainer = linksContainer.getBoundingClientRect().height; //get the height of the container that wraps the menu items
  let linksHeight = links.getBoundingClientRect().height; //get the height of the actual menu items

  if(navLinkContainer === 0){ //if the height of the container is 0 (meaning that it's closed)
    linksContainer.style = `height: ${linksHeight}px;`; //adds to it's height the height of menu items
  } else { //otherwise, it means that the menu it's open (and the action will be to close)
    linksContainer.style = `height: 0;`; //so set it's height back to 0
  }
});

// ********** fixed navbar ************
let goTop = document.querySelector(".top-link");
let navbar = document.querySelector("#nav");

window.addEventListener("scroll", ()=> { //listens to the page scrolling event
  let yOffset = window.pageYOffset; //and storages the value of the offset scrolled

  if(yOffset > 100){ //when the offset is bigger than 100px
    navbar.classList.add("fixed-nav"); //adds the fixed navbar
  } else {
    navbar.classList.remove("fixed-nav"); //or removes it if the value is lesser
  }

  if(yOffset > 500) { //when the offset hits the value of 500px show the button to return to the top
    goTop.classList.add("show-link");
  } else {
    goTop.classList.remove("show-link");
  }  
});

// ********** smooth scroll ************
// select links
let scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((link) => {
  link.addEventListener("click", (event)=> {
    event.preventDefault(); //prevent the behaviour of the scroll
// navigate to a specific section
    let id = event.target.getAttribute("href");
    let menuSection = document.querySelector(`${id}`);
    // calculate the heights
    let navHeight = navbar.getBoundingClientRect().height;
    let containerHeight = linksContainer.getBoundingClientRect().height;
    let fixedNav = navbar.classList.contains("fixed-nav");
    let position = menuSection.offsetTop - navHeight; //gets the position of the section by subtracting its offset of the nav height

    if(!fixedNav) {
      position = position - navHeight;
    }
    if(navHeight > 82){
      position = position + containerHeight;
    }
    window.scrollTo({left: 0, top: position,});
    linksContainer.style = `height: 0px;`;
  });
});


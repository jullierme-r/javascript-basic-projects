let tabButtons = document.querySelectorAll(".tab-btn");
let contentTab = document.querySelectorAll(".content");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // console.log(btn.dataset.id);
    tabButtons.forEach((tab)=> {
      if(tab !== btn) { //if the tab is different from the tab that was clicked, removes the active state
        tab.classList.remove("active");
      }
    });
    contentTab.forEach((content) => {
      if(content.id === btn.dataset.id) { //if there's a match with the id of the content and the data-id of the button, adds the active state to the content
        content.classList.toggle("active");
      } else {
        content.classList.remove("active"); //otherwise removes the active state from the mismatches
      }
    });
    btn.classList.toggle("active"); //adds the active state to the clicked tab
  });
});
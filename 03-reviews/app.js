// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

let index = 0;
let picture = document.querySelector("#person-img");
let author = document.querySelector("#author");
let job = document.querySelector("#job");
let info = document.querySelector("#info");
let randomBtn = document.querySelector(".random-btn");
let nextBtn = document.querySelector(".next-btn");
let previousBtn = document.querySelector(".prev-btn");

updatePerson(index); //display the screen the information of the first position of the array

nextBtn.addEventListener("click", () => {
  if (index < reviews.length - 1){ //if the index is not the last element of the array, increments the value
    index++;
  } else { //otherwise goes to the start of the array
    index = 0;
  }
  updatePerson(index);
});

previousBtn.addEventListener("click", () => {
  if (index === 0){ //if the index is the first element of the array, goes to the last position
    index = reviews.length - 1;
  } else { //otherwise decrements the value
    index--;
  }
  updatePerson(index);
});

randomBtn.addEventListener("click", () => {
  let aux = randomPerson();
  //Stores the random index in a temporary variable.
  //Run some tests to prevent that the new index is the same as the current person displayed. 
  //That way assure that the screen always be update when the button is clicked.
  if(aux === index && index !== reviews.length - 1) {
    index++;
  } else if(aux === index && index === reviews.length - 1){
    index--;
  } else {
    index = aux;
  }
  updatePerson(index);
});

//generates a random index
function randomPerson() {
  let randIndex = Math.floor(Math.random() * 4);

  return randIndex;
}

//updates the information on the section according with the current index
function updatePerson (ind){ 
  picture.src = reviews[ind].img;
  author.textContent = reviews[ind].name;
  job.textContent = reviews[ind].job;
  info.textContent = reviews[ind].text;
}
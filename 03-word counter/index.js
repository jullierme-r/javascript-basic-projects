// Tasks: 
// - write the JS so that the word count appears on the screen
// - update the count as the user types

// Stretch goals:
// -display longest word
// -add spell check
// -add character count

const textArea = document.querySelector("#txt-id");
const wordCount = document.querySelector("#word-count");
const longestWord = document.querySelector("#longest");
const charCount = document.querySelector("#char-count");

textArea.addEventListener("input", () => {
  textArea.setAttribute("spellcheck", "true");
  wordCount.textContent = wordsCount();
  charCount.textContent = characterCount();
});

function wordsCount() {
  let typedText = textArea.value;
  let words = typedText.split(" "); //storages every imputed word as an array position
  words.forEach(word => {
    if (word === "" ) {
      words.pop(); //removes the last position of the array if it is a blank space, so it doesn't enter the word count
    }
  });
  longestWord.textContent = longest(words);
  return words.length;
}

function characterCount() {
  let typedText = textArea.value;
  let withoutBlankSpace = typedText.split(""); //storages every imputed character as an array position
  let lengthOfText = typedText.length;
  if (typedText[lengthOfText - 1] === " ") {
    withoutBlankSpace.pop(); //removes the last position of the array if it is a blank space, so it doesn't enter the characters count
  }
  return withoutBlankSpace.length;
}

function longest(array) { //search for the longest word in the array
  let wordLength = 0;
  let longest;

  array.forEach(item =>{
    if(item.length > wordLength){
      wordLength = item.length;
      longest = item;
    }
  });
  return longest;
}

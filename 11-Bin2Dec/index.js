const input = document.querySelector("#binary");
const btn = document.querySelector("#btn");
const answerDiv = document.querySelector("#answer");

btn.addEventListener("click", ()=> {
  let validBinary = validateBinary(input.value);
  let decimalValue = bin2Dec(input.value);

  if(validBinary) {
    answerDiv.innerHTML = `<p>The binary value <strong>${input.value}</strong> converted to decimal is equal to <strong>${decimalValue}.</strong></p>`;
  } else {
    answerDiv.innerHTML = `<p class="invalid">Invalid input. Enter up to 8 binary (0 or 1) digits  in the input field</p>`;
  }
  input.value = "";
});

function validateBinary(value) {
  value = value.split(""); //turn the string from the input into array
  let isValid = true;

  value.forEach(element => {    
    if(Number(element) > 1 || isNaN(element) || element === " ") { //checks if each index is 1 or 0 only
      isValid = false; //if its different the input isn't valid
    } else if (value.length > 8) {
      isValid = false;
    }
  });
  return isValid;
}

//transforms a binary value into decimal
function bin2Dec(binValue) {
  let length = binValue.length;
  let decimal = 0;
  let pow = 0;
  let digitConversion = 0;

  while (length > 0) {
    digitConversion = (binValue[length - 1] * Math.pow(2,pow));
    decimal += digitConversion;
    pow++;
    length--;
  }
  return decimal;
}
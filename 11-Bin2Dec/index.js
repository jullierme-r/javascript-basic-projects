const input = document.querySelector("#binary");
const btn = document.querySelector("#btn");

btn.addEventListener("click", ()=> {
  let validBinary = validateBinary(input.value);
  let decimalValue = bin2Dec(input.value);

  if(validBinary) {
    console.log(decimalValue);
  } else {
    alert("Invalid input. Enter up to 8 binary (0 or 1) digits  in the input field")
  }
});

function validateBinary(value) {
  value = value.split("");
  let isValid = true;
  value.forEach(element => {
    if(Number(element) > 1 || isNaN(element)) {
      isValid = false;
    }
  });
  return isValid;
}

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


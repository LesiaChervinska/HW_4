var generateButton = document.querySelector(".generateButton");
var fieldNumbers = document.querySelector(".fieldNumbers");
var buttonResset = document.querySelector(".buttonReset");
var arr = [];
var count = 0;

generateButton.onclick = function () {
    count++;
    var inputminVal = Number(document.getElementById("inputmin").value);
    var inputmaxVal = Number(document.getElementById("inputmax").value);
    var randomNum = randomNumber(inputminVal, inputmaxVal);
    var range = inputmaxVal - inputminVal;
  console.log(randomNum)
  
    if (isValid(inputminVal, inputmaxVal)) {
      if (count === 1) {
        arr.push(randomNum);
        fieldNumbers.innerHTML = "Generated number:" + arr;
      }
      if (count > 1 && arr.indexOf(randomNum) == -1) {
        arr.push(randomNum);
        fieldNumbers.innerHTML = "Generated number:" + arr;
      }
      if (arr.length >= range + 1) {
        generateButton.setAttribute("class", "mainBlock__button-disabled");
        fieldNumbers.innerHTML = "All numbers are generated: " + arr;
      }
    } else {
      fieldNumbers.innerHTML = "Not correct input";
    }
  };
  
function isValid(num1, num2) {
  if (num1 < 0 || num1 >= num2 || num2 < 0) {
    return false;
  } else if (num1 % 1 != 0 || num2 % 1 != 0) {
    return false;
  }
  return true;
}

function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

buttonResset.addEventListener("click", function () {
  window.location.reload();
});


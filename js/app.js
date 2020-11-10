// Get all elements form html document
var elFormMain = document.querySelector('.form-main');
var elInputMain = elFormMain.querySelector('.input-main');
var elResultFizzLength = elFormMain.querySelector('.result-fizz-length');
var elResultFizz = elFormMain.querySelector('.result-fizz');
var elResultBuzzLength = elFormMain.querySelector('.result-buzz-length');
var elResultBuzz = elFormMain.querySelector('.result-buzz');
var elResultFizzBuzzLength = elFormMain.querySelector('.result-fizzBuzz-length');
var elResultFizzBuzz = elFormMain.querySelector('.result-fizzBuzz');

// Add event listener to main form
elFormMain.addEventListener('submit', function (evt) {
  evt.preventDefault();

  // Get input value
  var inputMain = parseInt(elInputMain.value.trim(), 10)

  // Declare arrays and make them empty to make new set of arrays for each inputValues
  var fizzArray = [];
  var buzzArray = [];
  var fizzBuzzArray = [];

  // Define weather numbers until the input values fizz, buzz or fizzBuzz?
  for (i = 1; i <= inputMain; i++) {
    if ((i % 3 === 0) && (i % 5 !== 0)) {
      fizzArray.push(i);
    } else if ((i % 3 !== 0) && (i % 5 === 0)) {
      buzzArray.push(i);
    } else if ((i % 3 === 0) && (i % 5 === 0)) {
      fizzBuzzArray.push(i);
    }
  }

  // Assign array legths to element outputs
  elResultFizzLength.textContent = `${fizzArray.length} ta`;
  elResultBuzzLength.textContent = `${buzzArray.length} ta`;
  elResultFizzBuzzLength.textContent = `${fizzBuzzArray.length} ta`;

  // Assign and join final results
  elResultFizz.textContent = fizzArray.join(', ')
  elResultBuzz.textContent = buzzArray.join(', ')
  elResultFizzBuzz.textContent = fizzBuzzArray.join(', ');

  elInputMain.value = elInputMain.value.trim();
  /*   Console log arrays
    console.log(fizzArray);
    console.log(buzzArray);
    console.log(fizzBuzzArray); */
})
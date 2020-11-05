var elFormMain = document.querySelector('.form-main');
var elInputMain = elFormMain.querySelector('.input-main');
var elResultFizzLength = elFormMain.querySelector('.result-fizz-length');
var elResultFizz = elFormMain.querySelector('.result-fizz');
var elResultBuzzLength = elFormMain.querySelector('.result-buzz-length');
var elResultBuzz = elFormMain.querySelector('.result-buzz');
var elResultFizzBuzzLength = elFormMain.querySelector('.result-fizzBuzz-length');
var elResultFizzBuzz = elFormMain.querySelector('.result-fizzBuzz');



var calculateFizzBuzz = function (evt) {
  evt.preventDefault();


  var fizzBuzzArray = [];
  var fizzArray = [];
  var buzzArray = [];

  var inputMain = parseInt(elInputMain.value.trim(), 10);

  for (var i = 1; i <= inputMain; i++) {
    if ((i % 3 === 0) && (i % 5 !== 0)) {
      fizzArray.push(i);
    } else if ((i % 3 !== 0) && (i % 5 === 0)) {
      buzzArray.push(i);
    } else if ((i % 3 === 0) && (i % 5 === 0)) {
      fizzBuzzArray.push(i);
    }
  };


  elResultFizz.textContent = '0, ';
  elResultBuzz.textContent = '0, ';
  elResultFizzBuzz.textContent = '0, ';

  for (element of fizzArray) {
    elResultFizz.textContent += `${element}, `
  }
  for (element of buzzArray) {
    elResultBuzz.textContent += `${element}, `
  }
  for (element of fizzBuzzArray) {
    elResultFizzBuzz.textContent += `${element}, `
  }


  elResultFizzLength.textContent = `(soni) ${fizzArray.length} ta`;

  elResultBuzzLength.textContent = `(soni) ${buzzArray.length} ta`;

  elResultFizzBuzzLength.textContent = `(soni) ${fizzBuzzArray.length} ta`;


  console.log(fizzArray, fizzArray.length);
  console.log(buzzArray, buzzArray.length);
  console.log(fizzBuzzArray, fizzBuzzArray.length);
};

elFormMain.addEventListener('submit', calculateFizzBuzz);
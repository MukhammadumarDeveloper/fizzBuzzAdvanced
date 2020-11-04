var elFormMain = document.querySelector('.form-main');
var elInputMain = elFormMain.querySelector('.input-main');



elFormMain.addEventListener('submit', function (evt) {
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
  }
  console.log(fizzArray, fizzArray.length);
  console.log(buzzArray, buzzArray.length);
  console.log(fizzBuzzArray, fizzBuzzArray.length);
})
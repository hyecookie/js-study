var userInput = prompt("숫자를 입력해 주세요.");
factorial(userInput);
function factorial(number){
  if (number === 1) {
    return 1; //return하면
  }
  return number * factorial (number - 1);
}
alert(factorial(userInput));

var userInput = prompt("암호화는 1 , 복호화는 2를 입력해 주세요.");

if (userInput == 1){
  userInput1(1);
} else if (userInput == 2){
  userInput2(2);
}

function userInput1(userInput) {
  var result = "";
  input = prompt("단어를 입력하시면 암호로 변환해드림");

  for (var i = 0; i < input.length ; i++){
    var newCode = input.charCodeAt(i)-2;
    if (newCode < 65) {
      newCode = newCode + 26;
    }


    var newChar = String.fromCharCode(newCode);
    result = result + newChar;
    console.log(result);
  }
  alert(result);
}


function userInput2(userInput) {
  var result = "";
  input = prompt("암호화된 단어를 입력하면 원래의 단어로 복원해드림");

  for (var i = 0; i < input.length ; i++){
    var newCode = input.charCodeAt(i)+2;
    if (newCode > 90) {
      newCode = newCode - 26;
    }
    var newChar = String.fromCharCode(newCode);
    result = result + newChar;
    console.log(result);
  }
  alert(result);
}

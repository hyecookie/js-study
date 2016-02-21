var userInput = prompt("암호화는 1 , 복호화는 2를 입력해 주세요.");
var input;
case(input);

if (userInput == 1) {
  function case(input) {
      var result = "";
      input = prompt ("단어를 입력하면 암호로 변환해드림");

      for (var count = 0; count < input.length ; count++){
        var newCode = input.charCodeAt(count)-2;
        if (newCode < 65) {
          newCode = newCode + 26;
        }
        var newChar = String.fromCharCode(newCode);
        result = result + newChar;
      }
      return result;
    }
} else (userInput==2) {
  function case(input){
  var result = "";
  input2 = prompt ("코드를 입력하면 단어로 변환해드림");
  }
}


var input;
cat(input);

function cat(input) {
  var result = "";
  input = prompt("단어를 입력하시면 코드로 변환해드림");

  for (var count=0; count < input.length ; count++){
    var newCode = input.charCodeAt(count)-2;
    if (newCode < 65) {
      newCode = newCode + 26;
    }
    var newChar = String.fromCharCode(newCode);
    result = result + newChar;
  }
  return result;
}


//알파벳 대문자 65 ~ 90
//알파벳 소문자 97 ~ 122

// 모드 선택 (암호화/복호화)
// 문자열을 입력 받아 처리
// 암호화/복호화 각각 함수로 만들어 보기
// 만약 알파벳 외에 다른 문자가 들어왔을 때 예외 처리 아스키코드 숫자에서 벗어나면 반
// 대소문자가 섞여서 왔을 때도 처리해 보기 (옵션)

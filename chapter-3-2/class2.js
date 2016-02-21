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

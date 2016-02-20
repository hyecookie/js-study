

function CAT(input) {

  var result = "";
  input = prompt ("단어를 입력하시면 코드로 변환해드림");

  for (var count; count < input.length ; count++){
    var newCode = input.charCodeAt(count)-2;
    if (newCode < 65) {
      newCode = newCode + 26;
    }
    var newCar = String.fromCharCode(newCode);
    result = result + newChar;
  }
  return result;
}

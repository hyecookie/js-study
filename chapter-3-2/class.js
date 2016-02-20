var input = "HANGOVER",
  code1 = 0;
  code2 = 1;
  code3 = 2;

input = prompt ("단어를 입력하시면 코드로 변환해드림");
// .length 는 글자 수 세줌



// for (var count; count < 10 ; count++);
// 개발쪽은 0이 시작이라고 생각하면된다.
function 문자열의(str) {
  return str.length;
}



for (var count; count < input.length ; count++){
  var newCode = input.charCodeAt(count)-2;
  if (newCode < 65) {
    newCode = newCode + 26;
  }
  var newCar = String.fromCharCode(newCode);
  result = result + newChar;
  // result = result.concat(String.fromCharCode(newCode));
  // => result = result + newCode;
}


// code1 = input.charCodeAt(0) - 2;
// code2 = input.charCodeAt(1) - 2;
// code3 = input.charCodeAt(2) - 2;
//
//
// // 64->90
// // 63->89
// // 62->88
//
// if (code1 < 65) {
//   code1 = code1 + 26;
// }
//
// if (code2 < 65) {
//   code2 = code2 + 26;
// }
//
// if (code3 < 65) {
//   code3 = code3 + 26;
// }

alert (String.fromCharCode(code1)+String.fromCharCode(code2)+String.fromCharCode(code3));

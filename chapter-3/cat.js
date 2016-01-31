userInput = prompt ("CAT을 입력하세요");
replace = userInput.replace("CAT","CYT");

if (userInput == "CAT") {
  var c = replace.charCodeAt(0)-2;
  console.log(c);
  var a = replace.charCodeAt(1);
  console.log(a);
  var t = replace.charCodeAt(2)-2;
  console.log(t);
}

alert (String.fromCharCode(c) + String.fromCharCode(a) + String.fromCharCode(t));

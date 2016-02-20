var userInput;
var cpu = "가위";
rst(userInput, cpu);

function rst(userInput, cpu){
  userInput = prompt ("가위, 바위, 보 중 하나를 입력해 주세요.");
  if (userInput == cpu) {
    alert("비겼습니다");
  }
  else if (userInput != cpu) {
    if (userInput == "바위") {
      alert("당신이 이겼습니다");
    }
    if (userInput == "보") {
      alert("당신이 졌습니다");
    }
  }
}

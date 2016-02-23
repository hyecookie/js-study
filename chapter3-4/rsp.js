var userInput;
var cpu1 = "가위";
rsp(userInput, cpu1);
var draw = false;

function rsp(userInput, cpu1){
  while (!draw) {
    userInput = prompt ("가위, 바위, 보 중 하나를 입력해 주세요.");
    if (userInput === null) {
    draw = true;
    }
    if (userInput == cpu1) {
      alert("비겼습니다. 다시 입력해 주세요.");
    }
    if (userInput != cpu1) {
      if (userInput == "바위") {
        alert("당신이 이겼습니다");
      }
      if (userInput == "보") {
        alert("당신이 졌습니다");
      }
      break;
    }
  }
}

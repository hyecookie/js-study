var random = Math.floor((Math.random() * 2) + 1);
var cpu1 = random;
var draw = false;

var userInput;
rsp(userInput, cpu1);

function rsp(userInput, cpu1){
  userInput = prompt ("가위, 바위, 보 중 하나를 입력해 주세요.");
  if (cpu1 == 1 ) {
    cpu1 = "가위";
  } else if (cpu1 == 2) {
    cpu1 = "바위";
  } else if (cpu1 == 3){
    cpu1 = "보";
    }

    if (userInput == cpu1) {
      alert("제가" + userInput + "를 냈으므로 비겼습니다. 다시 입력해 주세요.");
      rsp(userInput, cpu1);

    } else if (((userInput == "가위" ) && (cpu1 == "보")) || ((userInput == "바위") && (cpu1 == "가위")) || ((userInput == "보") && (cpu1=="바위"))) {
        alert("제가" + cpu1 + "를 냈으므로 당신이 이겼습니다" );
      }
      else if (((userInput == "가위" ) && (cpu1 == "바위")) || ((userInput == "바위") && (cpu1 == "보")) || ((userInput == "보") && (cpu1=="가위"))) {
        alert("제가" + cpu1 + "를 냈으므로 당신이 졌습니다");
      }
}

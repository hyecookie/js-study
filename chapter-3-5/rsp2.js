var random = Math.floor(Math.random() * 3);
var cpu1 = random;

var userInput;
rsp(userInput, cpu1);
var draw = false;


function rsp(userInput, cpu1){
  while (!draw) {
    userInput = prompt ("가위, 바위, 보 중 하나를 입력해 주세요.");
    replace1 = userInput.replace("가위","1");
    replace2 = userInput.replace("바위","2");
    replace3 = userInput.replace("보","3");

    if (replace1 === null && replace2 === null && replace2 === null) {
    }
    if (replace1 == cpu1 || replace2 == cpu1 || replace3 == cpu1) {
      alert("제가" + userInput + "를 냈으므로 비겼습니다. 다시 입력해 주세요.");
      continue;

    } else if ((replace1 != cpu1 && (cpu1 == 3)) || (replace2 != cpu1 && (cpu1 == 1)) || (replace3 != cpu1 && (cpu1 == 2))) {
        alert("제가" + cpu1 + "를 냈으므로 당신이 이겼습니다" + " 1=가위, 2=바위, 3=보");
      }
      else if ((replace1 != cpu1 && (cpu1 == 2)) || (replace2 != cpu1 && (cpu1 == 3)) || (replace3 != cpu1 && (cpu1 == 1))) {
        alert("제가" + cpu1 + "를 냈으므로 당신이 졌습니다" + " 1=가위, 2=바위, 3=보");
      }
      break;
  }
}

var random = Math.floor((Math.random() * 2) + 1);
var cpu1 = random;
var userInput;
rsp(userInput, cpu1);
var draw = false;

function rsp(userInput, cpu1){
  userInput = prompt ("묵, 찌, 빠 중 하나를 입력해 주세요.");
  replace1 = userInput.replace("묵","1");
  replace2 = userInput.replace("찌","2");
  replace3 = userInput.replace("빠","3");
  if (replace1 == cpu1 || replace2 == cpu1 || replace3 == cpu1) {
      prompt("제가" + userInput + "를 냈으므로 비겼습니다. 다시 입력해 주세요.");
  }
  else if((replace1 != cpu1) || (replace2 != cpu1) || (replace3 != cpu1)) {
    userInput2 = prompt ("묵, 찌, 빠 중 하나를 다시 입력해 주세요.");
    replace3 = userInput2.replace("가위","1");
    replace4 = userInput2.replace("바위","2");
    replace5 = userInput2.replace("보","3");

    if ((replace3 != cpu1) || (replace4 != cpu1) || (replace5 != cpu1)) {
        prompt("제가" + cpu1 + "를 냈습니다. 묵, 찌, 빠 중 하나를 입력해 주세요");

    } else if (replace3 == cpu1 || replace4 == cpu1 || replace5 == cpu1) {
       alert("제가" + userInput2 + "같은걸 냈습니다.");
    }
  }
}

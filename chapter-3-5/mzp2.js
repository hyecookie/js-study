var random = Math.floor((Math.random() * 2) + 1);
var cpu1 = random;
var userInput;
var userInput2;
var userInput3;
rsp(userInput, cpu1);

function rsp(userInput, cpu1){
  userInput = prompt ("묵, 찌, 빠 중 하나를 입력해 주세요.");
  replace1 = userInput.replace("묵","1");
  replace2 = userInput.replace("찌","2");
  replace3 = userInput.replace("빠","3");

  if (replace1 == cpu1 || replace2 == cpu1 || replace3 == cpu1) {
    alert("비겼습니다. 다시입력해주세요");
    rsp(userInput,cpu1);
    console.log(cpu1);
 } else if ((replace1 != cpu1 && (cpu1 == 3)) || (replace2 != cpu1 && (cpu1 == 1)) || (replace3 != cpu1 && (cpu1 == 2))){
     alert("제가" + cpu1 + "를(을) 내서 이겼으므로 공격권을 가집니다. 묵=1, 찌=2, 빠=3");
     rsp2(userInput2, cpu1);
     console.log(cpu1);
 } else if ((replace1 != cpu1 && (cpu1 == 2)) || (replace2 != cpu1 && (cpu1 == 3)) || (replace3 != cpu1 && (cpu1 == 1))) {
     alert("제가" + cpu1 + "를()을) 내서 졌으므로 당신이 공격권을 가집니다. 묵=1, 찌=2, 빠=3");
     rsp3(userInput3, cpu1);
     console.log(cpu1);
 }
}

function rsp2(userInput2,cpu1){
  userInput2 = prompt ("묵, 찌, 빠 중 하나를 다시 입력해 주세요.");
  replace4 = userInput2.replace("묵","1");
  replace5 = userInput2.replace("찌","2");
  replace6 = userInput2.replace("빠","3");

  if ((replace4 != cpu1) || (replace5 != cpu1) || (replace6 != cpu1)) {
    alert("제가" + cpu1 + "를(을) 내서 다른걸 냈으므로 당신이 공격권을 가집니다. 묵=1, 찌=2, 빠=3");
    rsp3(userInput3, cpu1);
  } else if (replace4 == cpu1 || replace5 == cpu1 || replace6 == cpu1) {
     alert("제가" + userInput2 + "를(을) 냈으므로 당신과 같은걸 냈습니다.당신이 졌습니다.");
   }
}

function rsp3(userInput3,cpu1){
  userInput3 = prompt ("묵, 찌, 빠 중 하나를 다시 입력해 주세요.");
  replace6 = userInput3.replace("묵","1");
  replace7 = userInput3.replace("찌","2");
  replace8 = userInput3.replace("빠","3");

  if ((replace6 != cpu1) || (replace7 != cpu1) || (replace8 != cpu1)) {
    alert("제가" + cpu1 + "를을) 내서 다른걸 냈으므로 제가 공격권을 가집니다. 묵=1, 찌=2, 빠=3");
    rsp2(userInput2, cpu1);
  } else if (replace6 == cpu1 || replace7 == cpu1 || replace8 == cpu1) {
    alert("제가" + userInput2 + "를(을) 냈으므로 같은걸 냈습니다.당신이 이겼습니다.");
  }
}

var random = Math.floor(Math.random() * 2);
var cpu1 = random;
var cpu2 = cpu1 + 1;
var cpu3 = cpu2 + 1;

var userInput;
var userInput2;
var userInput3;
mzp(userInput, cpu1);

function mzp(userInput, cpu1){
  userInput = prompt ("묵, 찌, 빠 중 하나를 입력해 주세요.");
  if (cpu1 == 1) {
    cpu1 = "묵";
  } else if (cpu1 == 2) {
    cpu1 = "찌";
  } else if (cpu1 == 3){
    cpu1 = "빠";
    }

  if (userInput == cpu1) {
    alert("제가"+cpu1+"를(을)내서 비겼습니다. 다시입력해주세요");
    mzp(userInput,cpu1);

 } else if (((userInput == "묵" ) && (cpu1 == "빠")) || ((userInput == "찌") && (cpu1 == "묵")) || ((userInput == "빠") && (cpu1=="찌"))){
     alert("제가" + cpu1 + "를(을) 내서 이겼으므로 공격권을 가집니다.");
     mzp2(userInput2, cpu1);

 } else if (((userInput == "묵" ) && (cpu1 == "찌")) || ((userInput == "찌") && (cpu1 == "빠")) || ((userInput == "빠") && (cpu1=="묵"))) {
     alert("제가" + cpu1 + "를()을) 내서 졌으므로 당신이 공격권을 가집니다.");
     mzp3(userInput3, cpu1);

 }
}

function mzp2(userInput2,cpu2){
  userInput2 = prompt ("묵, 찌, 빠 중 하나를 다시 입력해 주세요.");
  if (cpu2 == 1) {
    cpu2 = "묵";
  } else if (cpu2 == 2) {
    cpu2 = "찌";
  } else if (cpu2 == 3){
    cpu2 = "빠";
    }

  if ((userInput2 != cpu2) || (userInput2!= cpu2) || (userInput2 != cpu2)) {
    alert("제가" + cpu2 + "를(을) 내서 다른걸 냈으므로 당신이 공격권을 가집니다.");
    mzp3(userInput3, cpu3);
  } else if (userInput2 == cpu2 || userInput2 == cpu2 || userInput2 == cpu2) {
    alert("제가" + cpu2 + "를(을) 냈으므로 당신과 같은걸 냈습니다.당신이 졌습니다.");
   }
}

function mzp3(userInput3,cpu3){
  userInput3 = prompt ("묵, 찌, 빠 중 하나를 다시 입력해 주세요.");
  if (cpu3 == 1) {
    cpu3 = "묵";
  } else if (cpu3 == 2) {
    cpu3 = "찌";
  } else if (cpu3 == 3){
    cpu3 = "빠";
    }

  if ((userInput3 != cpu3) || (userInput3 != cpu3) || (userInput3 != cpu3)) {
    alert("제가" + cpu3 + "를(을) 내서 다른걸 냈으므로 제가 공격권을 가집니다.");
    mzp2(userInput2, cpu2);
  } else if (userInput3 == cpu3 || userInput3 == cpu3 || replace8 == cpu3) {
    alert("제가" + cpu3 + "를(을) 냈으므로 같은걸 냈습니다.당신이 이겼습니다.");
  }
}

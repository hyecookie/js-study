var userInput;
var userInput2;
var userInput3;
mzp();

function mzp(){
  var cpu1 = Math.floor(Math.random() * 2 + 1);
  userInput = prompt ("가위, 바위, 보 중 하나를 입력해 주세요.");
  if (userInput != "가위" && userInput != "바위" && userInput != "보"){
    alert("가위, 바위, 보 만 입력 가능합니다.");
    mzp();
    return;
  }

  if (cpu1 == 1) {
      cpu1 = "가위";
    } else if (cpu1 == 2) {
      cpu1 = "바위";
    } else if (cpu1 == 3){
      cpu1 = "보";
  }

  if (userInput == cpu1) {
      alert("제가 " + cpu1 + "를(을)내서 비겼습니다. 다시입력해주세요" + " CPU: " + cpu1 + " User: " + userInput);
      mzp();

   } else if (((userInput == "가위" ) && (cpu1 == "바위")) || ((userInput == "바위") && (cpu1 == "보")) || ((userInput == "보") && (cpu1=="가위"))){
       alert("cpu가 " + cpu1 + "를(을) 내서 이겼으므로 공격권을 가집니다." + " CPU: " + cpu1 + " User: " + userInput);
       mzp2();

   } else if (((userInput == "가위" ) && (cpu1 == "보")) || ((userInput == "바위") && (cpu1 == "가위")) || ((userInput == "보") && (cpu1=="바위"))) {
       alert("cpu가 " + cpu1 + "를(을) 내서 졌으므로 당신이 공격권을 가집니다." + " CPU: " + cpu1 + " User: " + userInput);
       mzp3();
      }
  }

function mzp2(){
  var cpu2 = Math.floor(Math.random() * 2 + 1);
  userInput2 = prompt ("묵, 찌, 빠 중 하나를 다시 입력해 주세요.");
    if (cpu2 == 1) {
      cpu2 = "묵";
      } else if (cpu2 == 2) {
        cpu2 = "찌";
      } else if (cpu2 == 3){
        cpu2 = "빠";
    }
    if (userInput2 != cpu2) {
      alert("cpu가 " + cpu2 + "를(을) 내서 다른걸 냈으므로 당신이 공격권을 가집니다."+ " CPU: " + cpu2 + " User: " + userInput2);
      mzp3();
      } else if (userInput2 == cpu2) {
      alert("cpu가 " + cpu2 + "를(을) 냈으므로 당신과 같은걸 냈습니다.당신이 졌습니다." + " CPU: " + cpu2 + " User: " + userInput2);
    }
}

function mzp3(){
  var cpu3 = Math.floor(Math.random() * 2 + 1);
  userInput3 = prompt ("묵, 찌, 빠 중 하나를 다시 입력해 주세요.");
  if (cpu3 == 1) {
      cpu3 = "묵";
    } else if (cpu3 == 2) {
      cpu3 = "찌";
    } else if (cpu3 == 3){
      cpu3 = "빠";
      }
  if (userInput3 != cpu3) {
      alert("cpu가 " + cpu3 + "를(을) 내서 다른걸 냈으므로 cpu가 공격권을 가집니다." + " CPU: " + cpu3 + " User: " + userInput3);
      mzp2();
    } else if (userInput3 == cpu3) {
      alert("cpu가 " + cpu3 + "를(을) 냈으므로 같은걸 냈습니다.당신이 이겼습니다." + " CPU: " + cpu3 + " User: " + userInput3);
    }
}

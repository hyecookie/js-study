var userInput;
var userInput2;
var userInput3;
mzp();

function mzp(){
  var cpu1 = Math.floor(Math.random() * 3 + 1);
  userInput = prompt ("가위, 바위, 보 중 하나를 입력해 주세요.");
  if (userInput != "가위" && userInput != "바위" && userInput != "보"){
    alert("가위, 바위, 보 만 입력 가능합니다.");
    mzp();
  }
  if (userInput === null) {
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
      alert("cpu가 " + cpu1 + "를(을)내서 비겼습니다. 다시 입력해 주세요" + " CPU: " + cpu1 + " User: " + userInput);
      mzp();
   } else if (((userInput == "가위" ) && (cpu1 == "바위")) || ((userInput == "바위") && (cpu1 == "보")) || ((userInput == "보") && (cpu1=="가위"))){
       alert("cpu가 " + cpu1 + "를(을) 내서 cpu가공격권을 가집니다." + " CPU: " + cpu1 + " User: " + userInput);
       mzp2();
   } else if (((userInput == "가위" ) && (cpu1 == "보")) || ((userInput == "바위") && (cpu1 == "가위")) || ((userInput == "보") && (cpu1=="바위"))) {
       alert("cpu가 " + cpu1 + "를(을) 내서 당신이 공격권을 가집니다." + " CPU: " + cpu1 + " User: " + userInput);
       mzp3();
      }
  }

function mzp2(){
  var cpu2 = Math.floor(Math.random() * 3 + 1);
  console.log(cpu2);
  userInput2 = prompt ("묵, 찌, 빠 중 하나를 다시 입력해 주세요.");
  if (userInput2 != "묵" && userInput2 != "찌" && userInput2 != "빠"){
    alert("묵, 찌, 빠 만 입력 가능합니다.");
    mzp2();
  }
  if (userInput2 === null) {
    return;
  }

    if (cpu2 == 1) {
        cpu2 = "묵";
      } else if (cpu2 == 2) {
        cpu2 = "찌";
      } else if (cpu2 == 3){
        cpu2 = "빠";
    }

     if (userInput2 == cpu2) {
      alert("cpu가 " + cpu2 + "를(을) 냈으므로 당신이 졌습니다." + " CPU: " + cpu2 + " User: " + userInput2);
    } else if (((userInput2 == "묵" ) && (cpu2 == "빠")) || ((userInput2 == "찌") && (cpu2 == "묵")) || ((userInput2 == "빠") && (cpu2 == "찌"))) {
      alert("cpu가 " + cpu2 + "를(을) 내서 공격권을 가집니다."+ " CPU: " + cpu2 + " User: " + userInput2);
      mzp2();
    } else if (((userInput2 == "묵" ) && (cpu2 == "찌")) || ((userInput2 == "찌") && (cpu2 == "빠")) || ((userInput2 == "빠") && (cpu2 == "묵"))) {
      alert("cpu가 " + cpu2 + "를(을) 내서 당신이 공격권을 가집니다."+ " CPU: " + cpu2 + " User: " + userInput2);
      mzp3();
    }
}

function mzp3(){
  var cpu3 = Math.floor(Math.random() * 3 + 1);
  console.log(cpu3);
  userInput3 = prompt ("묵, 찌, 빠 중 하나를 다시 입력해 주세요.");
  if (userInput2 != "묵" && userInput3 != "찌" && userInput3 != "빠"){
    alert("묵, 찌, 빠 만 입력 가능합니다.");
    mzp3();
  }
  if (userInput3 === null) {
    return;
  }

    if (cpu3 == 1) {
        cpu3 = "묵";
      } else if (cpu3 == 2) {
        cpu3 = "찌";
      } else if (cpu3 == 3){
        cpu3 = "빠";
    }

     if (userInput3 == cpu3) {
      alert("cpu가 " + cpu3 + "를(을) 냈으므로 당신이 이겼습니다." + " CPU: " + cpu3 + " User: " + userInput3);
    } else if (((userInput3 == "묵" ) && (cpu3 == "빠")) || ((userInput3 == "찌") && (cpu3 == "묵")) || ((userInput3 == "빠") && (cpu3 == "찌"))) {
      alert("cpu가 " + cpu3 + "를(을) 내서 공격권을 가집니다."+ " CPU: " + cpu3 + " User: " + userInput3);
      mzp2();
    } else if (((userInput3 == "묵" ) && (cpu3 == "찌")) || ((userInput3 == "찌") && (cpu3 == "묵")) || ((userInput3 == "빠") && (cpu3 == "묵"))) {
      alert("cpu가 " + cpu3 + "를(을) 내서 당신이 공격권을 가집니다."+ " CPU: " + cpu3 + " User: " + userInput3);
      mzp3();
    }
}

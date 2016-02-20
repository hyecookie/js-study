
var cpuInput= ["가위","바위","보"];
var random = Math.floor(Math.random() * cpuInput.length);
var cpu = cpuInput[random];


for (var i = 0; i < cpuInput.length; i = i + 1) {
  var user = prompt("가위 바위 보 중 하나를 입력해 주세요.");
    if((i = 0 && user === "가위") || (i = 1 && user === "바위") || (i = 2 && user === "보")){
     alert("제가" + cpu + "를 냈으므로 비겼습니다");
    }
    if((i = 0 && user === "바위") || (i = 1 && user === "보") || (i = 2 && user === "가위")){
     alert("제가" + cpu + "를 냈으므로 당신이 이겼습니다");
     break;
    }
    if((i = 0 && user === "보") || (i = 1 && user === "가위") || (i = 2 && user === "바위")){
     alert("제가" + cpu + "를 냈으므로 당신이 졌습니다");
     break;
   }
}

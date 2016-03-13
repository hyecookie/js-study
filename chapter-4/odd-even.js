step1();

function step1 () {
  var userInput1 = prompt("선턴을 결정해 주세요. cpu 선턴 : 1, Player 선턴 : 2");
  if (userInput1 != 1 && userInput1 != 2 ) {
    alert("1과 2만 입력 가능합니다");
    step1();
  } else if (userInput1 === null){
    return;
  } else if (userInput1 == 1) {
    cpuattack();
  } else if (userInput1 == 2 ) {
    playerattack();
  }
}

function cpuattack () {
  var cpu1 = Math.floor(Math.random() * 100 + 1);
  var userInput2 = prompt("cpu가 숫자를 골랐습니다. 홀, 짝 중 하나를 입력하세요.");
  if (userInput2 != "홀" && userInput2 != "짝" ) {
    alert("홀, 짝만 입력 가능합니다");
    cpuattack();
  }
  if ((((cpu1 % 2) === 0) && (userInput2 === "짝")) || (((cpu1 % 2) !== 0) && (userInput2 === "홀"))) {
    alert("정답 입니다. " + " cpu : " + cpu1 + " , player : " + userInput2 );
  } else if ((((cpu1 % 2) === 0) && (userInput2 === "홀")) || (((cpu1 % 2) !== 0) && (userInput2 === "짝"))) {
    alert("오답 입니다." + " cpu : " + cpu1 + " , player : " + userInput2 );
  }
}

function playerattack () {
  var cpu2 = Math.floor(Math.random() * 2 + 1);
  if (cpu2 === 1) {
    cpu2 = "홀";
  } else if (cpu2 === 2) {
    cpu2 = "짝";
  }

  var userInput3 = prompt("1과 100 사이의 숫자 중 하나를 입력해 주세요.");
  if ( userInput3 < 1 || userInput3 > 100 ) {
    alert("1과 100 사이의 숫자만 입력 가능합니다");
    playerattack();
  }
  if ((((userInput3 % 2) === 0) && (cpu2 === "짝")) || (((userInput3 % 2) !== 0 ) && (cpu2 === "홀"))) {
    alert("cpu가 맞췄습니다." + " cpu : " + cpu2 + " , player : " + userInput3);
  } else if ((((userInput3 % 2) === 0) && (cpu2 === "홀")) || (((userInput3 % 2) !== 0 ) && (cpu2 === "짝"))) {
    alert("cpu가 틀렸습니다." + " cpu : " + cpu2 + " , player : " + userInput3);
    }
}

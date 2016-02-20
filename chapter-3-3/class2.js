//parseInt("1234")

var user = prompt();
// 가위, 바위, 보
var cpu = random();
// 처리 alert
// 이겼는지 졌는지 뜨게


// dog를 입력해을때 경우의 수 6개가 출력되게 하는ㄱ...



function add() {
  var num = 0;
  for (var i = 0; i < 11; i++) {
    num = num +i;
  }
  console.log(num);
}

add();

//
function addRecursive(num) {
  if (num == 1) {
    return 1;
  }
  return num + addRecursive(num - 1);
}
var result = addRecursive(10);
console.log(result);

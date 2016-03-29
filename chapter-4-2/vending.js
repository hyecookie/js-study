buy();
function buy() {
  var coke = [1,2,3,4,5,6];

  for (i = 0; i < coke.length; i++){
    var userInput = prompt ("콜라를 구입 하려면 1, 동전을 반환하려면 2를 누르세요.");
    if (userInput == 1 ) {
    coke.pop(i);
    var left = coke.length;
    alert ("콜라1개를 구입하고" + left + "캔이 남았습니다.");
    } else if (userInput == 2) {
    alert("동전을 반환 했습니다");
    return;
    } else if (userInput === null) {
      return;
    } else if ((userInput !== 1) && (userInput !==2) && (userInput!==null)){
    alert("올바른 값을 입력 하세요");
    buy();
    }
  }
}

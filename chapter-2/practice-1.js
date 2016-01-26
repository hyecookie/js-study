
(function() {
"use strict";
})();

var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

console.log (location1);

var guess;//사용자입력값
var hits = 0;
var guesses = 0;
var isSunk = false; //전함이 침몰했는지... 변수는 타입이있다.

var isUserLocation1 = false;
var isUserLocation2 = false;
var isUserLocation3 = false;

if (guess == location1) {
  isUserLocation1 = true;
}

if (guess == location1 && isUserLocation1 == true) {

} else {hits = hist+1}


//숙제.. 반복된거 안누르게.

while (isSunk === false) {
  guess = prompt ("준비, 조준, 발사!(0에서 6까지 중 추측한 숫자를 입력하세요):");
  //취소null
  console.log(guess);
  if (guess==null){
    break;
  }


  if (guess < 0 || guess > 6){
    console.log("올바른 방 번호를 입력하세요" + guess);
    alert ("올바른 방 번호를 입력하세요"); }
    else {
      guesses = guesses + 1;
      if (guess == location1 || guesses == location2 || guesses == location3){
        alert ("명중!");
        hits = hits+1;
        console.log ("명중된 다음 변수갱신여부" + hits);
        if (hits == 3) {
          isSunk = true;
          alert ("전함침몰");
      } else {
        alert ("실패!");
      }
    }
  }
}
//while맞으면 전체 반복해라는 뜻. 아니면 나가서 그 아래의 것을 실행

var stats="전함 격침을 위해"+guesses+"번 발사 했습니다."+"따라서 명중률은"+(3/guesses)+"입니다.";
alert(stats);
//코드읽을수있어야한당

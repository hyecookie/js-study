var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;


var guess;//사용자입력값
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
  guess = prompt ("준비, 조준, 발사!(0에서 6까지 중 추측한 숫자를 입력하세요):");
  if (guess < 0 || guess > 6){
    alert ("올바른 방 번호를 입력하세요");
    } else {
      guesses = guesses + 1;
      if (guess == location1 || guesses == location2 || guesses == location3){
        alert ("명중!");
        hits = hits+1;
        if (hits == 3) {
          isSunk = true;
          alert ("전함침몰");
      } else {
        alert ("실패!");
      }
    }
  }
}


var stats="전함 격침을 위해"+guesses+"번 발사 했습니다."+"따라서 명중률은"+(3/guesses)+"입니다.";
alert(stats);

var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var isUserLocation1 = false;
var isUserLocation2 = false;
var isUserLocation3 = false;


var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;


while (isSunk === false) {
  guess = prompt ("0에서 6중 명중시킬 전함을 입력하세요");
  if (guess === null) {break;}
  if (guess < 0 || guess > 6) {alert ("올바른 전함번호 입력");}
  if (guess == location1 || guess == location2 || guess == location3 ){
    guesses = guesses + 1;
    if ((guess == location1 && isUserLocation1 === true)||(guess == location2 && isUserLocation2 === true)||(guess == location3 && isUserLocation3 === true)) {
      alert ("이미 폭파된 전함입니다.");
      hits = hits + 0 ;
    }
    if (guess == location1 && isUserLocation1 === false) {
      alert ("명중");
      hits = hits + 1;
      isUserLocation1 = true;
    }
    if (guess == location2 && isUserLocation2 === false) {
      alert ("명중");
      hits = hits + 1;
      isUserLocation2 = true;
    }
    if (guess == location3 && isUserLocation3 === false) {
      alert ("명중");
      hits = hits + 1;
      isUserLocation3 = true;
      }


    if (hits == 3) {
      isSunk = true;
      alert ("전함침몰");
    }
  } else {
    alert ("실패");
  }
}

var stats="전함 격침을 위해"+guesses+"번 발사 했습니다."+"따라서 명중률은"+(3/guesses)+"입니다.";
alert(stats);

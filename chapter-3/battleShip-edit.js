//"use strict";
//cmd + /
// !는 아니다 라는 뜻. !true = false


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


while (!isSunk) {
  guess = prompt ("0에서 6중 명중시킬 전함을 입력하세요");
  if (guess === null) {
    break;
  }
  if (guess < 0 || guess > 6) {
    alert ("올바른 전함번호 입력");
    continue;
  }

  if (guess == location1 || guess == location2 || guess == location3 ){
    guesses = guesses + 1;

    if ((guess == location1 && isUserLocation1)||(guess == location2 && !isUserLocation2)||(guess == location3 && !isUserLocation3)) {
      alert ("이미 폭파된 전함입니다.");
      continue;
    }

    if (guess == location1 && !isUserLocation1) {
      alert ("명중");
      hits = hits + 1;
      isUserLocation1 = true;
    }

    if (guess == location2 && !isUserLocation2) {
      alert ("명중");
      hits = hits + 1;
      isUserLocation2 = true;
    }

    if (guess == location3 && !isUserLocation3) {
      alert ("명중");
      hits = hits + 1;
      isUserLocation3 = true;
      }

    if (hits == 3) {
      isSunk = !isSunk;
      alert ("전함침몰");
    }
  } else {
    alert ("실패");
  }
}

var stats="전함 격침을 위해"+guesses+"번 발사 했습니다."+"따라서 명중률은"+(3/guesses)+"입니다.";
alert(stats);

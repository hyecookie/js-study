function add (number) {
  if (number === 1) {
    return 1;
  }
  return number + add (number - 1);
}


// 마지막 return 1; 을 add(2-1);에 대입 위로 올라가면서 적용한다.
// 돌면서 남는거에 재 대입을 한다.

// parseInt 문자열로 입력된 숫자를 숫자로 변환해준다.

//묵찌빠 문제

// 함수 묶는 방법

var miniGame = {
  test: 10,
  rspGame: function() {
    console.log('rspGame');
  },
  mjpGame: function() {
    console.log('mjpGame');
  }
};


// window.miniGqme.rspGame 로 불러온다.


var test = 10;

function rspGame(){
}

function mjpGame() {

}

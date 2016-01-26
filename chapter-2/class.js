function totalFruits() {
  return apple+banana+grape;
}

var melon = 80;

if (apple>banana) {
  console.log('사과가 더 많음.');
}else{
    console.log('바나나가 더 많음.');
}


if (false) {
  console.log('사과가 더 많음.');
} else {
    console.log('바나나가 더 많음.');
}


/*위에서 아래로 내려가면서 체크한다고 생각하면됨. 조건이 맞으면 위에꺼가 출력된다.*/

&&//다 맞아야 실행
|| // or 둘 중 하나가 맞으면 실행.

&&||//섞어쓸수있다.
!=//같지않다.
%=//나눈것의 나머지

var number = 11;

if (number % 2 == 0 ){
  console.log ('짝수입니다.');
} else if (number % 2 != 0 ){
  console.log ('홀수입니다.');
}


var index=1;
whilte(number%2==1){
  console.log()('짝수가 아닙니다다');
}

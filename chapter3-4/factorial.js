var userInput = prompt("숫자를 입력해 주세요.");
var num = ParseInt(userInput);// 숫자로 변환해준다. parseFloat()
var renew = userInput - 1;
factorial (num);

function factorial(n){
     while (renew > 1) {
       n = n * (renew);
       renew = renew - 1;
     }
     alert(n);
}

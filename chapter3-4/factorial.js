var userInput = prompt("값을 입력해 주세요.");
var num = userInput;
var renew = userInput - 1;
factorial (num);

function factorial(n){
     while (renew > 1) {
       num = num * (renew);
       renew = renew - 1;
     }
     alert(num);
}

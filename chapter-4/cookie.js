
var userName = ["김","쿠","키"];
var temp = userName;
console.log(temp);
for (var i = 0 ; i < userName.length; i++ ) {
  userName = ["김","쿠","키"];
  userName[i] = "*";
  console.log(userName[0] + userName[1] + userName[2]);
}

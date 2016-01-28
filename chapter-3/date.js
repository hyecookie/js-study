user = prompt("년, 월, 일 을 입력하세요. ex> 20160401");

var year = user.substring (0, 4);
var month = user.substring (4, 6);
var day = user.substring (6, 8);


alert ( year + "년" + month + "월" + day + "일" );

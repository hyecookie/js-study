//var 에는 여러가지 타입이 있다.
10 == "10" true는 버그
10 === "10" false. 세 개 쓰는 걸 추천.


""는 문자열

기본 API
string
w3schools 에 가 보면 기본 API리스트가 있다.

asciiboard

"V".charCodeAt(0)
String.fromCharCode(65)

"asdf".substring(0,1)

"20160121".substring(0,4)


가나라마바사 분리해보기
var ganada = "가나라마바사".substring (0,2)
var mabasa = "가나라마바사".substring (2,6)
ganada+"다" + mabasa

substring, concat으로 하는거.

.concat
//Joins two or more strings, and returns a new joined strings
.charAt
//Returns the character at the specified index (position)
//구체체
.CharCodeAt
//Returns the Unicode of the character at the specified index
.fromCharCode
//Converts Unicode values to characters

"CAT".CharCodeAt(0)-2
String.fromCharCode("CAT".charCodeAt(0)-2)
String.fromCharCode(65)




CAT
AYR

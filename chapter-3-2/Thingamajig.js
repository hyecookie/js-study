function clunk(times) {
  var num = times;
  while (num > 0) {
    display ("철컥");
    num = num -1;
    console.log(num);
  }
}
// clunk = facky = times = num
function thingamajig(size) {
  var facky = 1;
  clunkCounter = 0;
  
  if (size === 0) {
    display ("찰칵");
  }
  else if (size == 1) {
    display ("쿵");
  }
  else  {
    while (size > 1) {
     facky = facky * size ;
    //  console.log(facky); 5 20 60 120
     size = size - 1;
    }
    clunk(facky);

  }
}
function display (output) {
 console.log(output);
 clunkCounter = clunkCounter + 1 ;
}

var clunkCounter = 0;
thingamajig(5);
console.log(clunkCounter);
// display('hello');

function calculateArea(r) {
  var area;
  if (r <=0) {
    return 0;

  } else {
    area = 5 * r * r;
    return area;
  }
}
var radius = 5;
var theArea = calculateArea(radius);
console.log("면적:" + theArea);

var balance = 10500;
var cameraOn = true;

function steal (balance, amount) {
  cameraOn = false;
  if (amount < balance) {
    balance = balance - amount;
  }
  return amount;
  cameraOn = true;
}
var amount = steal (balance, 1250);
alert ("범인,당신은"+amount+"를훔쳤습니다.");

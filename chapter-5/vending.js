var vendingMachine = {
  kind: [
    {
      name: 'coke',
      price: 200,
      total: 10
    },
    {
      name: 'orangejuice',
      price: 100,
      total: 10
    },
    {
      name: 'redbull',
      price: 500,
      total: 10
    }
  ],


  buy: function () {
    var money = prompt('투입할 금액을 입력해 주세요');
    var select = prompt('음료를 선택해 주세요' + 'coke = 0, orangejuice = 1, redbull = 2');
    if ( money < this.kind[select].price) {
      alert("금액이 부족합니다. 다시 투입해주세요.");
      vendingMachine.buy();
    } else if (money >= this.kind[select].price) {
      if(select) {
        this.kind[0].total = this.kind[select].total - 1;
        var rest = money - this.kind[select].price;
        alert(money + ' 원 으로' + this.kind[select].name + ' 구매하고' + rest + ' 원을 반환합니다.');
        return;
      }
    }
  }
};
vendingMachine.buy();

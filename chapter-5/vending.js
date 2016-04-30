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
    if ( money < 100) {
      alert("금액이 부족합니다. 다시 투입해주세요.");
      vendingMachine.buy();
      return;
    }
    var select = prompt('음료를 선택해 주세요' + 'coke = 0, orangejuice = 1, redbull = 2');
    if ((select != 0) && (select != 1) && (select != 2)){
      alert("없는 품목입니다 다시 선택해 주세요.");
      vendingMachine.buy();
      return;
    }

    if ((money >= this.kind[select].price) && ((select == 0) || (select == 1) || (select == 2))) {
        this.kind[0].total = this.kind[select].total - 1;
        var rest = money - this.kind[select].price;
        prompt(money + ' 원 으로' + this.kind[select].name + ' 구매하고' + rest + ' 원이 남았습니다.');
        return;
      }
    }
};
vendingMachine.buy();

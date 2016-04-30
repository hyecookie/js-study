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
    console.log(money);

    var select = prompt('음료를 선택해 주세요' + 'coke = 0, orangejuice = 1, redbull = 2');
    console.log(select);

    if(select == 0) {
      this.kind[0].total = this.kind[0].total - 1;
      var rest0 = money - this.kind[0].price;
      console.log(rest0);
      alert(money + ' 원 으로' + this.kind[0].name + ' 구매하고' + rest0 + ' 원을 반환합니다.');
    } else if (select == 1) {
      this.kind[1].total = this.kind[1].total - 1;
      var rest1 = money - this.kind[1].price;
      alert(money + ' 원 으로' + this.kind[1].name + ' 구매하고' + rest1 + ' 원을 반환합니다.');
    } else if (select == 2) {
      this.kind[2].total = this.kind[2].total - 1;
      var rest2 = money - this.kind[2].price;
      alert(money + ' 원 으로' + this.kind[2].name + ' 구매하고' + rest2 + ' 원을 반환합니다.');
    }
    return;

  }
};
vendingMachine.buy();

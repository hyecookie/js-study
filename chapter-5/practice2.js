var clock = {
  alam : function() {
    var alam = prompt('알람시간을 입력해 주세요 24시 기준');
    var hours = Math.floor(Math.random() * this.hours + 1);
    if (alam == this.hours) {
      alert('알람입니다. 때르릉');
    } else if (alam != this.horus) {
      alert('...');
    }
    return;
  },
  hours : 24,
  minutes : 60,
  seconds : 86400,
};

clock.alam ();

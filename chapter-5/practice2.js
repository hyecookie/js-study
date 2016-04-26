var clock = {
  alam : function() {
    var alam = prompt('알람시간을 입력해 주세요 24시 기준');
    if (alam == this.hours) {
      alert('알람입니다');
    }
  },
  hours : 24,
  minutes : 60,
  seconds : 86400,
};

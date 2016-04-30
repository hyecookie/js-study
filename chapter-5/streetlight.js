var streetlight = {
    light: true,
    hour: 0,
    minute: 0,
    second: 0,
    lightOn: function() {
      light = true;
      alert("불켜졌음");
    },

    lightOff: function() {
      light = false;
      alert("불꺼졌음");
    },

    time: function() {
      this.second = this.second + 1;
      if (this.second == 60) {
        this.second = 0;
        this.minute = this.minute + 1;
        if (this.minute == 60) {
          this.minute = 0;
          this.hour = this.hour + 1;
          if (this.hour == 24) {
            this.hour = 0;
            if ((20 <= this.hour <= 24) || ( 0 <= this.hour <=8)) {
              light = false;
            }
          }
        }
      }

       alert('현재 시간은 ' + this.hour + '시 ' + this.minute + '분 ' + this.second + '초');
    }
  };

streetlight.time(1000);

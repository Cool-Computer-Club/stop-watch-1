active=false;
var seconds;
var stoppedTime = 0;

var stopWatch = (function() {
  var self= {}, time='00:00:00.000', startTime, timeElapsed, timerRunning;

  self.getTime = function () {return time;};

  self.isActive = function () { return active;}
  // isactive and gettime are not used in the js code and they are only good for the test code. oops

  self.startTime = function () {
    if (!active) {
      startTime = Date.now(); //sets the current time in milisecs
      timerRunning = setInterval(self.update, 10); //setinterval starts the function every 20 miliseconds
    }
    active = true;
  }


  self.stopTime = function () {
    if (timeElapsed) {
    stoppedTime = timeElapsed.getTime();
  }
    active = false;
    clearInterval(timerRunning);
  }

  self.setTime = function (newTime) {
    time = newTime;
  }

  self.resetTime = function () {
    self.stopTime();
    self.setTime('00:00:00.000');
    document.getElementsByClassName('display')[0].innerText=time;
    stoppedTime = 0;
    timeElapsed = 0;
  }

  //http://www.w3schools.com/jsref/jsref_getutchours.asp
  self.update = function () {
    timeElapsed = new Date(Date.now() - startTime + stoppedTime);
    time = timeElapsed.toISOString().substring(11,23);
    seconds = time.substring(6,8);
    document.getElementsByClassName('display')[0].innerText=time;
  };
  document.getElementsByClassName('start_btn')[0].onclick=self.startTime;
  document.getElementsByClassName('stop_btn')[0].onclick=self.stopTime;
  document.getElementsByClassName('reset_btn')[0].onclick=self.resetTime;

  return self
})();

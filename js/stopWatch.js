var stopWatch = (function() {
  var self= {}, startTime, timeElapsed = 0, updateInterval, active=false, stoppedTime = 0;

  function getTimeElapsed () {return (Date.now() - startTime + stoppedTime);
  }

  function getFormatedTimeElapsed () {return formatTime(getTimeElapsed());}

  function formatTime(timeElapsed) {
    return (new Date(timeElapsed)).toISOString().substring(11,23);
  }

  function updateDisplay (currentTime) {
    document.getElementsByClassName('display')[0].innerText=currentTime;
  }

  function secondsFromFormatedTime (formatedTime) {
    return formatedTime.substring(6,8);
  }

  self.getStoppedTime= function () {return stoppedTime;};

  self.isActive = function () {return active;};

  // self.setTime = function (newTime) {time = newTime;};

  self.getTime = function () {return formatTime(timeElapsed);};

  self.getSeconds = function () {return secondsFromFormatedTime(formatTime(timeElapsed));};


  self.startTime = function () {
      if(!active){
      startTime = Date.now();
      updateInterval = setInterval(self.update, 10);
    }
    active=true;
  }

  self.stopTime = function () {
    if (timeElapsed) stoppedTime = timeElapsed;
    active = false;
    clearInterval(updateInterval);
  }

  self.resetTime = function () {
    self.stopTime();
    // self.setTime();
    document.getElementsByClassName('display')[0].innerText='00:00:00.000';
    stoppedTime = 0;
    timeElapsed = 0;
  }

  self.update = function () {
    timeElapsed = getTimeElapsed();
    updateDisplay(getFormatedTimeElapsed());
  };

  document.getElementsByClassName('start_btn')[0].onclick=self.startTime;

  document.getElementsByClassName('stop_btn')[0].onclick=self.stopTime;

  document.getElementsByClassName('reset_btn')[0].onclick=self.resetTime;

  return self;
})();

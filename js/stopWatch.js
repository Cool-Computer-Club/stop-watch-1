var stopWatch= {}
var active=false;
var time='00:00:00';
var startTime;
var hours, minutes, seconds, milliseconds;
var timerRunning;

stopWatch.getTime = function () {
    console.log(hours, minutes, seconds, milliseconds);
    return time;
  };

stopWatch.isActive = function () {
  return active;
}

stopWatch.start = function () {
  if (!active) {
    startTime = Date.now();
    timerRunning = setInterval(stopWatch.update, 1000);
  }
  active = true;
}

stopWatch.stop = function () {
  active = false;
  clearInterval(timerRunning);
}

stopWatch.setTime = function (newTime){
  time=newTime;
}

stopWatch.resetTime = function () {
  stopWatch.setTime('00:00:00');
}

stopWatch.update = function () {
  timeElapsed = new Date(Date.now() - startTime);
  hours = timeElapsed.getUTCHours();
  minutes = timeElapsed.getUTCMinutes();
  seconds = timeElapsed.getUTCSeconds();
  milliseconds = timeElapsed.getUTCMilliseconds();
  console.log(seconds)
};

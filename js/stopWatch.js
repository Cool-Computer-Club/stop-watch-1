var stopWatch= {}
var active=false;
var time='00:00:00';
var startTime;
var hours, minutes, seconds, milliseconds;
var timerRunning;
var stopedTime=0;

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
    timerRunning = setInterval(stopWatch.update, 20);
  }
  active = true;

}

stopWatch.stop = function () {
  stopedTime = timeElapsed.getTime();
  console.log(stopedTime)
  active = false;
  clearInterval(timerRunning);
}

stopWatch.setTime = function (newTime){
  time=newTime;
}

stopWatch.resetTime = function () {
  stopWatch.stop();
  stopWatch.setTime('00:00:00');
  document.getElementsByClassName('display')[0].innerText=time;
  stopedTime = 0;
}

stopWatch.update = function () {
  timeElapsed = new Date(Date.now() - startTime + stopedTime);
  hours = timeElapsed.getUTCHours();
  minutes = timeElapsed.getUTCMinutes();
  seconds = timeElapsed.getUTCSeconds();
  milliseconds = timeElapsed.getUTCMilliseconds();
  time=hours+':'+minutes+':'+seconds+':'+milliseconds;
  document.getElementsByClassName('display')[0].innerText=time;
};
document.getElementsByClassName('start_btn')[0].onclick=stopWatch.start;
document.getElementsByClassName('stop_btn')[0].onclick=stopWatch.stop;
document.getElementsByClassName('reset_btn')[0].onclick=stopWatch.resetTime;

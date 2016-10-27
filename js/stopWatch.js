var stopWatch= {} ,active=false, time='00:00:00', startTime, hours, minutes, seconds, milliseconds, timerRunning, stopedTime=0;

stopWatch.getTime = function () {
    return time;
  };

//stops the time
stopWatch.isActive = function () { return active;}
// isactive and gettime are not used in the js code and they are only good for the test code. oops

stopWatch.startTime = function () {
  if (!active) {
    startTime = Date.now(); //sets the current time in milisecs
    timerRunning = setInterval(stopWatch.update, 300); //setinterval starts the function every 20 miliseconds
  }
  active = true;
}

stopWatch.stopTime = function () {
  stopedTime = timeElapsed.getTime();
  active = false;
  clearInterval(timerRunning);
}

stopWatch.setTime = function (newTime) {time=newTime;}

stopWatch.resetTime = function () {
  stopWatch.stopTime();
  stopWatch.setTime('00:00:00');
  document.getElementsByClassName('display')[0].innerText=time;
  stopedTime = 0;
  timeElapsed = 0;
}

//http://www.w3schools.com/jsref/jsref_getutchours.asp
stopWatch.update = function () {
  timeElapsed = new Date(Date.now() - startTime + stopedTime);
  hours = timeElapsed.getUTCHours();
  minutes = timeElapsed.getUTCMinutes();
  seconds = timeElapsed.getUTCSeconds();
  milliseconds = timeElapsed.getUTCMilliseconds();
  var strSeconds=seconds.toString();
  var strMilliseconds=milliseconds.toString();
  if(strSeconds.length===1){seconds='0'+seconds;}
  if(strMilliseconds.length===2){milliseconds='0'+milliseconds}
  if(strMilliseconds.length===1){milliseconds='00'+milliseconds}
  time='0'+hours+':'+'0'+minutes+':'+seconds+':'+milliseconds;
  document.getElementsByClassName('display')[0].innerText=time;
};
document.getElementsByClassName('start_btn')[0].onclick=stopWatch.startTime;
document.getElementsByClassName('stop_btn')[0].onclick=stopWatch.stopTime;
document.getElementsByClassName('reset_btn')[0].onclick=stopWatch.resetTime;

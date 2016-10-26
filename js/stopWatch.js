var stopWatch= {}
var active=false;
var time='00:00:00';
stopWatch.getTime = function () {
    return time;
  };

stopWatch.isActive = function () {
  return active;
}

stopWatch.start = function () {
  active = true;
}

stopWatch.stop = function () {
  active = false;
}

stopWatch.setTime = function (newTime){
  time=newTime;
}

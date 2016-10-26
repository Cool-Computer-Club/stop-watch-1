var stopWatch= {}
var active=false;
stopWatch.getTime = function () {
    return '00:00:00';
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

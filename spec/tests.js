QUnit.test( "Testing whether the stopwatch starts inactive", function( assert ) {
  assert.strictEqual(stopWatch.isActive(), false, "Passed!" );
});

QUnit.test( "Testing time before stopwatch starts", function( assert ) {
  assert.strictEqual(stopWatch.getTime(), '00:00:00:000', "Passed!" );
});

QUnit.test( "testing if we can start the stopwatch", function( assert ) {
  stopWatch.startTime();
  assert.strictEqual(stopWatch.isActive(), true, "Passed!" );
});
//we should add one more test for stop time
QUnit.test( "testing if we can stop the stopwatch", function( assert ) {
  stopWatch.stopTime();
  assert.strictEqual(active, false, "Passed!" );
});

QUnit.test( "testing if we can stop the stopwatch", function( assert ) {
  stopWatch.stopTime();
  assert.strictEqual(active, false, "Passed!" );
});

QUnit.test( "testing if we can change the time", function( assert ) {
  stopWatch.setTime('05:02:02');
  assert.strictEqual(stopWatch.getTime(), '05:02:02', "Passed!" );
});

QUnit.test( "testing if we can reset the time", function( assert ) {
  stopWatch.resetTime();
  assert.strictEqual(stopWatch.getTime(), '00:00:00:000', "Passed!" );
});
QUnit.test("test resetTime on the DOM", function(assert){
  document.getElementsByClassName('display')[0].innerText = 'whatever';
  stopWatch.resetTime();
  assert.strictEqual(document.getElementsByClassName('display')[0].innerText, '00:00:00:000', "Passed!");
});

QUnit.test('tests if we can click on start and have it start', function (assert) {
  stopWatch.stopTime();
  console.log('called stop ' + active);
  document.getElementsByClassName('start_btn')[0].click();
  console.log('clicked start ' + active);
  assert.strictEqual(active, true, "passed!" );
});

QUnit.test('tests if we can click on stop and have it stop', function (assert) {
  document.getElementsByClassName('stop_btn')[0].click();
  assert.strictEqual(active, false, "passed!" );
});

QUnit.test('tests if we can click on reset and have it update the DOM', function (assert) {
  document.getElementsByClassName('display')[0].innerText = 'whatever';
  document.getElementsByClassName('reset_btn')[0].click();
  assert.strictEqual(document.getElementsByClassName('display')[0].innerText, '00:00:00:000', "Passed!");
});

QUnit.test('tests if we can click on reset and have it update stop', function (assert) {
  stopWatch.startTime();
  document.getElementsByClassName('reset_btn')[0].click();
  assert.strictEqual(active, false, "passed!");
});


QUnit.test("Asynch Test", function( assert ) {
  var done = assert.async();
  stopWatch.resetTime();
  stopWatch.startTime();
  setTimeout(function() {
    assert.strictEqual(seconds, '03', "got the right time!");
    done();
  }, 3100);
});
QUnit.test("check if the stoped time is correct", function( assert ) {
  var done = assert.async();
  stopWatch.resetTime();
  stopWatch.startTime();
  setTimeout(function() {
    stopWatch.stopTime();
    assert.strictEqual(Math.ceil(stopedTime/1000), 3, "got the right time!");
    done();
  }, 3000);
});

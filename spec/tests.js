QUnit.test( "Testing whether the stopwatch starts inactive", function( assert ) {
  assert.strictEqual(stopWatch.isActive(), false, "Passed!" );
});

QUnit.test( "Testing time before stopwatch starts", function( assert ) {
  assert.strictEqual(stopWatch.getTime(), '00:00:00.000', "Passed!" );
});

QUnit.test( "testing if we can start the stopwatch", function( assert ) {
  stopWatch.startTime();
  assert.strictEqual(stopWatch.isActive(), true, "Passed!" );
});

QUnit.test( "testing if we can stop the stopwatch", function( assert ) {
  stopWatch.stopTime();
  assert.strictEqual(stopWatch.isActive(), false, "Passed!" );
});
QUnit.test("check if the stopped time is correct", function( assert ) {
  var done = assert.async();
  stopWatch.resetTime();
  stopWatch.startTime();
  setTimeout(function() {
    stopWatch.stopTime();
    assert.strictEqual(Math.ceil(stopWatch.getStoppedTime()/1000), 3, "Passed!");
    done();
  }, 3000);
});

// QUnit.test( "testing if we can stop the stopwatch", function( assert ) {
//   stopWatch.stopTime();
//   assert.strictEqual(stopWatch.isActive(), false, "Passed!" );
// });

// QUnit.test( "testing if we can change the time", function( assert ) {
//   stopWatch.setTime(60*1000*5 + 1000*2 + 2);
//   assert.strictEqual(stopWatch.getTime(), "00:05:02.002", "Passed!" );
// });

QUnit.test( "testing if we can reset the time", function( assert ) {
  stopWatch.resetTime();
  assert.strictEqual(stopWatch.getTime(), '00:00:00.000', "Passed!" );
});

QUnit.test("test resetTime on the DOM", function(assert){
  document.getElementsByClassName('display')[0].innerText = 'whatever';
  stopWatch.resetTime();
  assert.strictEqual(document.getElementsByClassName('display')[0].innerText, '00:00:00.000', "Passed!");
});

QUnit.test('tests if we can click on start and have it start', function (assert) {
  stopWatch.stopTime();
  document.getElementsByClassName('start_btn')[0].click();
  assert.strictEqual(stopWatch.isActive(), true, "passed!" );
});

QUnit.test('tests if we can click on stop and have it stop', function (assert) {
  document.getElementsByClassName('stop_btn')[0].click();
  assert.strictEqual(stopWatch.isActive(), false, "passed!" );
});

QUnit.test('tests if we can click on reset and have it update the DOM', function (assert) {
  document.getElementsByClassName('display')[0].innerText = 'whatever';
  document.getElementsByClassName('reset_btn')[0].click();
  assert.strictEqual(document.getElementsByClassName('display')[0].innerText, '00:00:00.000', "Passed!");
});

QUnit.test('tests if we can click on reset and have it update stop', function (assert) {
  stopWatch.startTime();
  document.getElementsByClassName('reset_btn')[0].click();
  assert.strictEqual(stopWatch.isActive(), false, "passed!");
});


QUnit.test("Asynch Test", function( assert ) {
  var done = assert.async();
  stopWatch.resetTime();
  stopWatch.startTime();
  setTimeout(function() {
    assert.strictEqual(stopWatch.getSeconds(), '03', "Passed!");
    done();
  }, 3100);
});

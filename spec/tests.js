QUnit.test( "Testing time before stopwatch starts", function( assert ) {
  assert.strictEqual(stopWatch.getTime(), '00:00:00', "Passed!" );
});

QUnit.test( "Testing whether the stopwatch starts inactive", function( assert ) {
  assert.strictEqual(stopWatch.isActive(), false, "Passed!" );
});

QUnit.test( "testing if we can start the stopwatch", function( assert ) {
  stopWatch.start();
  assert.strictEqual(stopWatch.isActive(), true, "Passed!" );
});

QUnit.test( "testing if we can stop the stopwatch", function( assert ) {
  stopWatch.stop();
  assert.strictEqual(stopWatch.isActive(), false, "Passed!" );
});

QUnit.test( "testing if we can change the time", function( assert ) {
  stopWatch.setTime('05:02:02');
  assert.strictEqual(stopWatch.getTime(), '05:02:02', "Passed!" );
});

QUnit.test( "testing if we can reset the time", function( assert ) {
  stopWatch.resetTime();
  assert.strictEqual(stopWatch.getTime(), '00:00:00', "Passed!" );
});


QUnit.test( "testing if we can change the time", function( assert ) {
  assert.strictEqual(stopWatch.getTime(), '00:00:03', "Passed!" );
});

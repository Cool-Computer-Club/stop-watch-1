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

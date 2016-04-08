var chai = require('chai');
var expect = chai.expect;
var Frame = require('../src/frame');

describe('Frame', function() {

	it('Frame pins should go down when knockPins', function() {
    	var frame = new Frame();
		frame.knockPins(5);

    	expect(frame.pins()).to.equal(5);
	});

	it('Frame tries should go down when knockPins', function() {
		var frame = new Frame();
		frame.knockPins(5);

		expect(frame.tries()).to.equal(1);
	});

	it('Frame should be a spare if no pins left and tries is 1', function() {
		var frame = new Frame();
		frame.knockPins(5);
		frame.knockPins(5);

		expect(frame.isSpare()).to.equal(true);
	});

	it('Frame should be a strike if no pins left and tries is 2', function() {
		var frame = new Frame();
		frame.knockPins(10);

		expect(frame.isStrike()).to.equal(true);
	});
});

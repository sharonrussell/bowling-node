var chai = require('chai');
var expect = chai.expect;
var Frame = require('../src/frame');

describe('Frame', function() {

	it('Frame pins should go down when knockPins', function() {
    	var frame = new Frame();
		frame.knockPins(5);

    	expect(frame.pins()).to.equal(5);
	});

	it('Frame tries should go up when knockPins', function() {
		var frame = new Frame();
		frame.knockPins(5);

		expect(frame.tries()).to.equal(1);
	});

	it('Frame should calculate its score correctly when 3 pins knocked', function() {
		var frame = new Frame();
		frame.knockPins(3);

		expect(frame.score()).to.equal(3);
	});

	it('Frame should calculate its score correctly when 6 pins knocked', function() {
		var frame = new Frame();
		frame.knockPins(6);

		expect(frame.score()).to.equal(6);
	});

	it('Frame should not allow another bowl if rolled twice and no strike', function () {
		var frame = new Frame();
		frame.knockPins(3);
		frame.knockPins(3);

		expect(frame.canBowl()).to.equal(false);
	});

	it('Frame should know when it is a spare', function() {
		var frame = new Frame();
		frame.knockPins(3);
		frame.knockPins(7);

		expect(frame.isSpare()).to.equal(true);
	});
});

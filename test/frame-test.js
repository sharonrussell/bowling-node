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
});

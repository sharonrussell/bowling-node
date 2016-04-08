var Frame = require('../src/frame');

function Game() {
	this._rolls = [];
	this._frames = [];
	this._currentRoll = 0;

	for(var i = 0; i < 10; i++){
		this._frames.push(new Frame());
	}
}

Game.prototype.currentFrame = function() {
	if (this._currentRoll % 2 === 0) {
		var frame = this._currentRoll/2;
	} else {
		var frame = this._currentRoll/2 + 0.5;
	}

	return frame;
};

Game.prototype.roll = function(pins) {
	var frame = this._frames[0];
	frame.knockPins(pins);

	this._currentRoll++;
};

Game.prototype.getScore = function(){
	var score = 0;
	for (var i = 0; i < this._frames.length; i++){
		var currentFrame = this._frames[i];
		score += (10 - this._frames[i].pins());
	}
	return score;
};

module.exports = Game;

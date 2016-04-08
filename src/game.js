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
	this._rolls[this._currentRoll++] = pins;
};

Game.prototype.getScore = function(){
	var score = 0;
	for (var i = 0; i < this._rolls.length; i++){
		score += this._rolls[i];
	}
	return score;
};

module.exports = Game;

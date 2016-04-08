var Frame = require('../src/frame');

function Game() {
	this._rolls = [];
	this._frames = [];
	this._currentRoll = 0;
	this._currentFrame = 0;
	this._score = 0;

	for(var i = 0; i < 10; i++){
		this._frames.push(new Frame());
	}
}

Game.prototype.setCurrentFrame = function() {

	if (this._currentRoll % 2 === 0) {
		this._currentFrame = this._currentRoll/2;
	} else {
		this._currentFrame = this._currentRoll/2 + 0.5;
	}
};

Game.prototype.currentFrame = function() {
	var currentFrame = this._currentFrame;

	if(this._currentFrame === 10){
		currentFrame = this._currentFrame - 1;
	}

	return currentFrame;
}

Game.prototype.roll = function(pins) {
	this._currentRoll++;

	var currentFrame = this.currentFrame();
	var frame = this._frames[currentFrame];
	frame.knockPins(pins);
	this.updateScore(frame);
	this.setCurrentFrame();
};

Game.prototype.updateScore = function(currentFrame) {
};

Game.prototype.getScore = function(){
	return this._score;
};

module.exports = Game;

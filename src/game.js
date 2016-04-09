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
		this._currentFrame++;
	}

	if (this._currentFrame === 10) {
		this._currentFrame--;
	}
}

Game.prototype.currentFrame = function() {
	return this._currentFrame;
}

Game.prototype.roll = function(pins) {
	var frame = this._frames[this._currentFrame];
	frame.knockPins(pins);
	this.updateScore(frame);
	this.setCurrentFrame();
	this._currentRoll++;
}

Game.prototype.updateScore = function(frame) {
	this._score += frame.score();
}

Game.prototype.getScore = function(){
	return this._score;
}

module.exports = Game;

var Frame = require('../src/frame');

function Game() {
	this._frames = [];
	this._currentFrame = 0;
	this._score = 0;

	for(var i = 0; i < 10; i++){
		this._frames.push(new Frame(i+1));
	}
}

Game.prototype.setCurrentFrame = function(frame) {
	var frame = this._frames[this._currentFrame];

	if(!frame.canBowl()){
		this._currentFrame++;
	}
}

Game.prototype.currentFrame = function() {
	return this._frames[this._currentFrame];
}

Game.prototype.roll = function(pins) {
	var frame = this.currentFrame();
	frame.knockPins(pins);
	this.updateScore(frame);
	this.setCurrentFrame();
}

Game.prototype.updateScore = function(frame) {
	if(!frame.canBowl()) {
		this._score += frame.score();
	}
}

Game.prototype.getScore = function(){
	return this._score;
}

module.exports = Game;

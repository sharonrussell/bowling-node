function Frame(number) {
	this._startPins = 10;
	this._pinsKnockedDown = 0;
	this._tries = 0;
	this._isSpare = false;
	this._isStrike = false;
	this._canBowl = true;
	this._frameNumber = number;
}

Frame.prototype.knockPins = function(pins) {
	this._tries++

	if(this._pinsKnockedDown === 10 || this._tries === 2) {
		this._canBowl = false;
	}

	this._pinsKnockedDown += pins;
}

Frame.prototype.pins = function() {
	return this._startPins - this._pinsKnockedDown;
}

Frame.prototype.tries = function() {
	return this._tries;
}

Frame.prototype.score = function() {
	return this._pinsKnockedDown;
}

Frame.prototype.canBowl = function() {
	return this._canBowl;
}

Frame.prototype.number = function() {
	return this._frameNumber;
}

Frame.prototype.isSpare = function() {
	console.log(this._pinsKnockedDown);
	return this._pinsKnockedDown === 10 && this._tries === 2;
}

module.exports = Frame;

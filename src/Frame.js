function Frame(number) {
	this._startPins = 10;
	this._tries = 0;
	this._isSpare = false;
	this._isStrike = false;
	this._canBowl = true;
	this._frameNumber = number;
	this._spareBonus = false;
	this._strikeBonus = false;
	this._pinsKnockedInFirstTry = 0;
	this._pinsKnockedInSecondTry = 0;
}

Frame.prototype.knockPins = function(pins) {
	this._tries++

	if (this._isStrike || this._tries > 1) {
		this._canBowl = false;
	}

	this._updatePinsKnockedDown(pins);
}

Frame.prototype.pins = function() {
	return this._startPins - this._pinsKnockedDown;
}

Frame.prototype.tries = function() {
	return this._tries;
}

Frame.prototype.score = function() {
	if (this._spareBonus) {
		return this._spareScore();
	} else if (this._strikeBonus){
		return this._strikeScore();
	} else {
		return this._pinsKnockedDown;
	}
}

Frame.prototype.canBowl = function() {
	return this._canBowl;
}

Frame.prototype.number = function() {
	return this._frameNumber;
}

Frame.prototype.isSpare = function() {
	return this._pinsKnockedDown === 10 && this._tries === 2;
}

Frame.prototype.isStrike = function() {
	return this._isStrike = this._pinsKnockedDown === 10 && this._tries === 1;
}

Frame.prototype.hasSpareBonus = function() {
	this._spareBonus = true;
}

Frame.prototype.hasStrikeBonus = function() {
	this._strikeBonus = true;
}

Frame.prototype._updatePinsKnockedDown = function(pins) {
	if (this._tries < 2) {
		this._pinsKnockedInFirstTry += pins;
	} else {
		this._pinsKnockedInSecondTry += pins;
	}

	this._pinsKnockedDown = (this._pinsKnockedInFirstTry + this._pinsKnockedInSecondTry);
}

Frame.prototype._strikeScore = function() {
	return (this._pinsKnockedInFirstTry * 2) + (this._pinsKnockedInSecondTry * 2);
}

Frame.prototype._spareScore = function() {
	return (this._pinsKnockedInFirstTry * 2) + this._pinsKnockedInSecondTry;
}

module.exports = Frame;

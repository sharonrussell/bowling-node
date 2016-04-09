function Frame() {
	this._pins = 10;
	this._tries = 2;
	this._isSpare = false;
	this._isStrike = false;
}

Frame.prototype.knockPins = function(pins) {
	this._pins -= pins;

	if(this._pins === 0) {

		if(this._tries === 1) {
			this._isSpare = true;
		} else {
			this._isStrike = true;
		}
	}

	this._tries--;
}

Frame.prototype.pins = function() {
	return this._pins;
}

Frame.prototype.isSpare = function() {
	return this._isSpare;
}

Frame.prototype.isStrike = function() {
	return this._isStrike;
}

Frame.prototype.tries = function() {
	return this._tries;
}

Frame.prototype.score = function() {
	var score = (10 - this._pins);
	console.log("Score is: " + score);
	return score;
}

module.exports = Frame;

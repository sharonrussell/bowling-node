function Frame() {
	this._pins = 10;
	this._tries = 2;
	this._isSpare = false;
}

Frame.prototype.knockPins = function(pins) {
	this._pins -= pins;

	if(this._pins === 0 && this._tries === 1){
		this._isSpare = true;
	}

	this._tries--;
}

Frame.prototype.pins = function() {
	return this._pins;
}

Frame.prototype.isSpare = function() {
	return this._isSpare;
}

Frame.prototype.tries = function() {
	return this._tries;
}

module.exports = Frame;

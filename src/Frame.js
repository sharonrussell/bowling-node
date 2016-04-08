function Frame() {
	this._pins = 10;
	this._tries = 2;
}

Frame.prototype.knockPins = function(pins) {
	this._pins -= pins;

	this._tries--;
}

Frame.prototype.pins = function() {
	return this._pins;
}

Frame.prototype.tries = function() {
	return this._tries;
}

module.exports = Frame;

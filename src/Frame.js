function Frame() {
	this._pins = 10;
}

Frame.prototype.knockPins = function(pins) {
	this._pins -= pins;
}

Frame.prototype.pins = function() {
	return this._pins;
}

module.exports = Frame;

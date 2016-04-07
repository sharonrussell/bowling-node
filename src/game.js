function Game() {}

var score = 0;

Game.prototype.roll = function(pins) {
	score = score + pins;
};

Game.prototype.getScore = function(){
	return score;
};

module.exports = Game;

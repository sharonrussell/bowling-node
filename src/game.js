var score;

function Game() {
	score = 0;
}

Game.prototype.roll = function(pins) {
	score += pins;
};

Game.prototype.getScore = function(){
	return score;
};

module.exports = Game;

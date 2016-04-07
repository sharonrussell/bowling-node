var chai = require('chai');
var expect = chai.expect;
var Game = require('../src/game');

describe('Game', function() {
  it('Game score should be 0 when game is over if roll 0', function() {
    var game = new Game();

	for(var i = 0; i < 20; i++){
		game.roll(0);
	}

    expect(game.getScore()).to.equal(0);
  });
});

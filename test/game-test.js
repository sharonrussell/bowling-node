var chai = require('chai');
var expect = chai.expect;
var Game = require('../src/game');

describe('Game', function() {
  it('Game score should be 0 when game is over', function() {
    var game = new Game();

	for(var i = 0; i < 20; i++){
		game.roll();
	}

    expect(game.getScore()).to.equal(0);
  });
});

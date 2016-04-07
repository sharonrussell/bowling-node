var chai = require('chai');
var expect = chai.expect;
var Game = require('../src/game');

describe('Game', function() {

  	it('Game score should be 0 when game is over if roll all gutter balls', function() {
    	var game = new Game();

		for(var i = 0; i < 20; i++){
			game.roll(0);
		}

    	expect(game.getScore()).to.equal(0);
  	});

  	it('Game score should be 20 when game is over if roll all 1s', function() {
		var game = new Game();

  		for(var i = 0; i < 20; i++){
	  	game.roll(1);
  		}

		expect(game.getScore()).to.equal(20);
  	});

	it('Game score should be 16 when there is 1 spare', function() {
		var game = new Game();

		game.roll(5);
    	game.roll(5);
    	game.roll(3);

		expect(game.getScore()).to.equal(16);
	});
});

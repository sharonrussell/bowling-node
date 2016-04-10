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
			var score = game.getScore();
			var number = i+1;
		}

		expect(game.getScore()).to.equal(20);
	});

	it('Game score should be 16 when get a spare and a 3 at 2nd frame', function() {
		var game = new Game();

		game.roll(5);
    	game.roll(5);
		//now we are on the second frame (2 tries)
    	game.roll(3);
    	game.roll(0);

		expect(game.getScore()).to.equal(16);
	});

	it('Game current frame should be 2 when rolled 3 times', function(){
		var game = new Game();

		game.roll(1);
		game.roll(1);
		game.roll(1);

		expect(game.currentFrame().number()).to.equal(2);
	});

	it('Game current frame should be 6 when rolled 10 times', function(){
		var game = new Game();

		for(var i = 0; i < 10; i++){
			game.roll(1);
		}

		expect(game.currentFrame().number()).to.equal(6);
	});

	it('Game current frame should be 8 when rolled 14 times', function(){
		var game = new Game();

		for(var i = 0; i < 14; i++){
			game.roll(1);
		}

		expect(game.currentFrame().number()).to.equal(8);
	});
});

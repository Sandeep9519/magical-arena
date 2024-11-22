const Player = require('../models/Player');
const Arena = require('../arena/Arena');
const assert = require('assert');

describe('Arena', () => {
  it('should declare the correct winner', () => {
    const playerA = new Player('Player A', 50, 5, 10);
    const playerB = new Player('Player B', 100, 10, 5);
    const arena = new Arena();

    const winner = arena.fight(playerA, playerB);
    assert.strictEqual(winner.name, 'Player B'); 
  });

  it('should handle ties correctly', () => {
    const playerA = new Player('Player A', 50, 5, 10);
    const playerB = new Player('Player B', 50, 5, 10);
    const arena = new Arena();

    const winner = arena.fight(playerA, playerB);
    assert.ok(winner.isAlive()); 
  });
});

const Dice = require('../models/Dice');
const DamageService = require('../services/DamageService');

class Arena {
  constructor() {
    this.dice = new Dice();
    this.damageService = new DamageService();
  }

  fight(player1, player2) {
    console.log(`Battle starts between ${player1.getStatus()} and ${player2.getStatus()}`);
    let turn = player1.health <= player2.health ? 1 : 2;

    while (player1.isAlive() && player2.isAlive()) {
      if (turn === 1) {
        this.takeTurn(player1, player2);
        turn = 2;
      } else {
        this.takeTurn(player2, player1);
        turn = 1;
      }
    }

    const winner = player1.isAlive() ? player1 : player2;
    console.log(`Winner: ${winner.name}`);
    return winner;
  }

  takeTurn(attacker, defender) {
    const attackRoll = this.dice.roll();
    const defenseRoll = this.dice.roll();

    const damage = this.damageService.calculateDamage(attacker, defender, attackRoll, defenseRoll);
    defender.reduceHealth(damage);

    console.log(`${attacker.name} attacks ${defender.name} with Attack Roll: ${attackRoll}, Defense Roll: ${defenseRoll}`);
    console.log(`Damage dealt: ${damage}. ${defender.getStatus()}`);
  }
}

module.exports = Arena;

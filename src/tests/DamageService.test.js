const DamageService = require('../services/DamageService');
const Player = require('../models/Player');
const assert = require('assert');

describe('DamageService', () => {
  it('should calculate correct damage when attack > defense', () => {
    const damageService = new DamageService();
    const attacker = new Player('Attacker', 50, 5, 10);
    const defender = new Player('Defender', 100, 10, 5);

    const damage = damageService.calculateDamage(attacker, defender, 5, 2);
    assert.strictEqual(damage, 30); 
  });

  it('should calculate zero damage when attack <= defense', () => {
    const damageService = new DamageService();
    const attacker = new Player('Attacker', 50, 5, 10);
    const defender = new Player('Defender', 100, 10, 5);

    const damage = damageService.calculateDamage(attacker, defender, 2, 6);
    assert.strictEqual(damage, 0);
  });
});

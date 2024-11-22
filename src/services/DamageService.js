class DamageService {
    calculateDamage(attacker, defender, attackRoll, defenseRoll) {
      const attackValue = attacker.attack * attackRoll;
      const defenseValue = defender.strength * defenseRoll;
      const damage = Math.max(0, attackValue - defenseValue);
      return damage;
    }
  }
  
  module.exports = DamageService;
  
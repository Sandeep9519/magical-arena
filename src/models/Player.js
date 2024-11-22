class Player {
    constructor(name, health, strength, attack) {
      this.name = name;
      this.health = this._validatePositiveInteger(health, 'Health');
      this.strength = this._validatePositiveInteger(strength, 'Strength');
      this.attack = this._validatePositiveInteger(attack, 'Attack');
    }
  
    // Helper method to validate positive integers
    _validatePositiveInteger(value, attributeName) {
      if (typeof value !== 'number' || value <= 0 || !Number.isInteger(value)) {
        throw new Error(`${attributeName} must be a positive integer.`);
      }
      return value;
    }
  
    // Getter and Setter for Health 
    get health() {
      return this._health;
    }
  
    set health(value) {
      this._health = this._validatePositiveInteger(value, 'Health');
    }

   // Getter and Setter for Strength
    get strength() {
      return this._strength;
    }
  
    set strength(value) {
      this._strength = this._validatePositiveInteger(value, 'Strength');
    }

    // Getter and Setter for Attack
    get attack() {
      return this._attack;
    }
  
    set attack(value) {
      this._attack = this._validatePositiveInteger(value, 'Attack');
    }
  
    // Check if player is alive
    isAlive() {
      return this._health > 0;
    }
  
    // Reduce health based on incoming damage
    reduceHealth(amount) {
      this._health = Math.max(0, this._health - amount); // Prevent health from going below 0
    }
  
    // Get a status summary of the player's health
    getStatus() {
      return `${this.name} [Health: ${this._health}]`;
    }
  }
  
  module.exports = Player;
  
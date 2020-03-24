export class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.sleepLevel = 10;
    this.playLevel = 10;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--; 
    },  1000);
  }

  isHungry() {
    if (this.foodLevel < 6) {
      return true;
    } else {
      return false;
    }
  }
  
  feed() {
    this.foodLevel = 10;
  }

  setSleep() {
    setInterval(() => {
      this.sleepLevel--;
    }, 1000);
  }

  isTired() {
    if (this.sleepLevel <= 5) {
      return true;
    } else {
      return false;
    }
  }

  sleep() {
    this.sleepLevel = 10;
  }
};
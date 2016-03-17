(()=>{
  /*  TAG 11 */
  'use strict'
  //Cyborg extends Hybrid, Human
  class Human{
    constructor(name) {
      this._name = name;
    }
  }
  const Hybrid = (superClass) => class extends superClass {
      isHybrid() {
        return 'I´m a hybrid';
      }
  };
  class Cyborg extends Hybrid(Human) {
    identify () {
      return `Hello, I´m ${this._name}, and ${this.isHybrid()}`;
    }
  }
  const jonny = new Cyborg("Jonny");
  console.log(jonny._name);
  console.log(jonny.isHybrid());
  console.log(jonny.identify());
  console.log(jonny instanceof Human);
  console.log(jonny instanceof Cyborg);
  console.log(jonny instanceof Hybrid); //TypeError
  Hybrid.prototype = Human.prototype;
  console.log(jonny instanceof Hybrid); //true 
}());
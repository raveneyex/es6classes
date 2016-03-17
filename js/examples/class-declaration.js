(()=>{
  /*  TAG 4 */
  'use strict'

  class Human {
    constructor(name){
      this.name = name;
    }

    static sayRace() {
      return Human.name;
    }

    identify() {
      return `Hello, I'm ${this.name}`;
    }
  };
  const bobby = new Human('Bobby Newmark');
  console.log(Human === Human.prototype.constructor);
  console.log(Human.sayRace());
  console.log(typeof(Human.sayRace));
  console.log(bobby.identify());
  console.log(typeof(bobby.identify) === typeof(Human.prototype.identify));
  console.log(typeof(Human.prototype.identify));
  console.log(Human.prototype.identify());
  console.log(typeof(Human.prototype));
}());
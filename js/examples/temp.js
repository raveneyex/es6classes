(()=>{
  /*  TAG 13 */
  'use strict'
  class Human{
    constructor(name) {
      this._name = name;
    }
  }
  class Cyborg extends Human{
    constructor(name, enhancement){
      super(name);
      this._enhancement = enhancement;
    }
  }
  const molly = new Cyborg("Molly", "Hypervision");
  console.log(Human instanceof Function); 
  console.log(molly instanceof Human); 
  console.log(molly instanceof Cyborg);
  console.log(Human.prototype instanceof Object); 
  console.log(Cyborg.prototype instanceof Human);
  console.log(Human === Human.prototype.constructor);
  console.log(Cyborg === Cyborg.prototype.constructor);
  console.log(Object.getPrototypeOf(Cyborg) === Human);
  console.log(Object.getPrototypeOf(Human) === Function.prototype);
  console.log(Object.getPrototypeOf(molly) === Cyborg.prototype);
  console.log(Object.getPrototypeOf(Cyborg.prototype) === Human.prototype);
  console.log(Object.getPrototypeOf(Human.prototype) === Object.prototype);
}());

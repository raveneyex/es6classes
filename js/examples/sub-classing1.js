(()=>{
  /*  TAG 7 */
  'use strict'

  class Human {
    constructor(name){
      this._name = name;
    }

    identify() {
      return `Hello, I'm ${this._name} and I'm a ${Human.name}`;
    }
  }
  class Cyborg extends Human {
    constructor(name){
      super(name);
    }

    identify() {
      return `Hello, I'm ${this._name} and I'm a ${Cyborg.name}`;
    }
  }
  const t1000 = new Cyborg("Arnold");
  console.log(t1000.identify());
  console.log(t1000 instanceof Cyborg);
  console.log(t1000 instanceof Human);
}());
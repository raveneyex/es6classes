(()=>{
  /*  TAG 9 */
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
    constructor(name, skill){
      //this._skill = skill; //ReferenceError
      super(name);
      this._skill = skill;
    }

    identify() {
      return `Hello, I'm ${this._name} and I'm a ${Cyborg.name}`;
    }
  }
  const molly = new Cyborg('Molly Millions', 'Hypervision');
  console.log(molly._skill);
}());
(()=>{
  /*  TAG 5 */
  'use strict'

  class Human {
    constructor(name){
      this._name = name;
    }

    identify() {
      return `Hello, I'm ${this._name}`;
    }

    get name() {
      return this._name;
    }
    set name(name) {
      this._name = name;
    }
  }
  const cayce = new Human('Cayce Pollard');
  console.log(cayce.identify());
  console.log(cayce.name);
  console.log(cayce._name);
  console.log(cayce.identify);
  console.log(typeof(cayce.name));
  console.log(typeof(cayce._name));
  console.log(cayce.name === cayce._name);
  console.log(typeof(cayce.identify));
  cayce.name = "Pollard Cayce";
  console.log(cayce.name);
  console.log(cayce._name);
}());
(()=>{
  /*  TAG 17: WeakMap */
  'use strict'
  const _name = Symbol('Name');
  class Human{
    constructor(name) {
     this[_name] = name;
    }
    get name () {
      return this[_name];
    }
    set name (name) {
      this[_name] = name;
    }
  }
  const albert = new Human("Albert Hoffman");
  console.log(albert.name);
  albert.name = "Hoffman Albert";
  console.log(albert.name);
  console.log(albert._name);
}());

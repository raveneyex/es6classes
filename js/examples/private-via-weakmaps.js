(()=>{
  /*  TAG 16: WeakMap */
  'use strict'
  const _name = new WeakMap();
  class Human{
    constructor(name) {
      _name.set(this, name);
    }
    get name () {
      return _name.get(this);
    }
    set name (name) {
      _name.set(this, name);
    }
  }
  const albert = new Human("Albert Hoffman");
  console.log(albert.name);
  albert.name = "Hoffman Albert";
  console.log(albert.name);
  console.log(albert._name);
}());
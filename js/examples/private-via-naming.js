(()=>{
  /*  TAG 15: Naming Convention */
  'use strict'
  class Human{
    constructor(name) {
      this._name = name;
    }
    get name () {
      return this._name;
    }
    set name (name) {
      this._name = name;
    }
  }
  const barack = new Human("Barack");
  console.log(barack._name);
  console.log(barack.name);
  barack.name = "Obama";
  console.log(barack.name);
  console.log(barack._name);
  barack._name = "Hussein";
  console.log(barack.name);
}());
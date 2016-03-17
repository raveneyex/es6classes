(()=>{
  /*  TAG 6 */
  'use strict'

  class Human {
    constructor(name){
      this._name = name;
    }

    ['id'+'entify']() {
      return `Hello, I'm ${this._name}`;
    }
  }
  const rei = new Human('Rei Toei');
  console.log(rei.identify());
}());
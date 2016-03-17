(()=>{
  /* TAG 1 */
  'use strict';

  class Human {
    constructor(name){
      this.name = name;
    }

    identify() {
      return `Hello, I'm ${this.name}`;
    }
  }

  const d00d = new Human('d00d');
  d00d.identify();
  console.log(d00d instanceof Human);
  console.log(typeof(Human));
}());
(()=>{
  'use strict';

  class Human {
    constructor(name, age){
      this.name = name;
      this.age = age;
    }

    identify() {
      console.log(`Hello, I'm ${this.name} and my age is ${this.age}`);
    }
  }

  const d00d = new Human('d00d', 21);
  d00d.identify();
}())

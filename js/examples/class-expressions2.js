(()=>{
  /*  TAG 3 */
  'use strict'

  const MyHuman = class Human {
    constructor(name){
      this.name = name;
    }

    identify() {
      return `Hello, I'm ${this.name} and I'm a ${Human.name}`;
    }
  };
  const myHumanInstance = new MyHuman('Jonny Mnemonic');
  console.log(myHumanInstance.identify());
  console.log(MyHuman.name);
  console.log(Human.name); //ReferenceError
}());
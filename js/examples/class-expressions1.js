(()=>{
  /*  TAG 2 */
  'use strict'

  const MyHuman = class {
    constructor(name){
      this.name = name;
    }

    identify() {
      return `Hello, I'm ${this.name}`;
    }
  };
  const myHumanInstance = new MyHuman('Molly Millions');
  console.log(myHumanInstance.identify());
}());
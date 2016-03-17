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

(()=>{
  /*  TAG 4 */
  'use strict'

  class Human {
    constructor(name){
      this.name = name;
    }

    static sayRace() {
      return Human.name;
    }

    identify() {
      return `Hello, I'm ${this.name}`;
    }
  };
  const bobby = new Human('Bobby Newmark');
  console.log(Human === Human.prototype.constructor);
  console.log(Human.sayRace());
  console.log(typeof(Human.sayRace));
  console.log(bobby.identify());
  console.log(typeof(bobby.identify) === typeof(Human.prototype.identify));
  console.log(typeof(Human.prototype.identify));
  console.log(Human.prototype.identify());
  console.log(typeof(Human.prototype));
}());

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
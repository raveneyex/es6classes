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

(()=>{
  /*  TAG 7 */
  'use strict'

  class Human {
    constructor(name){
      this._name = name;
    }

    identify() {
      return `Hello, I'm ${this._name} and I'm a ${Human.name}`;
    }
  }
  class Cyborg extends Human {
    constructor(name){
      super(name);
    }

    identify() {
      return `Hello, I'm ${this._name} and I'm a ${Cyborg.name}`;
    }
  }
  const t1000 = new Cyborg("Arnold");
  console.log(t1000.identify());
  console.log(t1000 instanceof Cyborg);
  console.log(t1000 instanceof Human);
}());

(()=>{
  /*  TAG 8 */
  'use strict'

  function Human(name) {
      this._name = name;
      this.identify = function() {
        return `Hello, I'm ${this._name} and I'm a ${Human.name}`;
      };
  };
  class Cyborg extends Human {
    constructor(name){
      super(name);
    }
  }
  const t1000 = new Cyborg("Arnold");
  console.log(t1000 instanceof Cyborg);
  console.log(t1000 instanceof Human);
}());

(()=>{
  /*  TAG 9 */
  'use strict'

  class Human {
    constructor(name){
      this._name = name;
    }

    identify() {
      return `Hello, I'm ${this._name} and I'm a ${Human.name}`;
    }
  }
  class Cyborg extends Human {
    constructor(name, skill){
      //this._skill = skill; //ReferenceError
      super(name);
      this._skill = skill;
    }

    identify() {
      return `Hello, I'm ${this._name} and I'm a ${Cyborg.name}`;
    }
  }
  const molly = new Cyborg('Molly Millions', 'Hypervision');
  console.log(molly._skill);
}());

(()=>{
  /*  TAG 10 */
  'use strict'

  class CustomError extends Error {
  };
  throw new CustomError("Ups! we're fucked!");
}());

(()=>{
  /*  TAG 11 */
  'use strict'
  //Cyborg extends Hybrid, Human
  class Human{
    constructor(name) {
      this._name = name;
    }
  }
  const Hybrid = (superClass) => class extends superClass {
      isHybrid() {
        return 'I´m a hybrid';
      }
  };
  class Cyborg extends Hybrid(Human) {
    identify () {
      return `Hello, I´m ${this._name}, and ${this.isHybrid()}`;
    }
  }
  const jonny = new Cyborg("Jonny");
  console.log(jonny._name);
  console.log(jonny.isHybrid());
  console.log(jonny.identify());
  console.log(jonny instanceof Human);
  console.log(jonny instanceof Cyborg);
  //console.log(jonny instanceof Hybrid); //TypeError
  Hybrid.prototype = Human.prototype;
  console.log(jonny instanceof Hybrid); //true 
}());

(()=>{
  /*  TAG 12 */
  'use strict'
  class Human{
    constructor(name) {
      this._name = name;
    }
  }
  const molly = new Human("Molly");
  console.log(Human instanceof Function); //A Class is an instance of Function
  console.log(molly instanceof Human); //Moly is an instance of Human
  console.log(Human.prototype instanceof Object); //The prototype property of a class is an Object
  console.log(Human === Human.prototype.constructor); //A Class is its own prototype.constructor
  console.log(Object.getPrototypeOf(Human) === Function.prototype); //[[Prototype]] of Human is Function.prototype
  console.log(Object.getPrototypeOf(Human.prototype) === Object.prototype); //[[Prototype]] of Human.prototype is Object.prototype
  console.log(Object.getPrototypeOf(molly) === Human.prototype); //[[Prototype]] of molly is Human.prototype

}());

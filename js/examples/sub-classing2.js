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
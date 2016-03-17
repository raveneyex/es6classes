(()=>{
  /*  TAG 14: Constructor Environment */
  'use strict'
  class Human{
    constructor(name) {
      Object.assign(this, {
        getName () {
          return name;
        },
        setName (_name){
          name = _name;
        } 
      });
    }
  }
  const billy = new Human("Billy");
  console.log(billy.name);
  console.log(billy.getName());
  billy.setName("Juancho");
  console.log(billy.getName());
}());
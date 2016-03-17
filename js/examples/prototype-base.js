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
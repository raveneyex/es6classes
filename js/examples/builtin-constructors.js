(()=>{
  /*  TAG 10 */
  'use strict'

  class CustomError extends Error {
  };
  throw new CustomError("Ups! we're fucked!");
}());
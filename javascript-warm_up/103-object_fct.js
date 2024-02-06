#!/usr/bin/node
const myObject = {
    type: 'object',
    value: 12
  };
  console.log(myObject);
  
  // Add the incr function directly to the object
  myObject.incr = function () {
    this.value++; // Increment the value property of the object itself
  };
  
  myObject.incr();
  console.log(myObject);
  myObject.incr();
  console.log(myObject);
  myObject.incr();
  console.log(myObject);
  
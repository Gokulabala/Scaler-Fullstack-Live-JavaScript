// Q1. JS Core - this in Nested Objects

// You are given an object car with properties make and engine.
// You need to complete the engine property such that.
// The engine property should be another object with a method start that logs "Car started: [make]". Use the this keyword to access the make property.

// Test Case:

// const car = {
//     make: "Toyota",
//     engine: // Write code here 
//   };

// car.engine.start();  // Output: 'Car started: Toyota'
// Note: Please pay attention to the whitespaces, since the output will be checked using string matching.

const car = {
    make: "Toyota",
    engine: // Write code here
    {   
        make : "Toyota",
        start: function random() {
            console.log(`Car started: ${this.make}`);
        }
    }
    
  };

  car.engine.start()
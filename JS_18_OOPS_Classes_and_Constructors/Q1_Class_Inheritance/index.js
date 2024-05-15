// Q1. JS Core: Class Inheritance

// You are working on a project that involves different types of vehicles. Implement a Vehicle class with properties make and model. Extend this class to create a Car class that has an additional property numDoors. Ensure that the Car class inherits the properties from the Vehicle class.

// Test Case:

// const car1 = new Car('Toyota', 'Camry', 4);
// console.log(car1.make);        // Output: Toyota
// console.log(car1.model);       // Output: Camry
// console.log(car1.numDoors);    // Output: 4

class Vehicle {
    // Write Code here -----
    constructor(make,model){
        this.make = make
        this.model = model
    }
}
  
class Car extends Vehicle {
    // Write Code here -----
    
    constructor(make,model,numDoors){
        super(make,model)
        this.numDoors = numDoors
    }
    
}
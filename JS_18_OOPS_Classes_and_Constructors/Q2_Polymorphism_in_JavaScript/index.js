// Q2. JS Core: Polymorphism in JavaScript

// Create a base class Vehicle with a method start that prints a message indicating the vehicle has started. Implement two subclasses, Car and Motorcycle, that extend the Vehicle class. Override the start method in each subclass to provide a customized message.

// Test Cases

//   const car = new Car();
//   car.start(); // Output: "Car started!"

//   const motorcycle = new Motorcycle();
//   motorcycle.start(); // Output: "Motorcycle started!"

class Vehicle {
    start() {
      console.log("Vehicle started!");
    }
}
  
class Car extends Vehicle {
    // Write Code here ========
    start(){
        console.log("Car started!")
    }
}
  
class Motorcycle extends Vehicle {
    // Write Code here ========
    start(){
        console.log("Motorcycle started!")
    }
}
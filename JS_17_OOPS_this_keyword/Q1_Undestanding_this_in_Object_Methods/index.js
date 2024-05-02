// Q1. JS Core - Understanding this in Object Methods
// You are given an object user with a method getFullName that needs to return the full name of the user.
// Use the 'this' keyword to access the object properties inside the method.

// Test Cases -

// const user = {
//     firstName: "John",
//     lastName: "Doe",
//     getFullName: 'Function code goes here'
//  };

// console.log(user.getFullName());  // Output: John Doe

const user = {
    firstName: "John",
    lastName: "Doe",
    getFullName: // Write function here
    function random(){
        return `${this.firstName} ${this.lastName}`
    }
};
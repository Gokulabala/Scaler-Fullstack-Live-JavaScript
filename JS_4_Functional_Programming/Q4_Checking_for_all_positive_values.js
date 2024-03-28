// Q1. JS Core - Checking for All Positive Values
// Write a JavaScript function named allPositive that checks 
// whether all numbers in a given array are positive 
// using the every() method.

// Inputs:
// An array of numbers.

// Outputs:
// A boolean value. Return true if all numbers are positive, otherwise false.

//Solution

// let numbers = [1,2,-4,-6,3,-9]
let numbers = [1,2,3,4];


function allPositive(numbers) {
    // Write your code here
    // return the result
    let ans = numbers.every((number)=>{
        return number >0;
    })
    return ans;
  }

  console.log(allPositive(numbers))
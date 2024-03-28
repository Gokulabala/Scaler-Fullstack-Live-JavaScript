// Q2. JS Core - Find the First Negative Value
// Write a JavaScript function named findFirstNegative that 
// finds and returns the first negative number in an array using 
// the find() method.
// return undefined if there are no negative numbers in the array.

// Inputs:
// An array of numbers.

// Outputs:
// A number representing the first negative number in the array or undefined if there are no negative numbers.

//Solution
let numbers = [1,2,3,-5,6,-9]
function findFirstNegative(numbers) {
    // Write your code here
    // return the result
    let ans = numbers.find((number)=>{
        return number <0;
    })
    return ans;
  }

  console.log(findFirstNegative(numbers))
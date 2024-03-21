// Q1. JS Core - Loops in Action
// Use a for loop to iterate through an array of numbers and log each element multiplied by 2.

// main function will be called with an array of integers as argument.


// Input Format
// Values of an array

// Constraints
// n <= 10 ^ 9

// Output Format
// Logged Integers

// Sample Input 0
// [1, 2, 3]

// Sample Output 0
// 2
// 4
// 6

// solution
function main(arr) {
    // Write your code here
    // Use console.log to output the result
  
      let res = []
      for(let i=0;i<arr.length;i++){
          res[i] = arr[i] * 2
          console.log(res[i])
      }
  
  }
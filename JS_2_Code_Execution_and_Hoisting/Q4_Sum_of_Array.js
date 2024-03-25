// Q1. JS Core - Sum of Array
// Write a function that calculates the sum of all numbers in an array.

// Example:

// Input:
// [1, 2, 3, 4]

// Output:
// 10

//solution

let arr = [1,2,3,4]

function sumOfArray(arr) {
    // Write your code here
    // return the result
    let n = arr.length;
    // console.log(n)
    let sum =0;
    for(let i = 0;i<n;i++){
        sum += arr[i];
    }
    return sum;
  }

  console.log(sumOfArray(arr));
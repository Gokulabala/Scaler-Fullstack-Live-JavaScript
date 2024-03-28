// Q1. JS Core - Sum of Array Using reduce()
// Write a JavaScript function named sumArray that takes an array of numbers and returns the sum of all the numbers in the array using the reduce() method.

// The tests also check whether the reduce() method has been used.

// Example:

// Input:
// [1, 2, 3, 4]

// Output:
// 10
// reduce() is used.

//Solution

let numbers = [1,2,3,4]
function sumArray(numbers) {
    // Write your code here
    // return the result
    let sum = 0;
    let ans = numbers.reduce((number,sum)=>{
        return number + sum;
    },0)

    return ans;
    
}

console.log(sumArray(numbers));
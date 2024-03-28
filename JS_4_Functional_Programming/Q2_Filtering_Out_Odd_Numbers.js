// Q2. JS Core - Filtering Out Odd Numbers
// Write a JavaScript function named filterOutOdd that uses the filter() method to filter out odd numbers from an array.

// Example:

// Inputs:
// An array of numbers.

// Outputs:
// An array of numbers without odd numbers.

//solution

let numbers = [1,2,3,4,5,6]
function filterOutOdd(numbers) {
    // Write your code here
    // return the result
    let ans = numbers.filter((number)=>{
        return number % 2==0;
    })
    return ans;
  }

  console.log(filterOutOdd(numbers))
// Q3. JS Core - Doubling Each Value
// Write a JavaScript function named doubleValues 
// that takes an array of numbers and returns a new array 
// where each number is doubled using the map() method.


// Inputs:
// An array of numbers.

// Outputs:
// An array of numbers where each number is doubled.

//Solution

let numbers = [1,2,3,4,5]
function doubleValues(numbers) {
    // Write your code here
    // return the result
    let ans = numbers.map((number)=>{
        return number * 2;
    })
    return ans;
    // return numbers.map((number) => number *2)
  }

  console.log(doubleValues(numbers))
// Q1. JS Core - String Manipulation: Reverse a string
// Create a function called reverseString that takes a string as input and returns the reversed version.

// The function is called with the argument of a string that needs to be reversed.
// Use array methods to reverse the string.

// Input Format
// String

// Sample Input 0
// hello

// Sample Output 0
// olleh

//Solution
// function reverseString(inputString) {
//     // Write your code here
//     // return the result
//     let res = ''
//     for(let i=inputString.length-1;i>=0;i--){
//         res += inputString[i]
//     }
  
//     return res
  
//   }

let str = "hello"

let res = ''

for(let i=str.length-1;i>=0;i--){
    res += str[i]
}

console.log(res)
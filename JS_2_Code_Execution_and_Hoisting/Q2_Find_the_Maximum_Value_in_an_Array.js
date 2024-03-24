// Q2. JS Core - Find the Maximum Value in an Array
// Write a function that takes in an array of numbers and returns the maximum value in that array.

// Example:

// Input:
// [1, 4, 2, 7, 5]

// Output:
// 7 

//Solution

// let arr = [1,4,2,7,5];
let arr = [-1,-4,-2,-7,-5]
    
// console.log(arr)
function findMaxValue(arr) {
    // Write your code here
    // return the result
    // console.log(arr)

    let n = arr.length;
    // console.log(n);
    let max = Number.MIN_SAFE_INTEGER;
    //edge case
    if(n==1){
        max = arr[0];
    }
    console.log(max);
    for(let i =1;i<n;i++){
        if(arr[i-1]>max){
            max = arr[i-1]
            console.log(max+"--->"+i)
        }
    }
    console.log(max)
    
      
  }

  findMaxValue(arr)

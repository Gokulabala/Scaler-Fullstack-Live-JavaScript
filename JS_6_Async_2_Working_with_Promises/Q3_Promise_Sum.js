// Q3. JS Core - Promise Sum
// Write a function promiseSum that takes two integers, a and b, and returns a Promise. The Promise should resolve with the sum of a and b if both are positive; otherwise, it should reject with an error message.
// You need to implement the promiseSum function, which returns a Promise. The Promise should resolve with the sum of a and b if both are positive, and reject with an error message if any of them is non-positive.

// // Test Cases
// promiseSum(3, 5)
//     .then(result => console.log(result)) // Expected output: 8
//     .catch(error => console.error(error));

// promiseSum(-2, 5)
//     .then(result => console.log(result))
//     .catch(error => console.error(error)); // Expected output: "Both numbers must be positive"

//solution

function promiseSum(a, b) {
    // Write Code Here =============
    let promise1 = new Promise((res,rej)=>{
      if(a>=0 && b>=0){
          res(a+b)
      }
      else{
          rej("Both numbers must be positive")
      }  
    })
    return promise1
}

promiseSum(1,5).then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})
// Q1. JS Core - Delayed Sum
// Write a function delayedSum that takes two integers, a and b, and a callback function callback. The function should use setTimeout to delay calling the callback for 1000 milliseconds and then pass the sum of a and b as an argument to the callback.
// You need to implement the delayedSum function, which will introduce a delay of 1000 milliseconds using setTimeout. After the delay, it should call the provided callback function with the sum of a and b.

// function delayedSum(a, b, callback)
// Example

// delayedSum(3, 5, result => {
//     console.log(result); // Expected output after 1000ms: 8
// }); 

// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>


// <body>
//     <!-- Write your code solution here, inside the main function -->
//     <!-- WARNING:
//         Don't make any changes outside the given function. (would fail test cases)
//         Write the required code and return the correct answer. -->
//     <script id='solution' defer>

const result = (val)=>{
    console.log(val)
}
// result(2,3)
// console.log(result(a,b))
function delayedSum(a, b, callback) {
            // write solution here ============
            setTimeout(()=>{
             callback(a+b)
            },1000)
}
        delayedSum(1,2,result)

        

        
        
//     </script>
// </body>

// </html>
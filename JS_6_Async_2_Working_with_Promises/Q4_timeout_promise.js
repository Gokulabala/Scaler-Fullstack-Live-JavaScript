// Q4. JS Core - timeoutPromise
// Write a function timeoutPromise that takes a delay time in milliseconds and returns a Promise. The Promise should resolve after the specified delay.
// You need to implement the timeoutPromise function, which returns a Promise. The Promise should resolve after the specified delay time.


// function timeoutPromise(delay) 
// // Test Cases
// timeoutPromise(2000)
//     .then(result => console.log(result)) // Expected output after 2000ms: "Promise resolved after 2000 milliseconds"
//     .catch(error => console.error(error));

//solution
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
    function timeoutPromise(delay) {
            // write solution here ============
           
            return new Promise((res,rej)=> {
                setTimeout(()=>{ 
                    res(`Promise resolved after ${delay} milliseconds`);

                },delay)
            })
        }
//     </script>
// </body>

// </html>


// Q2. JS Core - Periodic Printer
// Write a function periodicPrinter that takes a callback function and an interval timeInterval in milliseconds. The function should use setInterval to call the callback function every timeInterval milliseconds until explicitly stopped.
// You need to implement the periodicPrinter function, which will use setInterval to repeatedly print the provided message at the specified time interval until stopped.

// Note: Please make sure to return the intervalId from the function, or else the code would never terminate from backend, resulting in failed testcase.

// function periodicPrinter(callback, timeInterval)
// Example

// periodicPrinter(() => {
//       console.log("This is callback");
// }, 1000);

// Output:
// Prints "This is callback" at every 1000ms until terminated by backend using clearInterval. (please reutn intervalID from the function)

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

        const result = ()=>{
            console.log("hi")
        }
        result()
        
        function periodicPrinter(callback, timeInterval) {
            // write solution here ============
            const IntervalId =  setInterval(callback,timeInterval)          
            
            return IntervalId;
            
        }
        // clearInterval(IntervalId)
       

        periodicPrinter(result,5000)
    {/* </script>
</body>

</html> */}
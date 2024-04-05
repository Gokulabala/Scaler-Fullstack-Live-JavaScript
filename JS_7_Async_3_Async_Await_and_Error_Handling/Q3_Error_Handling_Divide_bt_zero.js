// Q3. JS Core - Error Handling - Divide By Zero
// You are building a function to perform division in JavaScript. However, you want to make sure that division by zero is handled properly. Create a function that divides two numbers and handles division by zero gracefully.

// Write a JavaScript function divide that takes two numbers as arguments and returns the result of dividing the first number by the second number. If the second number is zero, the function should throw an error with the message "Division by zero is not allowed."

// Demonstrate the usage of the divide function by dividing two numbers, including a case where division by zero occurs.

// function divide(a, b)
// Note that the Error message should be "Division by zero is not allowed." and if there is no error, then the function should return result of type Number.

// Examples

// Calling the divide(a, b) function inside try and catch block with different values.

// Example 1

// // Usage
// try {
//     const result = divide(10, 2);
//     console.log("Result:", result); // Should print "Result: 5"
// } catch (error) {
//     console.error("An error occurred:", error.message);
// }
// Output

// Result: 5
// Example 2

// // Usage
// try {
//     const divisionByZero = divide(8, 0); // Division by zero
// } catch (error) {
//     console.error(error.message); // Prints: Division by zero is not allowed.
// }
// Output

// Division by zero is not allowed.

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
        function divide(a, b) {
            //write your code here ===============================================
            
                if (b>0 || b<0){
                    return a/b
                }
                else{
                    throw new Error('Division by zero is not allowed.')
                }            
        }
        try {
            const result = divide(10,2)
            console.log("Result:",result)
        } catch (error) {
            console.log("An error occured:", error)
        }
        


//     </script>
// </body>

// </html>
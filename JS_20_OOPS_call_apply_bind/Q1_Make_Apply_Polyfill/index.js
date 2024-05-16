// <!-- Q1. JS Core - Make Apply Polyfill

// Raw Problem
// Write a polyfill for the apply method in JavaScript.

// You need to complete the function applyPolyfill which takes three inputs:
// 1. fn - A function on which apply method needs to be polyfilled.
// 2. context - The value of this to be used when calling the function.
// 3. args - An array of arguments to be passed to the function.

// The function applyPolyfill(fn, context, args), when called, should behave in a similar fashion as the inbuilt Function.prototype.apply() function in JavaScript.
// Refrain from using the inbuilt Function.protoype.apply() function in JS, trivial test case would check for that.


// Example:

// function greet(country) {

// return 'Hello, ' + this.name + ' from '+ country;
// }

// const person = {
// name: 'John',
// };

// const result = applyPolyfill(greet, person, ['India']);
// console.log(result);


// Output:
// Hello, John! from India -->

// <!-- <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="utf-8">
//     <title>JS</title>
// </head>

// <body> -->
//     <!-- Write your code solution here, inside the applyPolyfill function -->
//     <!-- WARNING:
//         Don't make any changes outside the given function. (would fail test cases)
//         Write the required code and return the correct answer. -->
//     <script id='solution' defer>
        function applyPolyfill(fn, context, args) {
            // Write your solution here ========================
            if(typeof fn !== 'function'){
                throw new Error("Must be used in Function")
            }
            console.log(fn)
            context.Myfn = fn
            return context.Myfn(...(args || []))
        }
        const person1 = {
            name : "John"
        }
        function greet(country){
            return 'Hello, ' + this.name + 'from ' + country
        }

        // console.log(greet("India"))
        const result = applyPolyfill(greet, person1, ['India'] )
        console.log(result)
        

//        </script>
// </body>

// </html>
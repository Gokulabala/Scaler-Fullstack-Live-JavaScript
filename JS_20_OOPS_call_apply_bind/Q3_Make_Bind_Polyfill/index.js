// Q1. JS Core - Make Bind Polyfill

// Raw Problem
// Write a polyfill for the bind method in JavaScript.

// You need to create a polyfill for the bind method, which allows you to set the context (the value of this) for a function and optionally preset some initial arguments.

// You should implement a function customBind on the Function.prototype object. This function should accept a single argument obj, which represents the context (the value of this) to be used when calling the function.

// When the customBind method is called on a function, it should return a new function that, when invoked, executes the original function with the specified context (obj) and any additional arguments passed to the bound function.

// Your task is to complete the implementation of the customBind function.

// Example:
// function greet() {
// return 'Hello, ' + this.name + '!';
// }

// const person = {
// name: 'John',
// };

// const boundFunction = greet.customBind(person);
// const result = boundFunction()
// console.log(result);

// Output:
// Hello, John!


// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="utf-8">
//     <title>JS</title>
// </head>

// <body>
//     <!-- Write your code solution here, inside the function -->
//     <!-- WARNING:
//         Don't make any changes outside the given function. (would fail test cases)
//         Write the required code and return the correct answer. -->
//     <script id='solution' defer>
        Function.prototype.customBind = function (obj) {
            // Write your solution here ========================
            if(typeof this !== 'function'){
                throw new Error("Must be used in Function")
            }
            // console.log(obj)
            // console.log(this)
            obj.myFnc = this
            // console.log(obj.myFnc())
            return function(...args){
                return obj.myFnc()
            }
            
        }

        function greet(){
            return `Hello, ${this.name}!`
        }

        const person1 = {
            name : "John"
        }
        console.log(greet.customBind(person1))
        const boundFunction = greet.customBind(person1)
        const result = boundFunction()
        console.log(result)
//     </script>
// </body>

// </html>
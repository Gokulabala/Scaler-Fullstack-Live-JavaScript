// Q1. Lecture 7: H1 - Two Files in Series
// Raw Problem
// Complete the function twoSeries(file1, file2, ansArray),
// which takes in two file names as file1 and file2 and ansArray

// Write the code such that:
// 1. Both the files are serially read using the fetchByCb(fileName, callback)
// 2. Add the content of both files in the ansArray.
// 3. At the end of the contents, the ansArray should hold string "All files have been read"

// Example:

// Input:
// let ansArray = [];
// twoSeries('FILE 1', 'FILE 2', ansArray)';

// Output:
// ansArray = ['content : FILE 1', 'content : FILE 2', 'All files have been read']
// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>


// <body>
    // <script defer>
        function fetchByCb(fileName, cb) {
            setTimeout(function () {
                cb(`content : ${fileName}`);
            }, 100 * Math.random());
        }
    // </script>
    // <!-- Write your code solution here, inside the twoSeries function -->
    // <!-- WARNING:
    //     Don't make any changes outside the given function. (would fail test cases)
    //     Write the required code and return the correct answer. -->
    // <script id='solution' defer>
        function twoSeries(file1, file2, ansArray) {
            //write your code here =========================================
            fetchByCb(file1, (content1) => {
                ansArray.push(content1);
        
            fetchByCb(file2, (content2) => {
                ansArray.push(content2);
            // Add the final message to ansArray
            ansArray.push('All files have been read');
        });
        });
        }
//     </script>
// </body>

// </html>



// Q1. JS Lecture 9: H1 - Two Files in Series using await
// Raw Problem
// Using async await complete the function twoSeries(file1, file2, ansArray),
// which takes in two file names as file1 and file2 and ansArray

// Write the code such that:
// 1. Both the files are serially read using the fetchByPromise(fileName)
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
//     <script defer>
        function fetchByPromise(fileName) {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve(`content : ${fileName}`);
                }, 100 * Math.random());
            });
        }
    // </script>
    // <!-- Write your code solution here, inside the twoSeries function -->
    // <!-- WARNING:
    //     Don't make any changes outside the given function. (would fail test cases)
    //     Write the required code and return the correct answer. -->
    // <script id='solution' defer>
    
        async function twoSeries(file1, file2, ansArray) {
            //write your code here =========================================
            const readFile1 = await fetchByPromise(file1)
            ansArray.push(readFile1)

            const readFile2 = await fetchByPromise(file2)
            ansArray.push(readFile2)
            ansArray.push("All files have been read")
            
            
        }
        const main = async ()=>{
            let ansArray  = []
            try {
                await twoSeries('f1.txt','f2.txt', ansArray)
                console.log(ansArray)
                
            } catch (error) {
                console.log(error, 'error from reading')
            }
        }
        main()
        
       
//     </script>
// </body>

// </html>

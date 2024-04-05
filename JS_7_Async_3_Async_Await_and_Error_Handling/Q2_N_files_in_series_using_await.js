// Q2. JS Lecture 9: H2 - N Files in Series using await
// Raw Problem
// Using async await complete the function nSeries(fileArray, ansArray),
// that takes in fileArray and ansArray, in which
// fileArray is an array of file names.

// Write the code such that:
// 1. All the files in the fileArray are serially read using the fetchByPromise(fileName)
// 2. Add the content of both files in the ansArray.
// 3. At the end of the contents, the ansArray should hold string "All files have been read"

// Example:

// let ansArray = [];
// let fileArray = ["FILE 1", "FILE 2"];
// nSeries(fileArray, ansArray);

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
    // <!-- Write your code solution here, inside the nSeries function -->
    // <!-- WARNING:
    //     Don't make any changes outside the given function. (would fail test cases)
    //     Write the required code and return the correct answer. -->
    // <script id='solution' defer>
        async function nSeries(fileArray, ansArray) {
            //write your code here =========================================
            // console.log(fileArray, 'from nSeries function')
            // console.log(fileArray.length)
                for(let i=0;i<fileArray.length;i++){
                    let readFile = await fetchByPromise(fileArray[i])
                    ansArray.push(readFile)
                }
                ansArray.push("All files have been read")
            
            
        }

        const main = async () =>{
            let ansArray = []
            let fileArray = ['f1.txt','f2.txt','f3.txt','f4.txt','f5.txt']
            try {
               await nSeries(fileArray,ansArray)
                console.log(ansArray)
                
            } catch (error) {
                console.log(error,'error in reading files')
                
            }
        }
        main()


//     </script>
// </body>

// </html>
// Q2. JS Lecture 8: Two Files in Series by Promise
// Complete the function twoSeries(file1, file2, ansArray), which takes in two file names as file1 and file2 and ansArray

// Write the code such that:

// Both the files are serially read using the fetchByPromise(fileName)
// Add the content of both files in the ansArray.
// At the end of the contents, the ansArray should hold string "All files have been read"
// Example:
// Input:
// let ansArray = [];
// twoSeries('FILE 1', 'FILE 2', ansArray)';

// Output:
// ansArray = ['content : FILE 1', 'content : FILE 2', 'All files have been read']

//solution
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>


<body>
    <script defer>
        function fetchByPromise(fileName) {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve(`content : ${fileName}`);
                }, 100 * Math.random());
            });
        }
    </script>
    <!-- Write your code solution here, inside the twoSeries function -->
    <!-- WARNING:
        Don't make any changes outside the given function. (would fail test cases)
        Write the required code and return the correct answer. -->
    <script id='solution' defer>
        function twoSeries(file1, file2, ansArray) {
            //write your code here =========================================
            fetchByPromise(file1).then((result)=>{
                ansArray.push(result)
                fetchByPromise(file2).then((result2)=>{
                    ansArray.push(result2)
                    ansArray.push(`All files have been read`)
                }).
            })
        }
    </script>
</body>

</html>
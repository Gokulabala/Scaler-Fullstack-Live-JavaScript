// Q2. JS Core - Find the Longest Word in a String
// Write a function that takes in a string and returns the longest word in that string.
// If there are multiple words with the same length, return the first one you encounter.

// Example:


// Input:

// "JavaScript is a fun programming language"


// Output:

// "programming"

//solution

let str = "JavaScript is a fun programming language"

function findLongestWord(str) {
    // Write your code here
    // return the result
    let n = str.length;
    // console.log(n);

    let words = str.split(" ");
    let ans = "";
    // console.log(words.length);
    for(let i=0;i<words.length;i++){
        if(ans.length<words[i].length){
            ans = words[i];
        }
    }
    return ans;
  }

  console.log(findLongestWord(str));
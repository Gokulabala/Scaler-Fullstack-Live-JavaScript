
// Q1. JS Core - Count the Number of Vowels
// Write a function that takes in a string and returns the count of vowels in that string.
// Consider the vowels to be a, e, i, o, u (both uppercase and lowercase).

// Example:

// Input:
// "Hello World"
// Output:
// 3 (Because there are 2 'o's and 1 'e')
// Solution
let str = "Hello World"

function main(str){
    let n = str.length;
    console.log(n);
    str = str.toLowerCase();
    console.log(str) 
    let count = 0;
    for(let i = 0;i<n;i++){
        if(str[i]=='a' || str[i]=='e' ||str[i]=='i' ||str[i]=='o' ||str[i]=='u'){
            count++;
        }
    }
    console.log(count)
}

main(str)
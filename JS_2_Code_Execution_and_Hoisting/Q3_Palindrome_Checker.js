// Q3. JS Core - Palindrome Checker
// Write a function that checks if a given string is a palindrome.
// A palindrome is a word, phrase, number, or other sequences 
// of characters which reads the same backward as forward 
// (ignoring spaces, punctuation, and capitalization).

const { on } = require("nodemon");

// Example:

// Input:
// "Madam"

// Output:
// true

//solution

let str = "M!adA@m $9@-0."

function isPalindrome(str) {
    // Write your code here
    // return the result
    cur_str = str.toLowerCase();
    console.log(cur_str)
    let n = str.length;
    let only_str = '';
    for(let i=0;i<n;i++){
        // if(cur_str[i].charCodeAt(0)>=97 && cur_str[i].charCodeAt(0)<=122){
        if(cur_str[i]>='a' && cur_str[i]<='z'){
    
        only_str += cur_str[i]
        }
    }
    console.log(only_str)
    console.log(n)
    let p1 = only_str[0];
    let p2 = only_str[n-1]
    while(p1<p2){
        if(p1 == p2){
            p1++;
            p2--

        }
        else{
            return false;
        }
    }
    return true;
  }

  console.log(isPalindrome(str))
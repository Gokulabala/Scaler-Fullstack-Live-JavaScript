// Q1. JS Core - Implement Promise.race()

// Problem statement

// The Promise.race() method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise.

// If the iterable passed is empty, the promise returned will be forever pending.

// If the iterable contains one or more non-promise value and/or an already settled promise, then Promise.race() will resolve to the first of these values found in the iterable.

// Let's implement our own version of Promise.race(), a promiseRace function, with the difference being the function takes in an array instead of an iterable. Be sure to read the description carefully and implement accordingly!

// Examples

// Example 1

// const p0 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(42);
//   }, 100);
// });

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('Err!');
//   }, 400);
// });

// await promiseRace([p0, p1]); // 42
// Example 2

// const p1 = new Promise((resol2ve, reject) => {
//   setTimeout(() => {
//     resolve('Resolved p1');
//   }, 100);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('Error on p2');
//   }, 20);
// });

// try {
//   const ans =  await promiseRace([p1, p2]);
// } catch (err) {
//   console.log(err); // Error on p2
// }

function promiseRace(iterable) {
    //write your code here ===============================================
    return new Promise((res,rej)=>{
        iterable.forEach((promise)=>{
            Promise.resolve(promise).then((value)=>{
                res(value)
            }).catch((error)=>{
                rej(error)
            })
        })
    })
}
// Q2. JS Core - Implement Promise.any()

// Problem Statement

// Promise.any() takes an iterable of elements (usually Promises). It returns a single promise that resolves as soon as any of the elements in the iterable fulfills, with the value of the fulfilled promise. If no promises in the iterable fulfill (if all of the given elements are rejected), then the returned promise is rejected with an AggregateError, a new subclass of Error that groups together individual errors.

// If an empty iterable is passed, then the promise returned by this method is rejected synchronously. The rejected reason is an AggregateError object whose errors property is an empty array.

// Source: Promise.any() - JavaScript | MDN

// Let's implement our own version of Promise.any(), a promiseAny function, with the difference being the function takes in an array instead of an iterable and AggregateErrors returned just have to return an array of error reasons, the message doesn't have to be set. Refer to the AggregateError constructor examples on MDN.

// Be sure to read the description carefully and implement accordingly!

// Examples

// Example 1

// const p0 = Promise.resolve(42);
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(21);
//   }, 100);
// });

// await promiseAny([p0, p1]); // 42
// Example 2

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

// await promiseAny([p0, p1]); // 42
// Example 3

// const p0 = Promise.reject('p0');
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('p1');
//   }, 100);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('p2');
//   }, 20);
// });


// const ans = await promiseAny([p0, p1, p2]);

// console.log(ans); // p2

function promiseAny(iterable) {
    //write your code here ===============================================
    return new Promise((res,rej)=>{
        const rejectedArray = []
        let total = 0

        iterable.forEach((promise,index)=>{
            Promise.resolve(promise).then((value)=>{
                res(value)
            }).catch((error)=>{
                rejectedArray[index] = error
                total = total + 1

                if(total === iterable.length){
                    rej(rejectedArray)
                }
            })
        })
    })
}
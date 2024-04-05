// This is a JavaScript Quiz from BFE.dev

console.log(1)
const promise = new Promise((resolve) => {
  console.log(2)
  resolve()
  console.log(3)
})

console.log(4)

promise.then(() => {
  console.log(5)
}).then(() => {
  console.log(6)
})

console.log(7)

setTimeout(() => {
  console.log(8)
}, 10)

setTimeout(() => {
  console.log(9)
}, 0)

//solution


// function logA() { console.log('A') }
// function logB() { console.log('B') }
// function logC() { console.log('C') }
// function logD() { console.log('D') }
// function logX() { console.log('X') }
// function logY() { console.log('Y') }


// // Homework
// logA();
// setTimeout(() => {
//     logB()
//     setTimeout(() => {
//         logX()
//     }, 100)
//     Promise.resolve().then(logY);
// }, 0);
// Promise.resolve().then(logC);

// logD();


//solution
// A
// D
// C
// B
// Y
// X

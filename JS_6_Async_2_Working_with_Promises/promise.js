// let promise1 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         const isHeads = Math.random() > 0.5
//         // console.log(isHeads)
//         if(isHeads){
//             res("Heads")
//         }
//         else{
//             rej("Tails - this is failure")
//         }
//     },1000)
// })

// console.log(promise1, "This is the initial state")

// promise1.then((value)=>{
//     console.log(value)
// }).catch((error)=>{
//     console.log(error)
// })

let promise2 = new Promise((res,rej)=>{
    setTimeout(()=>{
        const toss = Math.random() > 0.5
    if(toss){
        res("Heads")
    }
    else{
        rej("Tails")
    }
},1000)
})

console.log(promise2, 'This is with sync')

promise2.then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})
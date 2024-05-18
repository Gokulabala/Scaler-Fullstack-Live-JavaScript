// Q1. JS Core - Implement Promise.all()

// The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises Could you write your own all() ? which should works the same as Promise.all()

// note

// Do not use Promise.all() directly, it is not helping

// Function signature is given below, here promises parameter would contain an array of promises.

// all(promises);
// Examples

// Example 1

// let ans = "";
// all([Promise.resolve(ans += `func1 `), Promise.resolve(ans += `func2 `), Promise.resolve(ans += `func3 `)])
// console.log(ans);
// Output

// func1 func2 func3 
// Example 2

// let ans = "";
// let func1 = () => {setTimeout(() => { ans += `setTimeout called for func1\n`}, 100)}
// let func2 = () => {setTimeout(() => { ans += `setTimeout called for func2\n`}, 200)}
// let func3 = () => {setTimeout(() => { ans += `setTimeout called for func3\n`}, 300)}


// all([func1(), func2(), func3()])

// setTimeout(() => {
//     console.log(ans);
// }, 500)
// Output

// setTimeout called for func1
// setTimeout called for func2
// setTimeout called for func3
// Example 2

// let i = 1;
//     let ans = "";
//     let func1 = () => {
//       setTimeout(() => {
//         ans += `setTimeout called for func${i++} \n `;
//       }, Math.random * 100);
//     };

// all([func1(), func2(), func3()])

// setTimeout(() => {
//     console.log(ans);
// }, 500)
// Output

// setTimeout called for func1
// setTimeout called for func2
// setTimeout called for func3


Promise.myAllnew = function all(promises) {
    //write your code here ===============================================
    return new Promise((res,rej)=>{
        const resultArray = []
        let total = 0

        promises.forEach((promise,index)=>{
        Promise.resolve(promise).then((value)=>{
            resultArray[index] = value
            total = total +1
            if(total===promises.length){
                res(resultArray)
            }
        }).catch((error)=>{
            rej(error)         
        })
        })
    })
}


function fetchUserData(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("User data fetched successfully")
        },1000)
    })
}

function fetchProfileData(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("Profile data fetched successfully")
            // rej("OOPS!!! something fishy")
        },2000)
    })
}

function fetchProductData(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("Product data fetched successfully")
        },3000)
    })
}

// Promise.all([fetchUserData(),fetchProfileData(),fetchProductData()]).then((value)=>console.log(value)).catch((error)=>console.log(error))


Promise.myAllnew([fetchUserData(),fetchProfileData(),fetchProductData()]).then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log(error)
})
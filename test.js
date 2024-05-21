
// function delay(ms){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve('Done')
//         },ms)
//     })
// }

// async function foo(){
//     console.log('Start')
//     await delay(2000)
//     console.log("End")
// }

// foo()
// console.log("After foo")

// function outer(){
//     let x = 10
//     function inner(){
//         console.log(x)
//     }
//     x=20
//     return inner
// }

// let ClosureFn = outer()
// ClosureFn()

// function outer(){
//     let x = 5
//     return function inner(y){
//         x = x + y
//         return x
//     }
// }

// let closureFn = outer()
// console.log(closureFn(3))
// console.log(closureFn(2))

// function delay(ms){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(ms)
//         },ms)
//     })
// }

// async function foo(){
//     console.log("Start")
//     await delay(1000)
//     console.log("Middle")
//     await delay(2000)
//     console.log("End")
// }

// foo()
// console.log("After foo")

// const number = 5

// function multiplyByTwo(x){
//     number = x *2
// }

// multiplyByTwo(10)
// console.log(number)

class Shape{
    constructor(){
        this.name = 'Shape'
    }
    getName(){
        return this.name
    }
}

class Circle extends Shape{
    constructor(){
        super()
        this.radius = 5
    }

    getName(){
        return super.getName() + '(Circle)'
    }
}

const circle = new Circle()
console.log(circle.getName())

var counter = (function(){
    var count = 0
    return function(){
        return count++
    }
})()

console.log(counter())
console.log(counter())
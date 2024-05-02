"use strict"

//scenario 1
// console.log(this)
// output : window object

//scenario 2
// function test(){
//     console.log(this)
// }
// test()
// output : undefined

//scenario 3
// let obj = {
//     name : "John",
//     testFunction : function random(){
//         console.log(this)
//     }
// }
// obj.testFunction()
//output : local object

//scenario 4
// let obj2 = {
//     name : "John",
//     nested: {
//         address: "aewqfwq",
//         testFunction2 : function random2(){
//             console.log(this)
//         }
//     }
// }

// obj2.nested.testFunction2()
//output : The object where the function is created(local object)
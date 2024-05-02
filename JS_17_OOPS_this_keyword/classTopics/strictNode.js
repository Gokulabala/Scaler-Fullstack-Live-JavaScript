"use strict"

//scenario 1 
// console.log(this)
//output : {} empty object

//scenario 2
// function test(){
//     console.log(this)
// }
// test()
//output : undefined

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
// let obj2 ={
//     name : "random",
//     nested :{
//         address: "12,3,4,5",
//         testFunction2 : function random2(){
//             console.log(this)
//         }
//     }
// }
// obj2.nested.testFunction2()
//output : the object where the function is created(local object)
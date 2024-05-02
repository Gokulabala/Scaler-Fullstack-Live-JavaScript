
//scenario 1
// console.log(this)
//output : {}

//scenario 2
// function test(){
//     console.log(this)
// }

// test()
//output : global object

//scenario 3
// let obj = {
//     prop : "prop1",
//     value : "value1",
//     testFunction : function random(){
//         console.log(this)
//     }
// }

// obj.testFunction()
//output : local object

//scenario 4
// let obj2 = {
//     name :"Random",
//     nested:{
//         address : "1-2-3-45-5",
//         testFunction2 : function random2(){
//             console.log(this)
//         }
//     }
// }

// obj2.nested.testFunction2()
//output : the object where the function is created
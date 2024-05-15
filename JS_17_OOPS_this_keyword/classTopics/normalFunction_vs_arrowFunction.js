
//normal function
// let obj = {
//     name : "John",
//     test : function random(){
//         console.log(this)
//     }
// }
// obj.test()
//output : local object

//arrow function
// let obj = {
//     name : "John",
//     test : ()=>{
//         console.log(this)
//     }
// }

// obj.test()
//output: {} empty object

//arrow function inside normal function
let obj = {
    name :"John",
    nested:function random(){
        const random2 = ()=>{
            console.log(this)
        }
        random2()
    }
}
obj.nested()
//output : local object
Promise.myRace = function(promises){
    return new Promise((res,rej)=>{

        promises.forEach((promise)=>{
            Promise.resolve(promise).then((value)=>{
                res(value)
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
            rej("Error")
        },1000)
    })
}

function fetchProfileData(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            // res("Profile data fetched successfully")
            rej("OOPS!!! something fishy")
        },2000)
    })
}

function fetchProductData(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            // res("Product data fetched successfully")
            rej("error")
        },3000)
    })
}

Promise.myRace([fetchUserData(),fetchProfileData(),fetchProductData()]).then((value)=>console.log(value)).catch((error)=>console.log(error))

Promise.myRace([1,2,3]).then((value)=>console.log(value)).catch((error)=>console.log(error))

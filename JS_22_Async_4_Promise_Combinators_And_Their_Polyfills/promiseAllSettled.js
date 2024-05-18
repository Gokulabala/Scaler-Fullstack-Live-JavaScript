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
            // res("Profile data fetched successfully")
            rej("OOPS!!! something fishy")
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

Promise.allSettled([fetchUserData(),fetchProfileData(),fetchProductData()]).then((value)=>console.log(value)).catch((error)=>console.log(error))


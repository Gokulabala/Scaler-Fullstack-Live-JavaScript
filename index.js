//Closure
// OuterScopeFunction()
// function OuterScopeFunction() {
//     var OuterValue = 20;
//     console.log(OuterValue)
//     const innerScopeFunction = function(){
//         var innerValue = 10
//         console.log(OuterValue)
//         console.log(`${innerValue} = 4`)
//     }
    
//     innerScopeFunction()
// }


//Capturing and Bubbling phase
const grandParent = document.querySelector(".grand-parent")
const parent = document.querySelector(".parent")
const child = document.querySelector(".child")
const grandChild = document.querySelector("p")

grandParent.addEventListener("click", (e) => {
    console.log("Grandparent was clicked")
    
})

parent.addEventListener("click", (e) => {
    console.log("Parent was clicked")
    
})

child.addEventListener("click", (e) => {
    console.log("Child was clicked")
    // e.stopPropagation()
})

grandChild.addEventListener("click", (e) => {
    console.log("GrandChild was clicked")
    
})



//Deouncing and Throttling

//Traditional way
// const inputField = document.querySelector('#inputField')
// // inputField.addEventListener('keyup', processInput)

// function processInput(e){
//     console.log("Processing Input")
//     console.log("Making Api calls", e.target.value)
// }

//Debouncing

// const debouncing = debounceEvent(processInput, 1000, true)
// function debounceEvent(cb, delay, isLeading){
//     let timeout = null
//     return function(e){
//         // console.log(e.target.value)
//         if(timeout){
//             clearTimeout(timeout)
//         }
//         else{
//             if(isLeading){
//                 cb(e)
//             }
            
//         }

//         timeout = setTimeout(()=>{
//             clearTimeout(timeout)
//             cb(e)
            
//         },delay)
//     }
// }



// inputField.addEventListener('keyup', debouncing)


//throttling

// const inputField = document.querySelector('#inputField')



// function processInput(e){
//     console.log("processing input")
//     console.log("Making API calls ", e.target.value)
// }
// let count = 0
// function work(){
//     console.log("Network calls-->", count)
//     count++;
// }



// function throttleInput(work,delay){
    
//     let flag = true
//     return function(){
//         if(flag){
//             work()
//             flag = false
        
//         setTimeout(()=>{
//             flag=true            
//         },delay)
//     }
// }
// }

// let throttle = throttleInput(processInput, 1000)
// inputField.addEventListener('keyup', throttle)

//throttling class content

// const delay = 1000
// let lastScrollTime = 0
// let currentScrollLocation = window.scrollY


// window.addEventListener('scroll',()=>{
//     const now = new Date().getTime()
//     console.log(now)
//     // console.log(currentScrollLocation)
//     if(now - lastScrollTime > delay){
//         document.querySelector('#scrollPosition').innerText = window.scrollY
//         console.log("scrolled")
//         lastScrollTime = now
//     }
    
// })
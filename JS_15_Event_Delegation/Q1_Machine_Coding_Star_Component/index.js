// WRITE SOLUTION HERE
// const starParent  = document.querySelector('#star-container')
// const stars = document.querySelectorAll('.star')
// const ratingDisplay = document.querySelector('#count')


// starParent.addEventListener('mouseover',(e)=>{
//     const starElem = e.target
//     // console.log(starElem)
//     const value = starElem.getAttribute('data-index')
//     // console.log(value)

//     stars.forEach((star)=>{
//         const currentValue = star.getAttribute('data-index')
//         console.log(currentValue,value)

//         star.classList.toggle('star-filled',currentValue<=value)
//     })
    
//     // ratingDisplay.innerText = value
    
// })

// starParent.addEventListener('click',(e)=>{
//     const starElem = e.target
//     // console.log(starElem)
//     const value = starElem.getAttribute('data-index')
//     // console.log(value)

//     stars.forEach((star)=>{
//         const currentValue = star.getAttribute('data-index')
//         console.log(currentValue,value)

//         star.classList.toggle('star-filled',currentValue<=value)
//     })
    
//     ratingDisplay.innerText = value
    
// })

let stars = document.querySelector('.star-container');
let allStars = document.querySelectorAll('.star');
let rating= document.querySelector('#count');

stars.addEventListener('mouseover', event=>{
    let overedStar = event.target.dataset.index;
    for(let i=0;i<allStars.length;i++){
        allStars[i].classList.remove('star-filled');
    }
    for(let i=0;i<overedStar;i++){
        allStars[i].classList.add('star-filled');
    }
})
stars.addEventListener('click',event=>{
    let clickedStar = event.target.dataset.index;
    for(let i=0;i<allStars.length;i++){
        allStars[i].classList.remove('star-filled');
    }
    for(let i=0;i<clickedStar;i++){
        allStars[i].classList.add('star-filled')
    }
    rating.innerText= clickedStar;
})






// stars.forEach((star)=>{
//     star.addEventListener('click',(e)=>{
//         let currentclickedIdx = star.getAttribute('data-index')
//         console.log(currentclickedIdx)

//         let value = e.target.dataset.index
//         console.log(value)

//         for(let i=0;i<currentclickedIdx;i++){
//             star.classList.add('star-filled')
//         }
            
        
     
//         ratingDisplay.innerText = currentclickedIdx
        
//     })
// })

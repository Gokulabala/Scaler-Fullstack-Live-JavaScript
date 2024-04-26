// WRITE SOLUTION HERE
const container = document.querySelector('#container')
// console.log(container) 



console.log(container)


data.forEach((item)=>{
    
    // console.log(item)
    const card = document.createElement('div')
    card.classList.add('card')
    
    const rating = parseInt(item.rating.rate)
    console.log(rating)
    const filledStars = rating
    const notFilledStars = 5 - rating
    
    let allStarDiv = ""
    for(let i=0;i<filledStars;i++){
        allStarDiv = allStarDiv + `<span class="star__filled">&#9733;</span>`
    }

    for(let i=0;i<notFilledStars;i++){
        allStarDiv = allStarDiv + `<span class="star__notfilled">&#9734;</span>`
    }
    
    card.innerHTML = `<div class="details">
    <span class="product__name">${item.title}</span>
    <br>
    <span class="product__category">${item.category}</span>
    <div class="all__star">
    ${allStarDiv}
    </div>
    <div class="rating__count">Rating Count : <span>${item.rating.count}</span></div>
    </div>
    <div class="btn">
    <button class="btn__buy">Buy Now</button>
    </div>`
    
    container.appendChild(card)




})


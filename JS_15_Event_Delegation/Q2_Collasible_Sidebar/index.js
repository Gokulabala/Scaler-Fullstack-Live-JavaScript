// Write JS to toggle sidebar functionality here

const sideBar = document.querySelector("#sidebar")
const toogleBtn = document.querySelector('#toggle-button')
const mainContent = document.querySelector('#main-content')
console.log(sideBar)
console.log(toogleBtn)

let toggleFlag = true
toogleBtn.addEventListener('click',(e)=>{
    console.log(e)
    toggleFlag = !toggleFlag
    if(toggleFlag){
        sideBar.style.width = '250px'
        mainContent.style.marginLeft = "250px"
        
    }
    else{
        sideBar.style.width = '80px'
        mainContent.style.marginLeft = "80px"
        
    }
    // sideBar.classList.toggle('collapsed')
    // mainContent.classList.toggle('expanded')
})
// FETCHING ALL THE TICKET CONTAINERS IN AN ARRAY
let ticketContArr = document.querySelectorAll(".ticket-cont");
let removeBtn = document.querySelector(".remove-btn");

let removeFlag = false;

// REMOVE BUTTON HANDLES removeFlag and creates ALERT
removeBtn.addEventListener("click", function () {
  removeFlag = !removeFlag;

  if (removeFlag === true) {
    alert("delete button has been activated");
    removeBtn.style.backgroundColor = "red";
  } else {
    removeBtn.style.backgroundColor = "inherit";
  }
});

// TRAVERSING THROUGH THAT ARRAY
for (let i = 0; i < ticketContArr.length; i++) {
  // ADDING CLICK EVENTLISTENER TO THE ICON
  ticketContArr[i].addEventListener("click", (e) => {
    if (!removeFlag) return;

    ticketContArr[i].remove(); // ui Removal

    // WRITE SOLUTION HERE ============================================
    const taskid = ticketContArr[i].querySelector('.ticket-id').innerText
    
    console.log(taskid)

    let idx = getTicketIdx(taskid)
    console.log(idx)
    // const currentTaskIdx = ticketsArr.findIndex((currentTask)=>{
    //    return currentTask.ticketId===taskid
    //     // console.log(currentTask)
    // }
        
    // )
    // console.log(currentTaskIdx)

    ticketsArr.splice(idx,1)
    console.log(ticketsArr)
    localStorage.setItem("ticketsDB", JSON.stringify(ticketsArr))
  });
}
function getTicketIdx(id){
    let ticketIdx = ticketsArr.findIndex((ticketObj)=>{
        return ticketObj.ticketID === id
    }) 
    return ticketIdx
}
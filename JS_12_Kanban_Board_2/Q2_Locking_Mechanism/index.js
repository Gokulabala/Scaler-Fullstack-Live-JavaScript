// WARNING: DO NOT EDIT THE BELOW CODE OR DATA
let ticketCont = document.createElement("div");
// DUMMY DATA FOR THE COLORS
let ticketsArr = [
    {
      ticketTask: "This is task 1 (lightgreen)",
      ticketColor: "lightgreen",
      ticketID: "dGSUFjfiq",
    },
    {
      ticketTask: "This is task 2 (black)",
      ticketColor: "black",
      ticketID: "ay8dQS0o1",
    },
    {
      ticketTask: "This is task 3 (lightblue)",
      ticketColor: "lightblue",
      ticketID: "fOqBFgQtx",
    },
    {
      ticketTask: "This is task 4 (lightpink)",
      ticketColor: "lightpink",
      ticketID: "fOqBFgQtx",
    },
  ];
  
  // CALLING createTicket() function for each value in ticketsArr
  ticketsArr.forEach(function (ticket) {
    createTicket(ticket.ticketTask, ticket.ticketColor, ticket.ticketID);
  });
  
  // ADDING TICKET TO DOM
  function createTicket(ticketTask, ticketColor, ticketID) {
    let id = ticketID || shortid();
    ticketCont = document.createElement("div");
    ticketCont.setAttribute("class", "ticket-cont");
  
    ticketCont.innerHTML = `<div class="ticket-color ${ticketColor}"></div>
         <div class="ticket-id">${id}</div>
         <div class="task-area">${ticketTask}</div>
         <div class="ticket-lock">
         <button>Locked</button>
        </div>`;
  
    let mainCont = document.querySelector(".main-cont");
    mainCont.append(ticketCont);
    
    

    if (!ticketID) {
      ticketsArr.push({ ticketTask, ticketColor, ticketID: id });
      localStorage.setItem("tickets", JSON.stringify(ticketsArr));
    }
  }


//solution
//handle Lock

function handleLock  (ticket){

    const ticketLockElement = document.querySelectorAll('.ticket-cont')
    console.log(ticketLockElement)
    
    ticketLockElement.forEach((element)=>{
        const textArea = element.querySelector('.task-area')
        const tickLock = element.querySelector('.ticket-lock')
        const btn = element.querySelector('button')


    btn.addEventListener('click', ()=>{
        if(btn.innerText == 'Locked'){
            btn.innerText = 'Unlocked'
            
            textArea.setAttribute("contenteditable", "true")
        }
        else{
            btn.innerText = 'Locked'
            textArea.setAttribute("contenteditable", "false")
        }

        
    })
    console.log(btn)
    })
    
    
}


handleLock(ticketsArr)

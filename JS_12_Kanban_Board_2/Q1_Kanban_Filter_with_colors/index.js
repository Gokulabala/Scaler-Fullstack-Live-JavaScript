const mainCont = document.querySelector(".main-cont");

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
    let ticketCont = document.createElement("div");
    ticketCont.setAttribute("class", "ticket-cont");
  
    ticketCont.innerHTML = `<div class="ticket-color ${ticketColor}"></div>
         <div class="ticket-id">#${id}</div>
         <div class="task-area">${ticketTask}</div>
         <div class="ticket-lock">
           <i class="fa-solid fa-lock"></i>
        </div>`;
  
    
    mainCont.append(ticketCont);
  
    if (!ticketID) {
      ticketsArr.push({ ticketTask, ticketColor, ticketID: id });
      localStorage.setItem("tickets", JSON.stringify(ticketsArr));
    }
  
    // console.log(ticketsArr);
  }

  //solution
  //handling filter
  const allFilterColors = document.querySelectorAll('.color')
  

  allFilterColors.forEach((colorElem)=>{
    colorElem.addEventListener('click', ()=>{
        const selectFilterColor = colorElem.classList[0]
        console.log(selectFilterColor)

        const filteredArray = ticketsArr.filter((currentStepTask)=>
            currentStepTask.ticketColor ==selectFilterColor
        )

        console.log(filteredArray)

        mainCont.innerHTML = ""

        filteredArray.forEach((taskElementCurrent)=>{
            createTicket(
                taskElementCurrent.ticketTask,
                taskElementCurrent.ticketColor,
                taskElementCurrent.ticketID
            )
        })
    })


    colorElem.addEventListener('dblclick', ()=>{
       
        mainCont.innerHTML = ""

        ticketsArr.forEach((taskElementCurrent)=>{
            createTicket(
                taskElementCurrent.ticketTask,
                taskElementCurrent.ticketColor,
                taskElementCurrent.ticketID
            )
        })
    })
  })
  
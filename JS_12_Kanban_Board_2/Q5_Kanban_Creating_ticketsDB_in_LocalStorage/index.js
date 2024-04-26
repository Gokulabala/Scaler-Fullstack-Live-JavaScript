let ticketsArr = [
    {
      ticketTask: "Task 1",
      ticketColor: "lightpink",
      ticketID: 0,
    },
  ];
  
  // Write Code Here =====================
  localStorage.setItem("ticketsDB", "JSON.stringify(ticketsArr)")
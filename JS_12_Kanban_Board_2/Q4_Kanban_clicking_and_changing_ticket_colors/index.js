let ticket = document.querySelector(".ticket-cont");
let colors = ["lightpink", "lightgreen", "lightblue", "black"];

handleColor(ticket)


function handleColor(ticket) {
    let ticketColorBand = ticket.querySelector(".ticket-color");
    let colorArray = ['lightpink', 'lightgreen', 'lightblue', 'black']
    ticketColorBand.addEventListener("click", function () {
      // Write code to select the next color from the colors array here--
        const getCOlor = ticketColorBand.classList[1]
        console.log(getCOlor)

        let ColorIdx  = colorArray.findIndex((currentColor) => currentColor==getCOlor)
        console.log(ColorIdx)

        ColorIdx++
        
        const newColorIdx = ColorIdx % colorArray.length
        const newColor = colorArray[newColorIdx]

        ticketColorBand.classList.remove(getCOlor)
        ticketColorBand.classList.add(newColor)
    });
}
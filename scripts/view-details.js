document.addEventListener("DOMContentLoaded", function(){
    //Fetching all book ticket buttons from the html
    const bookButtons = document.querySelectorAll(".button.view-seats.fr");

    //Loop through each button and addEventListner to each button
    bookButtons.forEach(function (button){
        button.addEventListener("click", function (event){
            // prevent default behaviour of form submission
            event.preventDefault();

            //get the bus details
            const busItem = button.closest(".row-sec"); //parent bus item
            const busName = busItem.querySelector(".travels").textContent; //bus name
            const busTime = busItem.querySelector(".dp-time").textContent; //bus departure time
            const ticketPrice = busItem.querySelector(".fare .f-bold").textContent; 

            //Display a confirmation message
            // alert(`Redirecting towards the booking page!\nBus: ${busName}\n Departure: ${busTime}`);
            const busDetails ={
                bus: busName,
                time: busTime,
                price: ticketPrice,
            }

            const queryParams = new URLSearchParams(busDetails).toString();
            //redirect to the payment page
            window.location.href = `book-ticket.html?${queryParams}`
        })
    })
})
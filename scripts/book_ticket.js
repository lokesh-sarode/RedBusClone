document.addEventListener("DOMContentLoaded", function (){
    //etxract the price from the url
    const urlParams = new URLSearchParams(window.location.search);
    const price = urlParams.get("price");
    const busName = urlParams.get("bus");
    const busTime = urlParams.get("time");
    console.log(price, busName, busTime)
    if (price)
    {
        const totalAmount = document.getElementById("total-amount");
        totalAmount.value = `INR ${price}`;
    }
    else
    {
        alert("Ticket price not found. Please go back and try again.")
    }

    //Razorpay payment integration
    const payButton = document.getElementById("pay-button");
    payButton.addEventListener("click", function() {
        const amountInPaise = price * 100;  //razorpay requires the amount in paise
        const options = {
            key: "rzp_test_Am8Zi1bznoNdxl",
            amount: amountInPaise,
            currency: "INR",
            name: "RedBus Clone",
            description: "Ticket Booking Payment",
            handler: function(response){

                // Collct ticket details
                const ticketDetails ={
                    name: document.getElementById("passenger-name").value,
                    email: document.getElementById("email").value,
                    phone: document.getElementById("phone").value,
                    bus: busName, 
                    time: busTime, 
                    amount: price,
                    paymentId: response.razorpay_payment_id,
                }
                const queryParams = new URLSearchParams(ticketDetails).toString();
                window.location.href = `view-ticket.html?${queryParams}`
                
            },
            prefill: {
                name: document.getElementById("passenger-name"),
                email: document.getElementById("email"),
                phone: document.getElementById("phone"),
            },
            theme: {
                color: "#d84e55",
            }
        }

        const rzp = new Razorpay(options);
        rzp.open();

        rzp.on("payment.failed", function(response){
            // handle payment failure
            alert("Payment failed. Please try again. Error: " + response.error.description)
        })

    })
})

document.querySelector(".proceed-button").addEventListener("click", function (event){
    event.preventDefault();

    // get the form data
    const name = document.getElementById("passenger-name").value;
    const age = document.getElementById("passenger-age").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    //validating inputs
    if (!name || !age || !email || !phone)
    {
        alert("Please fill out all fields.");
        return;
    }

    if(isNaN(age))
    {
        alert("Please enter valid age.")
        return;
    }

    if(!email.includes("@gmail.com"))
    {
        alert("Please enter a valid email address.")
        return;
    }

    if(phone.length < 10)
    {
        alert("Please enter a valid phone number.")
        return;
    }
    // window.location.href = "payment.html"
})
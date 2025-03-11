document.addEventListener("DOMContentLoaded", function () {
    // Get ticket details from URL query parameters
    const urlParams = new URLSearchParams(window.location.search);

    // Populate ticket details
    document.getElementById("ticket-name").textContent = urlParams.get("name");
    document.getElementById("ticket-email").textContent = urlParams.get("email");
    document.getElementById("ticket-phone").textContent = urlParams.get("phone");
    document.getElementById("ticket-bus").textContent = urlParams.get("bus");
    document.getElementById("ticket-time").textContent = urlParams.get("time");
    document.getElementById("ticket-amount").textContent = "INR " + urlParams.get("amount");
    document.getElementById("ticket-payment-id").textContent = urlParams.get("paymentId");

    // Handle Download Receipt Button Click
    const downloadButton = document.getElementById("download-button");

    downloadButton.addEventListener("click", function () {
        generateReceipt();
    });
});

function generateReceipt() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Add ticket content to the PDF
    doc.setFontSize(18);
    doc.text("RedBus Ticket", 10, 20);
    doc.setFontSize(12);
    doc.text(`Passenger Name: ${document.getElementById("ticket-name").textContent}`, 10, 30);
    doc.text(`Email: ${document.getElementById("ticket-email").textContent}`, 10, 40);
    doc.text(`Phone: ${document.getElementById("ticket-phone").textContent}`, 10, 50);
    doc.text(`Bus Name: ${document.getElementById("ticket-bus").textContent}`, 10, 60);
    doc.text(`Departure Time: ${document.getElementById("ticket-time").textContent}`, 10, 70);
    doc.text(`Total Amount: ${document.getElementById("ticket-amount").textContent}`, 10, 80);
    doc.text(`Payment ID: ${document.getElementById("ticket-payment-id").textContent}`, 10, 90);

    // Save the PDF
    doc.save("RedBus_Ticket.pdf");
}

const searchBtn = document.getElementById("search-button");

searchBtn.addEventListener('click', function () {
    const source = document.getElementById('source').value; // Get the value of the source input
    const destination = document.getElementById('destination').value; // Get the value of the destination input
    const date = document.getElementById('date').value; // Get the value of the date input

    // Construct the URL with query parameters
    const url = `search-result.html?source=${encodeURIComponent(source)}&destination=${encodeURIComponent(destination)}&date=${encodeURIComponent(date)}`;

    // Redirect to the search-result.html page with the query parameters
    window.location.href = url;
});
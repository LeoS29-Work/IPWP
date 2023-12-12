// script.js

// Get time (Not being used)
function updateDateTime() {
    var now = new Date();

    var date = now.toLocaleDateString();
    var time = now.toLocaleTimeString();

    document.getElementById("datetime").innerHTML = "Current Date and Time: " + date + " " + time;
}

// Call the function when the page loads
updateDateTime();

// Set up a timer to update the date and time every second
setInterval(updateDateTime, 1000);


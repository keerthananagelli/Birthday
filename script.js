let interval;

function startCountdown() {
    // Get the input values from the user
    const month = document.getElementById("month").value;
    const day = document.getElementById("day").value;
    const year = document.getElementById("year").value;

    if (!month || !day || !year) {
        alert("Please fill in all the fields!");
        return;
    }

    // Set the date of the birthday from user input
    const birthday = new Date(`${year}-${month}-${day}T00:00:00`).getTime();

    // Clear any previous countdown interval
    if (interval) {
        clearInterval(interval);
    }

    // Update the countdown every 1 second
    interval = setInterval(function() {
        let now = new Date().getTime();
        let timeLeft = birthday - now;

        // Calculate time remaining
        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Display the result
        document.getElementById("days").innerHTML = `${days} <span>Days</span>`;
        document.getElementById("hours").innerHTML = `${hours} <span>Hours</span>`;
        document.getElementById("minutes").innerHTML = `${minutes} <span>Minutes</span>`;
        document.getElementById("seconds").innerHTML = `${seconds} <span>Seconds</span>`;

        // If the countdown is finished, display a message
        if (timeLeft < 0) {
            clearInterval(interval);
            document.getElementById("countdown").innerHTML = "Happy Birthday!";
        }
    }, 1000);
}

function findZodiac() {
    console.log("findZodiac function called"); // Add this line
    const birthdate = document.getElementById("birthdate").value;
    if (birthdate) {
        const date = new Date(birthdate);
        
        // Check if the date is valid
        if (isNaN(date.getTime())) {
            alert("Please enter a valid date.");
            return;
        }

        const month = date.getMonth() + 1; // getMonth() is zero-based
        const day = date.getUTCDate(); // Change this line to getUTCDate()

        console.log(`Month: ${month}, Day: ${day}`); // Log the values
        const zodiac = getZodiacSign(month, day);
        const resultDiv = document.getElementById("result");
        const zodiacSignElement = document.getElementById("zodiac-sign");
        const learnMoreBtn = document.getElementById("learnmore-btn");

        zodiacSignElement.innerText = `Your zodiac sign is ${zodiac}`;
        learnMoreBtn.innerText = `Find out more about ${zodiac}`;
        learnMoreBtn.style.display = "inline-block";
        learnMoreBtn.onclick = function() {
            window.location.href = `zodiac.html?sign=${zodiac}`;
        };

        resultDiv.style.display = "block";
    }
}


// Function to determine the zodiac sign based on month and day
function getZodiacSign(month, day) {
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "Aries";
    if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return "Taurus";
    if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) return "Gemini";
    if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) return "Cancer";
    if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return "Leo";
    if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return "Virgo";
    if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) return "Libra";
    if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) return "Scorpio";
    if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) return "Sagittarius";
    if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) return "Capricorn";
    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return "Aquarius";
    if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) return "Pisces";

    return "Unknown date";
}

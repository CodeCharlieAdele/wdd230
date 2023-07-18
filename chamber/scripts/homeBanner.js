
// Function to display the banner
function displayBanner() {
    const banner = document.getElementById("banner");
    let today = new Date();
    let dayOfWeek = today.getDay();
    if (dayOfWeek >= 1 && dayOfWeek <= 3) {
        banner.style.display = "block";
    }
}

// Function to close the banner
function closeBanner() {
    const banner = document.getElementById("banner");
    banner.style.display = "none";
}

displayBanner();

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function loadAdvertisements() {
    const adContainer = document.getElementById("ad-container")
    try {
        // Fetch the members data from the JSON file
        const response = await fetch("data/members.json");
        const data = await response.json();

        let qualifiedMembers = data.members.filter(function (member) {
            return member.membership === "silver" || member.membership === "gold";
        });

        for (let i = 0; i < 1; i++) {
            let randomIndex = getRandomNumber(0, qualifiedMembers.length - 1);
            const member = qualifiedMembers[randomIndex];

            const ad = document.createElement("div");
            ad.className = "ad";
            ad.innerHTML = member.name;
            const advert = document.createElement("div");
            advert.innerHTML = member.advert;
            adContainer.appendChild(ad);
            adContainer.appendChild(advert);

            qualifiedMembers.splice(randomIndex, 1);
        }
    } catch (error) {
        console.error("Failed to load members data:", error);
    }
}

// Load advertisements and display the banner on page load
window.onload = function () {
    loadAdvertisements();
};

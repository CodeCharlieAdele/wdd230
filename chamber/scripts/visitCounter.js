// Somewhere else in your code base set the last visit in localStorage
let lastVisit = Number(window.localStorage.getItem("numVisits-ls")) || 0;

localStorage.setItem('lastVisit', '2023-02-22');

displayDaysSinceLastVisit();

function displayDaysSinceLastVisit() {
  const visitsDisplay = document.querySelector('.daysSinceLastVisit');

  const lastVisit = localStorage.getItem('lastVisit');

  if (!lastVisit) {
    visitsDisplay.innerText = 'This is your first visit';
    
    return;
  }

  const lastVisitDate = Date.parse(lastVisit);
  
  if (!lastVisitDate) {
    // Stored date is not a valid format
    return;
  }

  const currentDate = new Date();

  const difference = currentDate - lastVisitDate;
  const differenceInDays = Math.floor(difference / (1000 * 60 * 60 * 24));

  visitsDisplay.innerText = 'number of days since last visit: ' + differenceInDays;
}


// 1️⃣ Initialize display element variable
const visitsDisplay = document.querySelector(".visits");
let diffDay;
if (currentDate !== lastVisitDate) {
	diffDay = true;
}

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits == 1) {
	visitsDisplay.textContent = `Welcome! It's your first time.`;
} if (numVisits > 1 && diffDay == false) {
	visitsDisplay.textContent = `Back so soon!`;
} if (diffDay == true) {
	visitsDisplay.textContent = `You visited ` + differenceInDays + ` days ago`;
}

// 4️⃣ increment the number of visits by one.
numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);
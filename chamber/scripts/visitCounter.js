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
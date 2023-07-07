
const url = "https://codecharlieadele.github.io/wdd230/data/links.json";

const cards = document.querySelector('#learning-activities');

async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    displayLinks(data);
  }

const displayLinks = (weeks) => {
  weeks.forEach((week) => {
      let card = document.createElement('section');
      let weekNum = document.createElement('h2');
      let link = document.createElement('a');
      let activityLink = `${weeks.week[i].links}`;
      let activityTitle = `${weeks.week[i].links[key]}`;
      weekNum.textContent = `${weeks.week[i]}`;
      link.setAttribute('href', activityLink);
      link.innerHTML = activityTitle;
      card.appendChild(weekNum);
      card.appendChild(link);
      cards.appendChild(card);
  });
}
  
 displayLinks();
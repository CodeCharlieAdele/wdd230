
const baseURL = "https://codecharlieadele.github.io/wdd230/";
const linksURL = "https://codecharlieadele.github.io/wdd230/data/links.json";

const cards = document.querySelector('#learning-activities');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
  }

const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        let card = document.createElement('section');
        let title = document.createElement('h4');
        let url = document.createElement('p');

        title.textContent = `${week.title}`;
        url.textContent = `${week.url}`;

        card.appendChild(url);
        card.appendChild(title);

        cards.appendChild(card);
    });
  }

  getLinks();
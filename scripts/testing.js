
//const baseURL = "https://codecharlieadele.github.io/wdd230/";
const url = "https://codecharlieadele.github.io/wdd230/data/links.json";

const cards = document.querySelector('#learning-activities');

// async function getLinks() {
//     const response = await fetch(url);
//     const data = await response.json();
//     displayLinks(data.weeks);
//   }

  function showList(){
    fetch("./lib/examples/students.json")
      .then(response => response.json())
      .then(data => createList(data));
  }
  
  function createList(data) {
    const mainUL = document.createElement('ol');
    for (let i = 0; i < data.weeks.length; i++) {
      const week = document.createElement('p');
      week.innerHTML = data.result[i].week;

      // create list for marks
      const links = document.createElement('a');
      for (var key in data.weeks[i].links) {
        const marksLI = document.createElement('li');
        marksLI.innerHTML = key + ': ' + data.weks[i].links[i];
        marksUL.appendChild(marksLI);
      }

      // append marks list to studentLI
      week.appendChild(marksUL);
      // append student list to mainUL
      mainUL.appendChild(week);
    }
    // append mainUL to body
    document.body.appendChild(mainUL);
  }












const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        const card = document.createElement('section');
        for (let i = 0; i < data.weeks.length; i++) {
        const activityLink = document.createElement('a');
        activityLink.innerHTML = data.result[i].key;

        const card = document.createElement('section');
        for (let i = 0; i < data.weeks.length; i++) {
        const activityLink = document.createElement('a');
        activityLink.innerHTML = data.result[i].key;


        let card = document.createElement('section');
        let a = document.createElement("a");
        let lineBreak = document.createElement("br");
        
        a.setAttribute("href", songUrl);
        a.innerHTML = songName;

        card.appendChild(a);
        card.appendChild(lineBreak);

        cards.appendChild(card);
    }});
  }

  getLinks();
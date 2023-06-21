const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

function setChapterList() {
   localStorage.setItem('myFavoriteBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
   return JSON.parse(localStorage.getItem('myFavoriteBOMList'));
}

function deleteChapter(chapter) {
   chapter = chapter.slice(0, chapter.length - 1);
   chaptersArray = chaptersArray.filter((item) => item !== chapter);
   setChapterList();
}

function displayList(item) {
   let li = document.createElement('li');
   let deletebutton = document.createElement('button');
   li.textContent = item;
   deletebutton.textContent = '❎';
   deletebutton.classList.add('delete');
   li.append(deletebutton);
   list.append(li);
   deletebutton.addEventListener('click', function () {
      list.removeChild(li);
      deleteChapter(li.textContent);
      input.focus();
   });
   console.log('I like to look at reference code to better help me understand a programming langauge. 😝')
}

chaptersArray.forEach(chapter => {
   displayList(chapter);
});

button.addEventListener('click', () => {
   if (input.value != '') {
      displayList(input.value);
      chaptersArray.push(input.value);
      setChapterList();
      input.value = '';
      input.focus();
   }
});

 
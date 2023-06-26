document.addEventListener('DOMContentLoaded', function () {
	
	let currentDate = new Date().toLocaleDateString();
	let lastVisit = localStorage.getItem('lastVisit');
  
	localStorage.setItem('lastVisit', currentDate);
  
	let timeDiff = 0;
	if (lastVisit) {
	  let prevVisit = new Date(lastVisit).toLocaleDateString();
	  timeDiff = Math.floor((new Date(currentDate) - new Date(prevVisit)) / (1000 * 60 * 60 * 24));
	}

	let sidebarContent = document.querySelector('.message');
  
	if (!lastVisit) {
	  sidebarContent.innerHTML = '<p>Welcome! Let us know if you have any questions.</p>';
	} else if (timeDiff < 1) {
	  sidebarContent.innerHTML = '<p>Back so soon! Awesome!</p>';
	} else {
	  let daysText = timeDiff === 1 ? 'day' : 'days';
	  sidebarContent.innerHTML = '<p>You last visited ' + timeDiff + ' ' + daysText + ' ago.</p>';
	}
  });
  
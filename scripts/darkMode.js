//function darkmode(){
//	main.style.background = "#000";
//	main.style.color = "#fff";
//    links.style.color = "#fff";
//
//	modeButton.textContent = "🤍";
//}
//
//function lightmode(){
//	main.style.background = "#eee";
//	main.style.color = "#000";
//    links.style.color = "#000";
//	modeButton.textContent = "🖤";
//}
//
//const modeButton = document.querySelector("#mode");
//const main = document.querySelector("main");
//let links = document.querySelectorAll(".links");
//
//
//modeButton.addEventListener("click", () => {  
//  if (modeButton.textContent.includes("🖤"))
//	{
//    darkmode()
//  	} 
//  else if (modeButton.textContent.includes("🤍"))
//	{
//    lightmode()
//	}
//});


const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
//const links = document.querySelectorAll(".links");
//const cards = document.querySelector(".card a");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🖤")) {
		main.style.background = "#000";
		main.style.color = "#fff";
        //links.style.color = "#fff";
        //cards.style.color = "#fff";
		modeButton.textContent = "🤍";
	} else {
		main.style.background = "#fff";
		main.style.color = "#000";
        //links.style.color = "#000";
		modeButton.textContent = "🖤";
	}
});
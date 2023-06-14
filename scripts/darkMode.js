const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
//const cards = document.querySelector(".card a");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🖤")) {
		main.style.background = "#000";
		main.style.color = "#fff";
        //cards.style.color = "#fff";
		modeButton.textContent = "🤍";
	} else {
		main.style.background = "#fff";
		main.style.color = "#000";
		modeButton.textContent = "🖤";
	}
});
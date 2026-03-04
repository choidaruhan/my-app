import "./style.css";

let count = 0;

const countDisplay = document.getElementById("count-display")!;
const incrementBtn = document.getElementById("increment-btn")!;
const resetBtn = document.getElementById("reset-btn")!;

function updateDisplay() {
	countDisplay.textContent = count.toString();
}

incrementBtn.addEventListener("click", () => {
	count++;
	updateDisplay();
});

resetBtn.addEventListener("click", () => {
	count = 0;
	updateDisplay();
});

// Initialize display
updateDisplay();

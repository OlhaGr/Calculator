const resultScreen = document.getElementsById('results');
const calcBtns = document.getElementsByClassName('buttons');
 //

	for(var i = 0; i < calcBtns.length; i++) {
		let btn = calcBtns[i];
		btn.addEventListener('click', function () {
			let currentButton = btn.innerHTML;
			updateScreen(currentButton);
	})
}
function updateScreen(str) {
	if (resultsScreen.innerText === '0') {
		resultsScreen.innerText = str;
	} else {
		resultsScreen.innerText += str;
	}
}

let firstNumber;
let lastNumber;
let calcResult;
let oprCharacter;

function checOperetion(opr) {
	if (opr !== "=" && opr !== 'AC') {
		updateScreen(opr);
		firstNumber = resultsScreen.innerText.slice(0, -1);
		oprCharacter = resultsScreen.innerText.slice(-1);
	} else {
		if (opr === 'AC') {
			resetScreen();
		}
		if (opr === '=') {
			count()
		}
	}
}

function count() {
	lastNumber = resultsScreen.innerText.split(oprCharacter)[1];
	if (oprCharacter == '+') {
		calcResult = Number(firstNumber) + Number(lastNumber);
	} else if (oprCharacter === '-') {
		calcResult = Number(firstNumber) - Number(lastNumber);
	} else if (oprCharacter === '/') {
		calcResult = Number(firstNumber) / Number(lastNumber);
	} else if (oprCharacter === '*') {
		calcResult = Number(firstNumber) * Number(lastNumber);
	}
	resetScreen.innerText = calcResult;
}

function resetScreen() {
		resultsScreen.innerText = 0;
	}

document.body.style.backgroundColor = "yellow";
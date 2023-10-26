function clearFunction() {
	document.calc.txt.value = document.calc.txt.value.substring(0, document.calc.txt.value.length - 1);
}

function plusMinus() {
	if (document.calc.txt.value.charAt(0) === "-") {
		document.calc.txt.value = document.calc.txt.value.slice(1);
	} else {
		document.calc.txt.value = "-" + document.calc.txt.value;
	}
}

function piFunction() {
	document.calc.txt.value = document.calc.txt.value * (180 / Math.PI);
}

function expFunction() {
	document.calc.txt.value = Math.exp(document.calc.txt.value);
}

function sinFunction() {
	document.calc.txt.value = Math.sin(document.calc.txt.value);
}

function cosFunction() {
	document.calc.txt.value = Math.cos(document.calc.txt.value);
}

function tanFunction() {
	document.calc.txt.value = Math.tan(document.calc.txt.value);
}

function logFunction() {
	document.calc.txt.value = Math.log10(document.calc.txt.value);
}

function radFunction() {
	document.calc.txt.value = document.calc.txt.value * (Math.PI / 180);
}

function inFunction() {
	document.calc.txt.value = Math.log(document.calc.txt.value);
}

function percentageFunction() {
	document.calc.txt.value = document.calc.txt.value / 100;
}

function pieFunction() {
	document.calc.txt.value = document.calc.txt.value * Math.PI;
}

function factorialFunction() {
	let number = 1;
	if (document.calc.txt.value === 0) {
		document.calc.txt.value = "1";
	} else if (document.calc.txt.value < 0) {
		document.calc.txt.value = NaN;
	} else {
		let number = 1;
		for (let i = document.calc.txt.value; i > 0; i--) {
			number *= i;
		}
		document.calc.txt.value = number;
	}
}

function sqrtFunction() {
	document.calc.txt.value = Math.sqrt(document.calc.txt.value);
}

function squreFunction() {
	document.calc.txt.value = eval(document.calc.txt.value * document.calc.txt.value);
}

function equalFunction() {
	if (document.calc.txt.value.indexOf("^") > -1) {
		let base = document.calc.txt.value.slice(0, document.calc.txt.value.indexOf("^"));
		let exponent = document.calc.txt.value.slice(document.calc.txt.value.indexOf("^") + 1);
		document.calc.txt.value = eval("Math.pow(" + base + "," + exponent + ")");
	} else {
		document.calc.txt.value = eval(document.calc.txt.value);
	}
}

let display = document.getElementById("display");

// Insert number/operator
function insert(value) {
    if (display.innerText === "0" || display.innerText === "Error") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

// Clear display
function clearDisplay() {
    display.innerText = "0";
}

// Calculate result
function calculate() {
    let expr = display.innerText;
    try {
        display.innerText = eval(
            expr.replace(/÷/g, '/')
                .replace(/×/g, '*')
                .replace(/%/g, '/100')
        );
    } catch {
        display.innerText = "Error";
    }
}

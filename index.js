const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const id = btn.id;

        if (id === "=") {
            calculateResult();
        } else if (id === "ac") {
            display.value = "";
        } else if (id === "de") {
            display.value = display.value.slice(0, -1);
        } else {
            if (isValidInput(id)) {
                display.value += id;
            }
        }
    });
});


function calculateResult() {
    try {
        const result = new Function(`return ${display.value}`)();
        if (Number.isFinite(result)) {
            display.value = result;
        } else {
            display.value = "Error";
        }
    } catch {
        display.value = "Error";
    }
}

function isValidInput(value) {
    const lastChar = display.value.slice(-1);
    const operators = ["+", "-", "*", "/"];

    if (operators.includes(value) && operators.includes(lastChar)) {
        return false; 
    }

    return true;
}

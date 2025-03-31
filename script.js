function add(x, y){
    return x + y;
}

function sub(x, y){
    return x - y
}

function multiply(x, y){
    return x * y
}

function divide(x, y){
    if (y === 0) return "error"
    else return x / y
}

function operate(operator, x, y){
    switch(operator){
        case "+": return add(x, y);
        case "-": return sub(x,y);
        case "*": return multiply(x,y);
        case "/": return divide(x, y);
        default: return "Error";
    }
}

const display = document.querySelector(".display")
const btn = document.querySelectorAll("button")
const clear = document.getElementById("clear");
const equals = document.getElementById("equals")

clear.addEventListener("click", () =>{
    display.textContent = "";
})

clear.textContent = "C"

function calculator() {
    const expression = display.textContent;


    const numbers = expression.split(/[+\-*/]/).map(num => parseFloat(num));
    const operators = expression.split(/[0-9]+/).filter(char => char.match(/[+\-*/]/));


    if (numbers.length === 2 && operators.length === 1) {
        const x = numbers[0];
        const y = numbers[1];
        const operator = operators[0];  
        const result = operate(operator, x, y);
        display.textContent = result;
    } else {
        display.textContent = "Error";  
    }
}

btn.forEach((button) => {
    button.addEventListener("click", () => {
        
        if (button.textContent === "=") {
            calculator();
        } else if (button.textContent === "C") {
            display.textContent = "";
        } else {
            display.textContent += button.textContent;
        }
    });
});



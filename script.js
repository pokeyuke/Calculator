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
    return operator(x, y)
}

const display = document.querySelector(".display")
const btn = document.querySelectorAll("button")


btn.forEach((button) => {
    button.addEventListener("click", () => {
        display.textContent += button.textContent
    })
})



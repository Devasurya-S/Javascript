let num1 = 5
let num2 = 4
let ans = 0
let ansEl = document.getElementById("ans-el")

document.getElementById("num1-el").textContent = num1

document.getElementById("num2-el").textContent = num2

function add() {
    ans = num1 + num2
    ansEl.textContent = ans
}


function subtract() {
    ans = num1 - num2
    ansEl.textContent = ans
}

function divide() {
    ans = num1 / num2
    ansEl.textContent = ans
}

function multiply() {
    ans = num1 * num2
    ansEl.textContent = ans
}
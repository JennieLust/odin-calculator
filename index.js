const body = document.body;
const calcContainer = document.querySelector(".calc-container");
const calcScreen = document.querySelector('.calc-screen');
const calcDisplay = document.querySelector('.calc-display');
const btn0 = document.querySelector('#zero');
const btn1 = document.querySelector('#one');
const btn2 = document.querySelector('#two');
const btn3 = document.querySelector('#three');
const btn4 = document.querySelector('#four');
const btn5 = document.querySelector('#five');
const btn6 = document.querySelector('#six');
const btn7 = document.querySelector('#seven');
const btn8 = document.querySelector('#eight');
const btn9 = document.querySelector('#nine');
const btnC = document.querySelector('.calc-clear-screen');

let currentNum = "";

function multiply(num1, num2) {
    return num1 * num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function add(num1, num2) {
    return num1 + num2;
};

function divide(num1, num2) {
    return num1 / num2;
};

function operate(operator, num1, num2) {
    if (operator == "divide") {
        return divide(num1, num2);
    } else if (operator == "add") {
        return add(num1, num2);
    } else if (operator == "subtract") {
        return subtract(num1, num2);
    } else if (operator == "multiply") {
        return multiply(num1, num2)
    } else {
        alert("Unvalid operator")
    };
;}
btn0.addEventListener('click', () => {
    display(0);
})
btn1.addEventListener('click', () => {
    display(1);
})
btn2.addEventListener('click', () => {
    display(2);
})
btn3.addEventListener('click', () => {
    display(3);
})
btn4.addEventListener('click', () => {
    display(4);
})
btn5.addEventListener('click', () => {
    display(5);
})
btn6.addEventListener('click', () => {
    display(6);
})
btn7.addEventListener('click', () => {
    display(7);
});
btn8.addEventListener('click', () => {
    display(8);
});
btn9.addEventListener('click', () => {
    display(9);
})

/* is null? */
btnC.addEventListener('click', () => {
    display("erase");
})



function display(num) {
    /* add IF erase */
    currentNum = `${currentNum}${num}`;
    calcDisplay.innerText = `${currentNum}`; 
}


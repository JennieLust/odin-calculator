/* DONE: 
operand functions / buttons
operate function
basic html
equal button / function
display that shows display value
clear button / function
working calculator 
add error when pressing = before all numbers
add error when dividing by 0 */
/* OPTIONAL: add backspace button (should be easy, use arr.pop) */
/* make it so that you can press another operand for a sum instead of HAVING to pick eq each time
figure out what stops string of operations from working*/
/* OPTIONAL: add keyboard support (sounds fun and useful) */


/* TODO:
figure out why keyboard support gets wrong sums
OPTIONAL: make work with decimals (sounds difficult - something to come back to)*/


/* init HTML vars */
const body = document.body;
const calcContainer = document.querySelector(".calc-container");
const calcScreen = document.querySelector('.calc-screen');
const calcDisplay = document.querySelector('.calc-large-display');
const calcSmallDisplay = document.querySelector('.calc-small-display');
const calcOpDisplay = document.querySelector('.calc-display-operand');
const calcButtons = document.querySelector('.operand-buttons');
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
const btnC = document.querySelector('.calc-container #clear-button');
const btnEq = document.querySelector('#eq');
const btnAdd = document.querySelector('#op-add');
const btnSub = document.querySelector('#op-sub');
const btnMul = document.querySelector('#op-mul');
const btnDiv = document.querySelector('#op-div'); 
const btnCOne = document.querySelector('#clear-one-button');

/* vars for storage of numbers */
let currentArr = [];
let storedArr = [];
/* stored current operand */
let currentOp = "";
let sum = NaN;

/* operand functions */
function multiply(num1, num2) {
    return num1 * num2;};
function subtract(num1, num2) {
    return num1 - num2;};
function add(num1, num2) {
    return num1 + num2;};
function divide(num1, num2) {
    return num1 / num2;};

/* operate function that applies correct operand function based on stored operand */
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

/* keyboard input triggering button events */
document.body.addEventListener('keydown', (event) => {
    switch (event.keyCode) {
        case 96:
        case 48:
            btn0.click();
            break;
        case 49:
        case 97:
            btn1.click();
            break;
        case 98:
        case 50:
            btn2.click();
            break;
        case 99:
        case 51:
            btn3.click();
            break;
        case 100:
        case 52:
            btn4.click();
            break;
        case 101:
        case 53:
            btn5.click();
            break;
        case 102:
        case 54:
            btn6.click();
            break;
        case 103:
        case 55:
            btn7.click();
            break;
        case 104:
        case 56: 
            btn8.click();
            break;
        case 105:
        case 57:
            btn9.click();
            break;
        case 107:
        case 170:
            btnAdd.click();
            break;
        case 109:
        case 173:
            btnSub.click();
            break;
        case 111:
            btnDiv.click();
            break;
        case 106:
        case 122:
            btnMul.click();
            break;
        case 8: 
            btnCOne.click();
            break;
        case 46:
            btnC.click();
            break;
    }
    if (event.shiftKey === true && event.keyCode === 55) {
        btnDiv.click();
    } else if (event.shiftKey === true && event.keyCode === 48) {
        /* This results in 
        1 + 1 = 11 
        7 / 7 = 0.1
        1 * 3 = 30
        10 - 5 = -40
        WHY */
        btnEq.click();
    }
})

/* number buttons w/ event functions */
btn0.addEventListener('click', () => {
    currentArr.push(0);
    displayCurrArr()
    if (storedArr.length >= 1) {
        displayStoArr();
    }})
btn1.addEventListener('click', () => {
    currentArr.push(1);
    displayCurrArr()
    if (storedArr.length >= 1) {
        displayStoArr();
    }})
btn2.addEventListener('click', () => {
    currentArr.push(2);
    displayCurrArr()
    if (storedArr.length >= 1) {
        displayStoArr();
    }})
btn3.addEventListener('click', () => {
    currentArr.push(3);
    displayCurrArr()
    if (storedArr.length >= 1) {
        displayStoArr();
    }})
btn4.addEventListener('click', () => {
    currentArr.push(4);
    displayCurrArr()
    if (storedArr.length >= 1) {
        displayStoArr();
    }})
btn5.addEventListener('click', () => {
    currentArr.push(5);
    displayCurrArr()
    if (storedArr.length >= 1) {
        displayStoArr();
    }})
btn6.addEventListener('click', () => {
    currentArr.push(6);
    displayCurrArr()
    if (storedArr.length >= 1) {
        displayStoArr();
    }})
btn7.addEventListener('click', () => {
    currentArr.push(7);
    displayCurrArr()
    if (storedArr.length >= 1) {
        displayStoArr();
    }});
btn8.addEventListener('click', () => {
    currentArr.push(8);
    displayCurrArr()
    if (storedArr.length >= 1) {
        displayStoArr();
    }});
btn9.addEventListener('click', () => {
    currentArr.push(9);
    displayCurrArr()
    if (storedArr.length >= 1) {
        displayStoArr();
    }})

/* button for clearing data */
btnC.addEventListener('click', () => {
    calcDisplay.innerHTML = "";
    calcSmallDisplay.innerHTML = "";
    calcOpDisplay.innerHTML = "";
    storedArr = [];
    currentArr = [];
    sum = 0;
    changeButtons("enable")
})

btnCOne.addEventListener('click', () => {
    if (currentArr.length >= 1) {    
        currentArr.pop();
        displayCurrArr();} 
    else if (currentArr.length = 0) {
        btnC.click();
    }

})

/* operand buttons w/ event functions */
/* DOESN'T FULLY WORK AS INTENDED visavi STRING OF OPERATIONS */
btnAdd.addEventListener('click', () => {
    /* decides if this is a new operation or string operation */
    if (storedArr.length >= 1) {
        btnEq.click();
        currentOp = "+";
        displayCurrOp();
        displayCurrArr();
        displayStoArr();
        storedArr = currentArr
        currentArr = [];
    } else {
        storedArr = currentArr;
        currentArr = [];
        currentOp = "+";
        displayCurrOp();
        displayCurrArr();
        displayStoArr(); 
    }})

btnSub.addEventListener('click', () => {
    if (storedArr.length >= 1) {
        btnEq.click();
        currentOp = "-";
        displayCurrOp();
        displayCurrArr();
        displayStoArr();
        storedArr = currentArr
        currentArr = [];
    } else {
        storedArr = currentArr;
        currentArr = [];
        currentOp = "-";
        displayCurrOp();
        displayCurrArr();
        displayStoArr(); 
    }})

btnDiv.addEventListener('click', () => {
    if (storedArr.length >= 1) {
        btnEq.click();
        currentOp = "/";
        displayCurrOp();
        displayCurrArr();
        displayStoArr();
        storedArr = currentArr
        currentArr = [];
    } else {
        storedArr = currentArr;
        currentArr = [];
        currentOp = "/";
        displayCurrOp();
        displayCurrArr();
        displayStoArr(); 
    }})

btnMul.addEventListener('click', () => {
    if (storedArr.length >= 1) {
        btnEq.click();
        currentOp = "*";
        displayCurrOp();
        displayCurrArr();
        displayStoArr();
        storedArr = currentArr
        currentArr = [];
    } else {
        storedArr = currentArr;
        currentArr = [];
        currentOp = "*";
        displayCurrOp();
        displayCurrArr();
        displayStoArr(); 
    }})

btnEq.addEventListener('click', () => {
    if (currentOp != "" && currentArr.length >= 1) {
        if (currentOp === "+") {
            sum = add(parseInt(storedArr.join("")), parseInt(currentArr.join(""))) 
        } else if (currentOp === "-") {
            sum = subtract(parseInt(storedArr.join("")), parseInt(currentArr.join("")))
        } else if (currentOp === "/") {
            if (parseInt(storedArr.join("")) === 0 || parseInt(currentArr.join("")) === 0) {
                sum = "nonono"
                changeButtons("disable")
            } else {
                sum = divide(parseInt(storedArr.join("")), parseInt(currentArr.join("")))};
        } else if (currentOp === "*") {
            sum = multiply(parseInt(storedArr.join("")), parseInt(currentArr.join("")))
        } else if (currentArr.length < 1 && storedArr.length < 1) {
            sum = 0
        } else if (currentArr.length < 1 && storedArr.length >= 1) {
            sum = parseInt(storedArr.join(""))
        } else if (currentArr.length >= 1 && storedArr.length < 1) {
            
        } else {
            sum = 0;
        }
    } else if (currentOp === "" && currentArr.length >= 1) {
        sum = parseInt(currentArr.join(""))
    } else {
        sum = "ERROR";
        changeButtons("disable")

    }
    currentArr = [];
    storedArr = [];
    currentOp = "";
    currentArr.push(sum);
    displayCurrArr()
    displayCurrOp()
    displayStoArr();
})

function changeButtons(action) {
    if (action === "disable") {
        btn0.disabled = true
        btn1.disabled = true
        btn2.disabled = true
        btn3.disabled = true
        btn4.disabled = true
        btn5.disabled = true
        btn6.disabled = true
        btn7.disabled = true
        btn8.disabled = true
        btn9.disabled = true
        btnEq.disabled = true
        btnAdd.disabled = true
        btnSub.disabled = true
        btnMul.disabled = true
        btnDiv.disabled = true
    } else if  (action === "enable")  {
        btn0.disabled = false
        btn1.disabled = false
        btn2.disabled = false
        btn3.disabled = false
        btn4.disabled = false
        btn5.disabled = false
        btn6.disabled = false
        btn7.disabled = false
        btn8.disabled = false
        btn9.disabled = false
        btnEq.disabled = false
        btnAdd.disabled = false
        btnSub.disabled = false
        btnMul.disabled = false
        btnDiv.disabled = false
    }
};

function displayCurrArr() {
    if (currentArr.length < 1) {
        calcDisplay.innerHTML = "" 
    } else {
        calcDisplay.innerHTML = Math.round(parseFloat(currentArr.join('')) * 100) / 100;
    }
   
    
};

function displayStoArr() {
    calcSmallDisplay.innerHTML = storedArr.join(''); 
}

function displayCurrOp() {
    calcOpDisplay.innerHTML = currentOp;
}




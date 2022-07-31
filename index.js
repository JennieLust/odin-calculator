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

let currentArr = [];
let storedArr = [];
let currentOp = NaN;
let sum = NaN;


function multiply(num1, num2) {
    return num1 * num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function add(num1, num2) {
    console.log(num1);
    console.log(num2);
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

btnC.addEventListener('click', () => {
    clearDisplay();
})

btnAdd.addEventListener('click', () => {
    storedArr = currentArr;
    currentOp = "add";
    currentArr = [];
    calcDisplay.innerHTML = "";
    calcSmallDisplay.innerHTML = storedArr.join('');
    calcOpDisplay.innerText = '+'
})

btnSub.addEventListener('click', () => {
    storedArr = currentArr;
    currentOp = "sub";
    currentArr = [];
    calcDisplay.innerHTML = "";
    calcSmallDisplay.innerHTML = storedArr.join('');
    calcOpDisplay.innerText = '-'
})

btnDiv.addEventListener('click', () => {
    storedArr = currentArr;
    currentOp = "div";
    currentArr = [];
    calcDisplay.innerHTML = "";
    calcSmallDisplay.innerHTML = storedArr.join('');
    calcOpDisplay.innerText = '/'
})

btnMul.addEventListener('click', () => {
    storedArr = currentArr;
    currentOp = "mul";
    currentArr = [];
    calcDisplay.innerHTML = "";
    calcSmallDisplay.innerHTML = storedArr.join('');
    calcOpDisplay.innerText = '*'
})

btnEq.addEventListener('click', () => {
    let currentNum = parseInt(currentArr.join(''));
    let storedNum = parseInt(storedArr.join(''));
    console.log(currentNum);
    console.log(storedNum);
    if (currentOp === "add") {
        sum = add(storedNum, currentNum)
    } else if (currentOp === "sub") {
        sum = subtract(storedNum, currentNum)
    } else if (currentOp === "mul") {
        sum = multiply(storedNum, currentNum)
    } else if (currentOp === "div") {
        sum = divide(storedNum, currentNum)
    };
    console.log(typeof(storedNum))
    console.log(typeof(currentNum))
    currentOp = "";
    displaySum(sum);
    console.log(typeof(sum))
    calcOpDisplay.innerText = ''
})

function displaySum(num) {
    calcDisplay.innerText = num;
};

function display(num) {
    /* add IF erase */
    currentArr.push(num);
    let currentNum = parseInt(currentArr.join(''));
    let storedNum = parseInt(storedArr.join(''));
    calcDisplay.innerText = `${currentNum}`;
    if (storedNum >= 0) {
        calcSmallDisplay.innerText = `${storedNum}`;
    }
    
}

function clearDisplay() {
    currentArr = [];
    storedArr = [];
    calcSmallDisplay.innerHTML = ""
    calcDisplay.innerHTML = "";
    sum = NaN;
}



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
let currentOp = "";
let sum = NaN;




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
    currentArr.push(0);
    displayCurrArr()
    if (storedArr.length >= 1) {
        displayStoArr();
    }
})
btn1.addEventListener('click', () => {
    currentArr.push(1);
    displayCurrArr()
    if (storedArr.length >= 1) {
        displayStoArr();
    }

})
btn2.addEventListener('click', () => {
    currentArr.push(2);
    displayCurrArr()
    if (storedArr.length >= 1) {
        displayStoArr();
    }

})
btn3.addEventListener('click', () => {
    currentArr.push(3);
    displayCurrArr()
    if (storedArr.length >= 1) {
        displayStoArr();
    }

})
btn4.addEventListener('click', () => {
    currentArr.push(4);
    displayCurrArr()
    if (storedArr.length >= 1) {
        displayStoArr();
    }

})
btn5.addEventListener('click', () => {
    currentArr.push(5);
    displayCurrArr()
    if (storedArr.length >= 1) {
        displayStoArr();
    }

})
btn6.addEventListener('click', () => {
    currentArr.push(6);
    displayCurrArr()
    if (storedArr.length >= 1) {
        displayStoArr();
    }
 
})
btn7.addEventListener('click', () => {
    currentArr.push(7);
    displayCurrArr()
    if (storedArr.length >= 1) {
        displayStoArr();
    }

});
btn8.addEventListener('click', () => {
    currentArr.push(8);
    displayCurrArr()
    if (storedArr.length >= 1) {
        displayStoArr();
    }

});
btn9.addEventListener('click', () => {
    currentArr.push(9);
    displayCurrArr()
    if (storedArr.length >= 1) {
        displayStoArr();
    }

})

    const click = new Event('click');

btnC.addEventListener('click', () => {
    calcDisplay.innerHTML = "";
    calcSmallDisplay.innerHTML = "";
    calcOpDisplay.innerHTML = "";
    storedArr = [];
    currentArr = [];
    sum = 0;
    if (currentOp != "" && currentArr.length >= 0) {
        btnEq.dispatchEvent(click);
    }

})

btnAdd.addEventListener('click', () => {
    storedArr = currentArr;
    currentArr = [];
    currentOp = "+";
    displayCurrOp();
    displayCurrArr();
    displayStoArr();
})

btnSub.addEventListener('click', () => {
    storedArr = currentArr;
    currentArr = [];
    currentOp = "-";
    displayCurrOp();
    displayCurrArr();
    displayStoArr();
})

btnDiv.addEventListener('click', () => {
    storedArr = currentArr;
    currentArr = [];
    currentOp = "/";
    displayCurrOp();
    displayCurrArr();
    displayStoArr();

})

btnMul.addEventListener('click', () => {
    storedArr = currentArr;
    currentArr = [];
    currentOp = "*";
    displayCurrOp();
    displayCurrArr();
    displayStoArr();
})

btnEq.addEventListener('click', () => {
    if (currentOp === "+") {
        sum = add(parseInt(storedArr.join("")), parseInt(currentArr.join(""))) 
    } else if (currentOp === "-") {
        sum = subtract(parseInt(storedArr.join("")), parseInt(currentArr.join("")))
    } else if (currentOp === "/") {
        sum = divide(parseInt(storedArr.join("")), parseInt(currentArr.join("")))
    } else if (currentOp === "*") {
        sum = multiply(parseInt(storedArr.join("")), parseInt(currentArr.join("")))
    } else if (currentArr.length < 1 && storedArr.length < 1) {
        sum = 0
    } else if (currentArr.length < 1 && storedArr.length >= 1) {
        sum = parseInt(storedArr.join(""))
    } else if (currentArr >= 1 && storedArr.length < 1) {
        sum = parseInt(currentArr.join(""))
    } else {
        sum = 0;
    }
    currentArr = [];
    storedArr = [];
    currentOp = "";
    currentArr.push(sum);
    displayCurrArr()
    displayCurrOp()
    displayStoArr();
})

function displayCurrArr() {
    calcDisplay.innerHTML = currentArr.join('');
};

function displayStoArr() {
    calcSmallDisplay.innerHTML = storedArr.join('');
    
}

function displayCurrOp() {
    calcOpDisplay.innerHTML = currentOp;
}



/* if longer than x, collapse number to factors of ten*/
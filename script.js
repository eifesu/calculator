const display = document.querySelector('.display');
// The whole purpose of this variable
let overwritable = true;
let memVar = 0;
let curVar = 0;
let operation;

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    if (b == 0) {
        alert("You shouldn't be doing that :) ")
        return
    }
    return a / b
}

function storeData(number = Number(display.textContent)) {
    memVar = Math.round(number * 100) / 100;
}
function clearMemory() {
    memVar = 0;
}
function clearDisplay() {
    // Basically resets the whole thing
    display.textContent = '';
}
function populateDisplay(num) {
    // If there something from the previous operation erase it
    if (overwritable) {
        clearDisplay();
        overwritable = false;
    }
    display.textContent += num;
    comma.disabled = display.textContent.includes('.');
}

function updateDisplay(num) {
    display.textContent = num;
}
function operate() {
    return operation(memVar,Number(display.textContent));
}

function calc(id) {
    // When an operator is pressed the function checks which operation it is 
    if(memVar) {
        const result = operate();
        storeData(result);
        console.log(`result is ${result}`);
        updateDisplay(result);
    }
    
    
    switch (id) {
        case 'add':
            operation = add; break; 
            
            case 'subtract': operation =  subtract; break; 
            
            case 'divide': operation =  divide; break; 
            
            case 'multiply': operation =  multiply; break; 
            
            case 'enter': updateDisplay(memVar); break;
        }
        console.log(operation)
        console.log(`memVar = ${memVar}`);
        
        
        
        // Save the current value and clear the display
        storeData();
        overwritable = true;
        
        
    }
    
    const operators = document.querySelectorAll('.operator');
    for (const operator of operators) {
        operator.addEventListener('click', (e) =>{
            calc(e.target.id);
        })
    }
    
    const buttons = document.querySelector('.buttons');
    const comma = document.querySelector('.comma');
    
    const numbers = document.querySelectorAll('#number');
    for (const number of numbers) {
        number.addEventListener('click', (e) => populateDisplay(e.target.textContent))
    }
    
    const clear = document.querySelector('#clear');
    clear.addEventListener('click', () => {
        clearMemory();
        clearDisplay();
    });
    
    
    const backspace = document.querySelector('#backspace');
    backspace.addEventListener('click', () => {
        comma.disabled = display.textContent.includes('.');     
        display.textContent = display.textContent.substring(0, display.textContent.length - 1);
    })

    const file = document.querySelector('html');
    file.addEventListener('keydown', (e) => {
        switch (e.code) {
            case 'Numpad1': populateDisplay(1); break;
            case 'Numpad2': populateDisplay(2); break;
            case 'Numpad3': populateDisplay(3); break;
            case 'Numpad4': populateDisplay(4); break;
            case 'Numpad5': populateDisplay(5); break;
            case 'Numpad6': populateDisplay(6); break;
            case 'Numpad7': populateDisplay(7); break;
            case 'Numpad8': populateDisplay(8); break;
            case 'Numpad9': populateDisplay(9); break;
        }
    })
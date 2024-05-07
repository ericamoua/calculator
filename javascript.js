
/**
 * when you press a button, you get a string?
 * sting + string + string = stringstringstring
 * 
 * so that means, '1' + '2' + '3' = '123'
 * 
 * Number('123') -> 123
 * 
 * 123 ??? 123 = ???
 * 
 * 1. entering a string
 * 2. after clicking an operator your first string turns into a number
 * 3. you start your 2nd string
 * 4. after you press enter the 2nd string turns into a number
 * 5. now you do your logic
 * 
 * Number(??) + Number(??) = ???
 * 
 * 1stString + 2ndString = ???
 * 
 * first step in the logic
 * *creat the first string
 * --when you press your #'s you put them together
 */
{
let num1 = '';
let num2 = '';
let ops = '';
const audio = document.getElementById("dabinSound");

function updateDisplay() {
    document.getElementById('display').value = num1 + ops + num2;
    audio.play();
}

document.getElementById('btn1').addEventListener('click', () => {
    if (ops === '') {
        num1 += '1';
    } else {
        num2 += '1';
    }
    updateDisplay();
});

document.getElementById('btn2').addEventListener('click', () => {
    if (ops === '') {
        num1 += '2';
    } else {
        num2 += '2';
    }
    updateDisplay();
});
document.getElementById('btn3').addEventListener('click', () => {
    if (ops === '') {
        num1 += '3';
    } else {
        num2 += '3';
    }
    updateDisplay();
});
document.getElementById('btn4').addEventListener('click', () => {
    if (ops === '') {
        num1 += '4';
    } else {
        num2 += '4';
    }
    updateDisplay();
});
document.getElementById('btn5').addEventListener('click', () => {
    if (ops === '') {
        num1 += '5';
    } else {
        num2 += '5';
    }
    updateDisplay();
});
document.getElementById('btn6').addEventListener('click', () => {
    if (ops === '') {
        num1 += '6';
    } else {
        num2 += '6';
    }
    updateDisplay();
});
document.getElementById('btn7').addEventListener('click', () => {
    if (ops === '') {
        num1 += '7';
    } else {
        num2 += '7';
    }
    updateDisplay();
});
document.getElementById('btn8').addEventListener('click', () => {
    if (ops === '') {
        num1 += '8';
    } else {
        num2 += '8';
    }
    updateDisplay();
});
document.getElementById('btn9').addEventListener('click', () => {
    if (ops === '') {
        num1 += '9';
    } else {
        num2 += '9';
    }
    updateDisplay();
});

// Event listener for Clear Button
document.getElementById('clear').addEventListener('click', () => {
    num1 = '';
    num2 = '';
    ops = '';
    display.value = '';
});

// Event listener for Delete Button
document.getElementById('delete').addEventListener('click', () => {
    if (ops === '') {
        num1 = num1.slice(0, -1);
    } else {
        num2 = num2.slice(0, -1);
    }
    updateDisplay();
});

// Event listener for Percentage Button
document.getElementById('percentage').addEventListener('click', () => {
    if (ops === '') {
        num1 = (parseFloat(num1) / 100).toString();
    } else {
        num2 = (parseFloat(num2) / 100).toString();
    }
    updateDisplay();
});
// Event listener for Minus Button
document.getElementById('minus').addEventListener('click', () => {
    ops = '-';
    updateDisplay();
});

// Event listener for Add Button
document.getElementById('add').addEventListener('click', () => {
    ops = '+';
    updateDisplay();
});

document.getElementById('btn0').addEventListener('click', () => {
    if (ops === '') {
        num1 += '0';
    } else {
        num2 += '0';
    }
    updateDisplay();
});


document.getElementById('decimal').addEventListener('click', () => {
    if (ops === '') {
        if (!(num1.includes('.'))) {
            num1 += '.';
            console.log(num1);
        }
    } else {
       if (!(num2.includes('.'))) {
        num2 += '.';
        console.log(num2);
       }
    }
    updateDisplay();
});
//we are trying to find out if we have more than one or two decimals in one string
// Event listener for Multiply Button
document.getElementById('multiply').addEventListener('click', () => {
    ops = '*';
    updateDisplay();
});

// Event listener for Divide Button
document.getElementById('divide').addEventListener('click', () => {
    ops = '/';
    updateDisplay();
});

// Event listener for Equals Button
document.getElementById('equals').addEventListener('click', () => {
    if (num1 !== '' && num2 !== '') {
        let result;
        switch (ops) {
            case '+':
                result = parseFloat(num1) + parseFloat(num2);
                break;
            case '-':
                result = parseFloat(num1) - parseFloat(num2);
                break;
            case '*':
                result = parseFloat(num1) * parseFloat(num2);
                break;
            case '/':
                if (parseFloat(num2) !== 0) {
                    result = parseFloat(num1) / parseFloat(num2);
                } else {
                    result = 'Error: Divide by zero';
                }
                break;
            default:
                result = 'Error';
        }
        display.value = result;
        num1 = result.toString();
        num2 = '';
        ops = '';
    }
});
}



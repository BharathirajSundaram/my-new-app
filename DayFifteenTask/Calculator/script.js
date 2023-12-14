const input = document.getElementById('result');
const buttons = document.querySelectorAll('button');

function calculate(expression) {
    console.log(expression);
    console.log(typeof(expression));
    try {
        return new Function('return ' + expression)();
    } catch (error) {
        return 'Malformed Operation';
    }
}


function operation(buttonValue) {
    if (buttonValue === 'AC') {
        input.value = '';
    } else if (buttonValue === 'DEL') {
        input.value = input.value.slice(0, -1);
    } else if (buttonValue === '=') {
        input.value = calculate(input.value);
    } 
    else if (buttonValue === '%') {
        input.value = calculate(input.value/100)
    }else {
        input.value += buttonValue;
    }
}

buttons.forEach(button => {
    let buttonValue = button.innerText;
    button.addEventListener('click', function () {
        operation(buttonValue);
    });
});
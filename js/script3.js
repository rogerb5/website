// Define global variables
var start = randomNumbers();
var points = 0;

// Initialize the point counter
updateCounter();

function randomNumbers() {
    firstNumber = Math.round(Math.random() * 12);
    secondNumber = Math.round(Math.random() * 12);
    answer = firstNumber * secondNumber;
    let equation = document.querySelector('#equation').textContent
        = (firstNumber + ' x ' + secondNumber + ' = ');
}

function disappear() {
    form = document.querySelector('#myForm');
    form.reset();
    if (answer != inputNumber) {
        document.querySelector('#correct').textContent = ('');
    } else {
        document.querySelector('#incorrect').textContent = ('');
    }
}

onsubmit = function grabAnswer() {
    myForm.onsubmit = checkAnswer;
    return false;
};

function checkAnswer() {
    inputNumber = document.querySelector('#inputNumber').value;
    if (answer == inputNumber) {
        document.querySelector('#correct').textContent = ('Correct!');
        addPoints(1);
    } else if (inputNumber == '') {
        alert('Please enter value');
    } else {
        document.querySelector('#incorrect').textContent = (
            'Incorrect: ' + firstNumber + ' x ' + secondNumber + ' = ' + answer);
        subtractPoints(1);
    }
    disappear();
    randomNumbers();
    milestone();
}

/* ---------- POINTS ---------- */

// UPDATE THE COUNTER
function updateCounter() {
    document.querySelector('#counter').textContent = (points);
}

//  ADD POINTS
function addPoints(number) {
    points += number;
    updateCounter();
}

//  SUBTRACT POINTS
function subtractPoints(number) {
    if (points <= 0) { // Subtract points, but not below 0
        points = 0;
    } else {
        points -= number;
    }
    updateCounter();
}

function milestone() {
    if (points == 50) {
        alert('Amazing job! Keep up the good work');
    }
    if (points == 100) {
        alert('You are a master.');
    }
}
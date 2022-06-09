const buttons = document.querySelectorAll('.button');
const container = document.querySelector('.grid');
const sizeBtn = document.querySelector('.size');
const clearBtn = document.querySelector('.clear');
const colorBtn = document.querySelector('input');

createDivs();

buttons.forEach((button) => { button.addEventListener('click', activateButton)});
clearBtn.addEventListener('click', clearButton);
sizeBtn.addEventListener('click', sizeButton);

function createDivs(size=16) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < (size * size); i++) {
        const divElement = document.createElement('div');
        container.appendChild(divElement).classList.add('box');
    }
}

function activateButton() {
    deactivateButtons();
    this.classList.add('active-button');

    switch (this.id) {
        case 'black':
            blackButton();
            break;
        case 'rgb':
            rgbButton();
            break;
        case 'color':
            colorButton();
            break;
        case 'eraser':
            eraserButton();
            break;
    }
}

function deactivateButtons() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active-button');
    }
}

function clearButton() {
    const boxes = document.querySelectorAll('.box');
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.background='';
    }
}

function sizeButton() {
    clearButton();

    let size;
    while (!size) {
        size = parseInt(prompt('Input new size of grid. Must be an integer between 1 and 100.'));
        
        if (size > 100 || size < 0) {
            size = false;
        }
    }

    createDivs(size);
}

function blackButton() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.style.background = 'black';
        })
    })
}

function rgbButton() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.style.background = generateRGB();
        })
    })
}

function generateRGB() {
    let R = Math.floor(Math.random() * 255);
    let G = Math.floor(Math.random() * 255);
    let B = Math.floor(Math.random() * 255);
    return `rgb(${R}, ${G}, ${B})`;
}

function colorButton() {
    colorBtn.addEventListener('change', (e) => {
        newColor = e.target.value;
    })

    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.style.background = newColor;
        })
    })
}

function eraserButton() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.style.background='';
        })
    })
}
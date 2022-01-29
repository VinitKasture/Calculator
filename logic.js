let button = document.querySelectorAll('button');
let screen = document.querySelector('#screen');
let backBtn = document.querySelector('#backBtn');
let screenValue = screen.value;

for (item of button) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log(buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
        } else if (buttonText == 'C') {
            buttonText = '';
            screenValue = '';
            screen.value = screenValue;
        } else if (buttonText == '=') {
            buttonText = '';
            screen.value = eval(screenValue);
        }
        if (screen.value == 'undefined') {
            screen.value = '';
        } else {
            screenValue += buttonText;
            screen.value += buttonText;
        }
    })
}

backBtn.addEventListener('click', () => {
    screenValue = screenValue.slice(0, -1);
    screen.value = screenValue;
})

function createSquare() {
    let section = document.querySelector('section');
    let span = document.createElement('span');

    span.style.top = Math.random() * innerHeight + 'px';
    span.style.left = Math.random() * innerWidth + 'px';

    section.appendChild(span);

    setTimeout(() => {
        span.remove()
    }, 10000);
}
setInterval(createSquare, 200);
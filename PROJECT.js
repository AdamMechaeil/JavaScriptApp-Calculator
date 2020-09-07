let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
let equalPressed = false;
for (item of buttons) {
    item.addEventListener('click', (e) => {
        if (e.target.value == "C") {
            screenValue = '';
            screen.value = screenValue;

        } else if (e.target.value == "=") {
            screen.value = eval(screenValue);
            equalPressed = true;

        } else if (equalPressed == true) {
            screenValue = '';
            screen.value = screenValue;
            screenValue += e.target.value;
            screen.value = screenValue;
            equalPressed = false;
        } else {
            screenValue += e.target.value;
            screen.value = screenValue;
        }


    })
}
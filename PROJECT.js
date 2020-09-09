let screen = document.getElementById('screen');
let result = document.getElementById('result');
let resultValue = '';
buttons = document.querySelectorAll('button');
let screenValue = '';
equalPresed = false;
for (item of buttons) {
    item.addEventListener('click', (e) => {
        if (e.target.value == "C") {
            resultValue = '';
            result.value = resultValue;
            screenValue = '';
            screen.value = screenValue;

        } else if (e.target.value == "dlt") {
            screenValue = screenValue.substring(0, screenValue.length - 1);
            screen.value = screenValue;
        } else if (e.target.value == "=") {
            result.value = eval(screenValue);
            equalPresed = true;
        } else if (equalPresed && !(e.target.value == "+" || "-" || '*' || "/")) {
            resultValue = '';
            result.value = resultValue;
            screenValue = '';
            screen.value = screenValue;
            screenValue += e.target.value;
            screen.value = screenValue;
            equalPresed = false;
        } else if (equalPresed && (e.target.value == "+" || "-" || '*' || "/")) {
            screenValue += e.target.value;
            screen.value = screenValue;
        } else {
            screenValue += e.target.value;
            screen.value = screenValue;
            equalPresed = false;
        }


    });
}

// Есть 3 input.Выводить в textarea содержимое всех полей ввода через запятую.Использовать setInterval.
// Кожні N - sec перевіряти інпути(input.value) і якщо є зміни, то додавати в textarea

const inputs = Array.from(document.querySelectorAll('input'));
const textarea = document.getElementById('output');

let previousValues = getValues();

setInterval(checkInputs, 3000);

function getValues() {
    if (!inputs.length) {
        console.error('No inputs found');
        return;
    }
    return inputs.map(input => input.value);
}

function checkInputs() {
    const currentValues = getValues();

    if (JSON.stringify(currentValues) !== JSON.stringify(previousValues)) {
        updateTextarea(currentValues);
        previousValues = [...currentValues];
    }
}

function updateTextarea(values) {
    if (!textarea) {
        console.error('Textarea not found');
        return;
    }
    textarea.value = values.join(', ');
}

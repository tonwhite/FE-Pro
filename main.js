// Реалізувати калькулятор, у якому є слайдер(`input type=”range”`) та поле введення(`input type=”number”`).

// Змінюючи стан range змінюється стан поля введення`number`.І навпаки.

// Реалізувати блок - діаграму, який у пікселях відображатиме значення range.Наприклад - range вибрали число 83, висота блоку зеленого кольору буде 83 пікселі.

// Червоний блок – кількість комісії.Комісія обчислюється за такою формулою:

// (range < 20) -> 2 %
//     (20 - 50) -> 4 %
//     (50 - 75) -> 6 %
//     (75 - 100) -> 8 %

//     Наприклад, значення вибору 100, комісія буде 8 %.Результатова сума: 108. Висота червоного блоку - 8px

const rangeInput = document.getElementById('rangeInput');
const numberInput = document.getElementById('numberInput');
const valueBlock = document.getElementById('valueBlock');
const commissionBlock = document.getElementById('commissionBlock');

function calculateCommission(value) {
    if (value === 0) return 0;
    if (value < 20) return value * 0.02;
    if (value < 50) return value * 0.04;
    if (value < 75) return value * 0.06;
    return value * 0.08;
}

function updateDiagram(value, commission) {
  valueBlock.style.height = `${value}px`;
  commissionBlock.style.height = `${commission}px`;
  commissionBlock.style.bottom = `${value}px`; // Position the red bar above the green one
}

function handleInputChange(event) {
    const value = event.target.value;
    numberInput.value = value;
    rangeInput.value = value;
    const commission = calculateCommission(value);
    updateDiagram(value, commission);
}

rangeInput.addEventListener('input', handleInputChange);
numberInput.addEventListener('input', handleInputChange);






















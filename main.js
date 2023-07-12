// Створюємо 2 блоки, з кнопкою Click та лічильником counter(input[type = number]) д.При натисканні на Click – counter збільшується.При перезавантаженні сторінки counter має зберігатись.
// Створити кнопки ClearCounter - скидає усі показники
// Створити кнопку setCounter(), який запитує id блоку і встановлює значення(тип number) в counter конкретного блока.

document.addEventListener("DOMContentLoaded", function () {
    const BLOCK_1_KEY = 'block1';
    const BLOCK_2_KEY = 'block2';

    function increaseCounter(block, counter) {
        let count = localStorage.getItem(block.id);
        count = count ? parseInt(count, 10) + 1 : 1;
        counter.value = count;
        localStorage.setItem(block.id, count);
    }

    function clearCounters(blocks) {
        for (const block of blocks) {
            const counter = block.querySelector('.counter');
            if (counter) {
                counter.value = 0;
                localStorage.removeItem(block.id);
            }
        }
    }

    function setCounter(blockId, value) {
        const block = document.getElementById(blockId);
        if (block) {
            const counter = block.querySelector('.counter');
            if (counter) {
                counter.value = value;
                localStorage.setItem(blockId, value);
            }
        } else {
            alert("Invalid block id");
        }
    }

    const blocks = document.querySelectorAll('.block');
    const clearCounterBtn = document.getElementById('clear-counter-btn');
    const setCounterBtn = document.getElementById('set-counter-btn');

    for (const block of blocks) {
        const counter = block.querySelector('.counter');
        const button = block.querySelector('.click-btn');

        if (counter) {
            let count = localStorage.getItem(block.id);
            counter.value = count ? parseInt(count, 10) : 0;

            if (button) {
                button.addEventListener('click', () => increaseCounter(block, counter));
            }
        }
    }

    clearCounterBtn.addEventListener('click', () => clearCounters(blocks));

    setCounterBtn.addEventListener('click', () => {
        const blockId = prompt("Enter block id (block1 or block2)", BLOCK_1_KEY);
        const value = Number(prompt("Enter a number"));

        if (blockId !== BLOCK_1_KEY && blockId !== BLOCK_2_KEY) {
            alert("Invalid block id. Please enter either 'block1' or 'block2'.");
            return;
        }

        if (isNaN(value)) {
            alert("Invalid input. Please enter a number.");
            return;
        }

        setCounter(blockId, value);
    });
});

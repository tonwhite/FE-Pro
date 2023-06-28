// Вивести таблицю 10 × 10, заповнену числами від 1 до 100(таблиця створюється динамічно)

const table = document.createElement('table');
table.className = 'table';

for (let i = 0; i < 10; i++) {
    const tr = document.createElement('tr');

    for (let j = 0; j < 10; j++) {
        const td = document.createElement('td');

        td.textContent = i * 10 + j + 1;

        tr.appendChild(td);
    }

    table.appendChild(tr);
}

document.body.appendChild(table);



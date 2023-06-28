// Вивести таблицю 10 × 10, заповнену числами від 1 до 100(таблиця створюється динамічно)

function createCell(textContent) {
    const td = document.createElement('td');
    
    td.textContent = textContent;
    
    return td;
}

function createRow(cells) {
    const tr = document.createElement('tr');
    
    cells.forEach(cell => tr.appendChild(cell));
    
    return tr;
}

function createTable(rows) {
    const table = document.createElement('table');
    
    table.className = 'table';
    rows.forEach(row => table.appendChild(row));

    return table;
}

function customTable() {
    const rows = Array.from({ length: 10 }, (_, i) =>
        createRow(Array.from({ length: 10 }, (_, j) =>
            createCell(i * 10 + j + 1))
        )
    );
    return createTable(rows);
}

document.body.appendChild(customTable());



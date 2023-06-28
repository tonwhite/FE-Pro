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

function customTable(x, y) {
    let counter = 0;
    const rows = Array.from({ length: x }, () =>
        createRow(Array.from({ length: y }, () =>
            createCell(++counter))
        )
    );
    return createTable(rows);
}

document.body.appendChild(customTable(10,10));



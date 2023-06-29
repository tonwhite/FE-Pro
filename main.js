// // * Зверстати таблицю 5х5 з будь-яким текстовим вмістом заздалегідь заповненим.
// * При кліку на будь - яку ячейку таблиці з'являється всередині ячейки багаторядкове текстове поле(textarea) з текстом який був у ячейці (на яку натиснули) і дві кнопки під нею save, cancel
// save - зберегти в поточну клікнуту ячйку введені "змінені данні", cancel - залишить все без змін як було раніше.
//     P.S.обов'язково використати делегування події.

function createCell(textContent) {
    const td = document.createElement('td');
    td.setAttribute('role', 'cell');
    td.textContent = textContent;
    return td;
}

function createRow(cells) {
    const tr = document.createElement('tr');
    tr.setAttribute('role', 'row');
    cells.forEach(cell => tr.appendChild(cell));
    return tr;
}

function createTable(rows) {
    const table = document.createElement('table');
    table.setAttribute('role', 'table');
    table.className = 'table';
    rows.forEach(row => table.appendChild(row));
    return table;
}

function clearCell(cell) {
    while (cell.firstChild) {
        cell.firstChild.remove();
    }
    cell.textContent = cell.dataset.oldValue;
}

function generateTable() {
    const rows = Array.from({ length: 5 }, (_, i) =>
        createRow(Array.from({ length: 5 }, (_, j) =>
            createCell(`Cell ${i * 5 + j + 1}`))
        )
    );
    return createTable(rows);
}

const table = generateTable();
document.body.appendChild(table);

table.addEventListener('click', function (event) {
    const target = event.target;
    const isCell = target.tagName === 'TD';
    const isButton = ['save-btn', 'cancel-btn'].includes(target.className);
    const existingTextarea = document.querySelector('textarea');

    if (existingTextarea && !isButton) {
        if (isCell && existingTextarea.parentElement) {
            clearCell(existingTextarea.parentElement);
        }
        return;
    }

    if (isCell) {
        const textarea = document.createElement('textarea');
        textarea.setAttribute('aria-label', 'Edit cell content');
        textarea.value = target.textContent;
        target.dataset.oldValue = target.textContent;

        const buttons = ['Save', 'Cancel'].map(text => {
            const button = document.createElement('button');
            button.setAttribute('aria-label', `${text} edit`);
            button.textContent = text;
            button.className = `${text.toLowerCase()}-btn`;
            return button;
        });

        target.textContent = '';
        target.append(textarea, ...buttons);
    }

    if (isButton && target.parentElement) {
        const cell = target.parentElement;
        const textarea = cell.querySelector('textarea');
        const newValue = target.className === 'save-btn' ? textarea?.value : cell?.dataset.oldValue;

        clearCell(cell);
        if (newValue) cell.textContent = newValue;
    }
});

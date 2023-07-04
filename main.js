// // * Зверстати таблицю 5х5 з будь-яким текстовим вмістом заздалегідь заповненим.
// * При кліку на будь - яку ячейку таблиці з'являється всередині ячейки багаторядкове текстове поле(textarea) з текстом який був у ячейці (на яку натиснули) і дві кнопки під нею save, cancel
// save - зберегти в поточну клікнуту ячйку введені "змінені данні", cancel - залишить все без змін як було раніше.
//     P.S.обов'язково використати делегування події.

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

function clearCell(cell) {
    cell.innerHTML = cell.dataset.oldValue;
}

function createEditor(cell) {
    cell.dataset.oldValue = cell.textContent;

    const textarea = document.createElement('textarea');
    textarea.value = cell.textContent;

    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save';
    saveBtn.className = 'save-btn';

    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.className = 'cancel-btn';

    cell.innerHTML = '';
    cell.append(textarea, saveBtn, cancelBtn);
}

const table = createTable(
    Array(5).fill(0).map((_, i) =>
        createRow(
            Array(5).fill(0).map((_, j) => createCell(`Cell ${i * 5 + j + 1}`))
        )
    )
);
document.body.appendChild(table);

table.addEventListener('click', function (event) {
    const target = event.target;
    const isCell = target.tagName === 'TD';
    const isSaveBtn = target.classList.contains('save-btn');
    const isCancelBtn = target.classList.contains('cancel-btn');

    if (isCell) {
        createEditor(target);
    } else if (isSaveBtn) {
        const textarea = target.parentElement.querySelector('textarea');
        target.parentElement.dataset.oldValue = textarea.value;
        clearCell(target.parentElement);
    } else if (isCancelBtn) {
        clearCell(target.parentElement);
    }
});

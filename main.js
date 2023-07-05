// * Зверстати таблицю 5х5 з будь-яким текстовим вмістом заздалегідь заповненим.
// * При кліку на будь - яку ячейку таблиці з'являється всередині ячейки багаторядкове текстове поле(textarea) з текстом який був у ячейці (на яку натиснули) і дві кнопки під нею save, cancel
// save - зберегти в поточну клікнуту ячйку введені "змінені данні", cancel - залишить все без змін як було раніше.
//     P.S.обов'язково використати делегування події.

// Функція створення елементу
function createElement(type, properties = {}) {
    const element = document.createElement(type);
    Object.entries(properties).forEach(([key, value]) => {
        if (key === 'dataset') {
            Object.entries(value).forEach(([dataKey, dataValue]) => {
                element.dataset[dataKey] = dataValue;
            });
        } else {
            element[key] = value;
        }
    });
    return element;
}

// Функції для створенням таблиці
function createCell(textContent) {
    return createElement('td', { textContent, dataset: { type: 'cell' } });
}

function createRow(cells) {
    const tr = createElement('tr');
    cells.forEach(cell => tr.appendChild(cell));
    return tr;
}

function createTable(rows) {
    const table = createElement('table', { className: 'table' });
    rows.forEach(row => table.appendChild(row));
    return table;
}

const TABLE_SIZE = 5;

// Створення таблиці з заданим розміром
const table = createTable(
    Array.from({ length: TABLE_SIZE }, (_, i) =>
        createRow(
            Array.from({ length: TABLE_SIZE }, (_, j) =>
                createCell(`Cell ${i * TABLE_SIZE + j + 1}`)
            )
        )
    )
);
document.body.appendChild(table);

// Функції для редагуванням комірки
function handleSave(oldValue, cell, textarea) {
    const saveButton = document.querySelector('.save-btn');
    const cancelButton = document.querySelector('.cancel-btn');

    cell.innerText = textarea.value; // Використання internalText для запобігання потенційним XSS-атакам
    removeEventListeners(saveButton, cancelButton);
    cell.dataset.type = 'cell';
}

function handleCancel(oldValue, cell) {
    const saveButton = document.querySelector('.save-btn');
    const cancelButton = document.querySelector('.cancel-btn');

    cell.innerText = oldValue; // Використання internalText для запобігання потенційним XSS-атакам
    removeEventListeners(saveButton, cancelButton);
    cell.dataset.type = 'cell';
}

function removeEventListeners(saveButton, cancelButton) {
    // Видалиення раніше доданих event listeners
    saveButton.removeEventListener('click', saveButton.listener);
    cancelButton.removeEventListener('click', cancelButton.listener);
}

function createEditor(cell) {
    const oldValue = cell.textContent;
    const textarea = createElement('textarea', { value: oldValue, maxLength: 100 });
    const saveButton = createElement('button', { textContent: 'Save', className: 'save-btn' });
    const cancelButton = createElement('button', { textContent: 'Cancel', className: 'cancel-btn' });

    // Додавання слухачів за допомогою обробників збереження та скасування
    saveButton.listener = () => handleSave(oldValue, cell, textarea);
    cancelButton.listener = () => handleCancel(oldValue, cell);

    saveButton.addEventListener('click', saveButton.listener);
    cancelButton.addEventListener('click', cancelButton.listener);

    // Очишення комірки і додавання нових елементів редактора
    cell.innerHTML = '';
    cell.appendChild(textarea);
    cell.appendChild(saveButton);
    cell.appendChild(cancelButton);
    cell.dataset.type = 'editor';
    textarea.focus();
}

// Делегування подій
table.addEventListener('click', function (event) {
    const cell = event.target.closest('[data-type="cell"]');
    if (cell) {
        createEditor(cell);
    }
});

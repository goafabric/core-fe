export function addCellListener() {
    document.getElementById('table').addEventListener('dblclick', function(event) {
        const target = event.target;
        if (target.tagName === 'TD') {
            enableEdit(target);
        }
    });
}

function enableEdit(cell) {
    var inputElement = document.createElement('input');
    inputElement.value = cell.innerText.trim();
    cell.innerHTML = '';
    cell.appendChild(inputElement);
    inputElement.focus();
    inputElement.addEventListener('blur', () => saveEdit(cell, inputElement.value));
    inputElement.addEventListener('keyup', event => event.key === 'Enter' && saveEdit(cell, inputElement.value));
}

function saveEdit(cell, newValue) {
    cell.innerHTML = newValue;
    var cellValues = Array.from(cell.parentNode.cells).map(cell => cell.innerText.trim());
    console.log('Cell values of the current row:', cellValues);
}
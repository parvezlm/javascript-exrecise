const url = 'https://jsonplaceholder.typicode.com/todos';


async function fetchTodos() {
    try {
        const response = await fetch(url);
        const todos = await response.json();
        createDropdown(todos.slice(0, 15));
    } catch (error) {
        console.error('Error fetching todos:', error);
    }
}

function createDropdown(todos) {
    const dropdownWrapper = document.getElementById('dropdown_wraper');
    try {
        const dropdownSelect = document.createElement('select');
        todos.forEach(todo => {
            const dropdownOption = document.createElement('option');
            dropdownOption.textContent = todo.title;
            dropdownSelect.appendChild(dropdownOption);
        });
        dropdownWrapper.appendChild(dropdownSelect);
    } catch (error) {
        dropdownWrapper.textContent = 'Dropdown is not available!';
    }
}

fetchTodos();

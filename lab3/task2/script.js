const todoForm = document.getElementById('todoForm');
const taskInput = document.getElementById('taskInput');
const todoList = document.getElementById('todoList');

function createDeleteIcon() {
  const img = document.createElement('img');
  img.src = 'https://cdn-icons-png.flaticon.com/512/1214/1214428.png';
  img.alt = 'Delete';
  return img;
}

function createTodoItem(taskTextValue) {
  const listItem = document.createElement('li');
  listItem.className = 'todo-item';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'checkbox';

  const taskText = document.createElement('span');
  taskText.className = 'task-text';
  taskText.textContent = taskTextValue;

  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete-button';

  const deleteIcon = createDeleteIcon();
  deleteButton.appendChild(deleteIcon);

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      taskText.classList.add('done');
    } else {
      taskText.classList.remove('done');
    }
  });

  deleteButton.addEventListener('click', function () {
    todoList.removeChild(listItem);
  });

  listItem.appendChild(checkbox);
  listItem.appendChild(taskText);
  listItem.appendChild(deleteButton);

  return listItem;
}

function handleFormSubmit(event) {
  event.preventDefault();

  const trimmedValue = taskInput.value.trim();
  if (!trimmedValue) return;

  const newItem = createTodoItem(trimmedValue);
  todoList.appendChild(newItem);

  taskInput.value = '';
}

todoForm.addEventListener('submit', handleFormSubmit);

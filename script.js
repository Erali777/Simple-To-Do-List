const inputBox = document.querySelector('.js-inputBox');
const todoList = document.querySelector('.js-todo-list');

function addTask() {
  if (inputBox.value === '') {
    alert('You have to type first your task!');
  } else {
    const li = document.createElement('li');
    li.innerHTML = inputBox.value;
    todoList.appendChild(li);

    const xBtn = document.createElement('span');
    xBtn.innerHTML = '\u00d7';
    li.appendChild(xBtn);
  }
  inputBox.value = '';
  saveTasks();
}

todoList.addEventListener('click', function (e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
    saveTasks();
  } else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.remove();
    saveTasks();
  }
}, false);

function saveTasks() {
  localStorage.setItem('Tasks', todoList.innerHTML);
};

function showTasks() {
  todoList.innerHTML = localStorage.getItem('Tasks');
}
showTasks();
  



const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
//const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.getElementById('todo-list');

function deleteToDo(event) {
  console.log(event.target);
  console.dir(event.target.parentElement.innerText);
}

function paintToDo(newTodo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerText = newTodo;
  const button = document.createElement('button');
  button.innerText = '❌';
  button.addEventListener('click', deleteToDo);
  li.appendChild(span);
  li.append(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = '';
  paintToDo(newTodo);
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const todoList = document.querySelector("#todo-list");
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");

const TODOS_KEY = "todos";

let toDos = [];

const saveToDos = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};

const paintTodo = newTodo => {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const content = document.createElement("span");
  content.innerText = newTodo.text;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "✕";
  deleteBtn.addEventListener("click", handleDeleteTodo);

  li.appendChild(content);
  li.appendChild(deleteBtn);

  todoList.appendChild(li);
};

const handleDeleteTodo = event => {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter(todo => todo.id !== parseInt(li.id));
  saveToDos();
};

const handleToDoSubmit = event => {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveToDos();
};

todoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos !== null) {
  const parsedToDos = JSON.parse(savedTodos);
  toDos = parsedToDos;
  parsedToDos.forEach(newTodo => paintTodo(newTodo));
}

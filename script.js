const todoList = document.querySelector('.todo-list');
const todoInput = document.querySelector('.todo-input');
const addBtn = document.querySelector('.add-btn');

// function to add a new item to the list
function addItem() {
  // create a new list item
  const newItem = document.createElement('li');
  newItem.innerHTML = `
    <span class="todo-item">${todoInput.value}</span>
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>
  `;
  // add the new item to the list
  todoList.appendChild(newItem);
  // clear the input field
  todoInput.value = '';
}

// add event listener for add button click
addBtn.addEventListener('click', addItem);

// add event listener for enter key press
todoInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    addItem();
  }
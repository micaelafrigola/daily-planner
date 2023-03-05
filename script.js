// Initialize an empty array to store the items
let items = [];

// Function to add an item to the list
function addItem() {
  const textInput = document.getElementById('textInput');
  const newItem = textInput.value.trim(); // Get the value of the text input, trim any whitespace
  if (newItem) { // Only add non-empty items
    items.push(newItem); // Add the new item to the array
    textInput.value = ''; // Clear the text input
    renderList(); // Re-render the list
  }
}

// Function to delete an item from the list
function deleteItem(index) {
  items.splice(index, 1); // Remove the item from the array
  renderList(); // Re-render the list
}

// Function to edit an item in the list
function editItem(index) {
  const newItem = prompt('Enter the new item:', items[index]); // Prompt the user for the new item text
  if (newItem !== null) { // Only update if user clicked OK
    items[index] = newItem; // Update the item in the array
    renderList(); // Re-render the list
  }
}

// Function to render the list
function renderList() {
  const list = document.getElementById('list');
  list.innerHTML = ''; // Clear the list
  items.forEach((item, index) => {
    const li = document.createElement('li'); // Create a new list item element
    const text = document.createTextNode(item); // Create a text node for the item text
    li.appendChild(text); // Add the text node to the list item element
    const editButton = document.createElement('button'); // Create a new edit button element
    editButton.innerHTML = 'Edit'; // Set the button text
    editButton.onclick = () => editItem(index); // Add the editItem function to the button click event
    li.appendChild(editButton); // Add the edit button to the list item element
    const deleteButton = document.createElement('button'); // Create a new delete button element
    deleteButton.innerHTML = 'Delete'; // Set the button text
    deleteButton.onclick = () => deleteItem(index); // Add the deleteItem function to the button click event
    li.appendChild(deleteButton); // Add the delete button to the list item element
    list.appendChild(li); // Add the list item element to the list
  });
}

// Call renderList initially to display any existing items
renderList();

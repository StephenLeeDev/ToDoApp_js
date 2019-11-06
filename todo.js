const toDoForm = document.querySelector(".js-toDoForm"), //Concatenate the constant toDoForm to the element .js-toDoForm.
  toDoInput = toDoForm.querySelector("input"), //Concatenate the constant toDoInput to the element input.
  toDoList = document.querySelector(".js-toDoList"); //Concatenate the constant toDoList to the element .js-toDoList.

const TODOS_LS = "toDos";

let toDos = []; //Array to store to do list.

//Function to delete to do list.
function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos(); //Store to do list.
}

//Function to store to do list at localStorage.
function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

//Function to output new item.
function paintToDo(text) {
  const li = document.createElement("li"); //Create item in list for to do item.
  const delBtn = document.createElement("button"); //Create button for delete item.
  const span = document.createElement("span"); //Create text area for output item's contents.
  const newId = toDos.length + 1; //Index of where to store new item.
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo); //Add delete function to delete button.
  span.innerText = text;
  li.appendChild(delBtn); //Add new item's delete button to list.
  li.appendChild(span); //Add new item's contents to list.
  li.id = newId; //Set index of where to store new item.
  toDoList.appendChild(li); //Add new item to list.
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj); //Add new item to list for store to localStorage.
  saveToDos(); //Store new list to localStorage.
}

//Function to handle store to do item.
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value; //Get to do contents.
  paintToDo(currentValue); //Output new item's contents.
  toDoInput.value = ""; //Reset input field.
}

//Function to get to do list from localStorage.
function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  //If a list exists, output it.
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();

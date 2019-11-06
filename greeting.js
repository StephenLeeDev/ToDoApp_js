const form = document.querySelector(".js-form"), //Concatenate the constant form to the element .js-form.
  input = form.querySelector("input"), //Concatenate the constant input to the element input.
  greeting = document.querySelector(".js-greetings"); //Concatenate the constant greeting to the element .js-greeting.

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

//Function to store name at localstorage.
function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

//Function to handle save name, when clicked submit button.
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value; //Get name.
  paintGreeting(currentValue); //Greeting output.
  saveName(currentValue); //Store name.
}

//Function to ask name.
function askForName() {
  form.classList.add(SHOWING_CN); //Add name field.
  form.addEventListener("submit", handleSubmit); //Add name input button.
}

//Function to greeting output.
function paintGreeting(text) {
  form.classList.remove(SHOWING_CN); //Remove name field.
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`; //Greeting.
}

//Function to load name.
function loadName() {
  const currentUser = localStorage.getItem(USER_LS); //Get name.
  //If the name does not exist.
  if (currentUser === null) {
    askForName();
  }
  //Else the name exist.
  else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();

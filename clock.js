const clockContainer = document.querySelector(".js-clock"), //Concatenate the constant clockContainer to the element .js-clock.
  clockTitle = clockContainer.querySelector("h1"); //Concatenate the constant clockTitle to the element h1(h1 is a watch).

//Function to get the current time.
function getTime() {
  const date = new Date(); //Create date object.
  const minutes = date.getMinutes(); //Get current minutes.
  const hours = date.getHours(); //Get current hours.
  const seconds = date.getSeconds(); //Get current seconds.
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`; //Enter the time on watch.
}

//Function to enter the time on the watch every second.
function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();

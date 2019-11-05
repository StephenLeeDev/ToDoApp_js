const body = document.querySelector("body"); //Concatenate the constant body to the element body.

const IMG_NUMBER = 3; //Number of images.

//Draw background function.
function paintImage(imgNumber) {
  const image = new Image(); //Create image object.
  image.src = `images/${imgNumber + 1}.jpg`; //Select an image and set it on the object.
  image.classList.add("bgImage"); //Set area of ​​image as background.
  body.prepend(image); //Add image object to body(body is element).
}

//Function to get random numbers from 1 to 3.
function getRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

//function to get random numbers and draw background.
function init() {
  const randomNumber = getRandom();
  paintImage(randomNumber);
}

init();

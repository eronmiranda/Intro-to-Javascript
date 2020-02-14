//  Selects the form.
let memeForm = document.querySelector("form");

//  Selects the display p tags for of meme's top and bottom text.
let memeTopText = document.querySelector(".meme-display .top-text");
let memeBottomText = document.querySelector(".meme-display .bottom-text");

//  Selects display image for the meme.
let memeImgDisplay = document.querySelector(".content .meme-display img");

// selects error box for displaying errors.
let errorDisplay = document.querySelector(".error");

//  Stores default attributes of the image.
let defaultImgSrc = memeImgDisplay.getAttribute("src");
let defaultImgAlt = memeImgDisplay.getAttribute("alt");

// This function runs if Submit button was clicked.
function SubmitHandler(event) {
  //  Prevents the default of the event.
  event.preventDefault();
  //  Resets current error messages.
  errorDisplay.innerHTML = "";

  let form = event.target;
  //  Gets the value of the selected meme image from the dropdown list.
  let memeChoice = form.memeImage.options[form.memeImage.selectedIndex].value;
  //  Gets the value from input text box for top and bottom text.`
  let inputTopText = form.elements.memeTopText;
  let inputBottomText = form.elements.memeBottomText;

  //  Displays image if all input from the form are valid.
  if (
    isValid(memeChoice) &&
    isValid(inputTopText.value) &&
    isValid(inputBottomText.value)
  ) {
    //  Removes dashes for the new alt value of the image.
    let newAltValue = memeChoice.toString().replace(/-/g, " ");
    //  Removes error message
    errorDisplay.innerHTML = "";
    // Adds the location and file type of the image.
    memeChoice = `img/${memeChoice}.png`;

    //  Sets attribute of the meme image's src and alt attribute
    //  Displays selected meme image.
    MemeImgSetAttributes(memeChoice, newAltValue);

    //  Displays top and bottom text
    memeTopText.innerHTML = inputTopText.value;
    memeBottomText.innerHTML = inputBottomText.value;
  } else {
    //  Checks if the selected image is valid
    if (!isValid(memeChoice)) {
      errorDisplay.innerHTML += "<p>Please select a meme image.</p>";
      form.memeImage.focus();
    }
    // Checks if input text boxes have valid value.
    if (!isValid(inputTopText.value)) {
      errorDisplay.innerHTML +=
        "<p>Please enter top text for the meme image.</p>";
      inputTopText.focus();
    }
    if (!isValid(inputBottomText.value)) {
      errorDisplay.innerHTML +=
        "<p>Please enter bottom text for the meme image.</p>";
      inputBottomText.focus();
    }
  }
}

// This function runs if Reset button was clicked.
function ResetHandler() {
  //resets top and bottom text to empty string.
  memeTopText.innerHTML = "";
  memeBottomText.innerHTML = "";

  //resets error message to empty string.
  errorDisplay.innerHTML = "";

  //resets to default attributes of the meme image.
  MemeImgSetAttributes(defaultImgSrc, defaultImgAlt);
}

// This function runs if dropdown list choice have change.
function SelectHandler(event) {
  let memeChoice = event.target.options[event.target.selectedIndex].value;

  if (!isValid(memeChoice)) {
    errorDisplay.innerHTML += "<p>Please select a meme image.</p>";
  } else {
    let newAltValue = memeChoice.toString().replace(/-/g, " ");
    errorDisplay.innerHTML = "";

    memeChoice = `img/${memeChoice}.png`;

    MemeImgSetAttributes(memeChoice, newAltValue);
  }
}

//  Checks if the text are not empty or blank.
function isValid(text) {
  return text !== "";
}

function MemeImgSetAttributes(newImgSrc, newImgAlt) {
  memeImgDisplay.setAttribute("src", newImgSrc);
  memeImgDisplay.setAttribute("alt", newImgAlt);
}

//  Adds event listener of the form.
memeForm.addEventListener("submit", SubmitHandler);
memeForm.addEventListener("reset", ResetHandler);
memeForm.elements.memeImage.addEventListener("change", SelectHandler);

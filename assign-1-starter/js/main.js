//  Selects the form.
let memeForm = document.querySelector("form");

//  Selects the dropdown of the form.
let selectMeme = memeForm.elements.memeImage;

//  Selects the display p tags for of meme's top and bottom text.
let memeTopText = document.querySelector(".meme-display .top-text");
let memeBottomText = document.querySelector(".meme-display .bottom-text");

//  Selects display image for the meme.
let memeDisplay = document.querySelector(".content .meme-display img");

//  Stores default attributes of the image.
let defaultImgSrc = memeDisplay.getAttribute("src");
let defaultImgAlt = memeDisplay.getAttribute("alt");

let errorMsg = document.querySelector(".error");

// This function runs if Submit button was clicked.
function SubmitHandler(event) {
  //  Prevents the default of the event.
  event.preventDefault();
  
  //  Gets the value of the selected meme image from the dropdown list.
  let memeChoice = selectMeme.options[selectMeme.selectedIndex].value;
  
  //  Gets the value from input text box for top and bottom text.`
  let inputTopText = event.target.elements.memeTopText;
  let inputBottomText = event.target.elements.memeBottomText;

  //  Checks if the selected image is default. 
  if (memeChoice === "") {
    errorMsg.innerHTML += "<p>Please select a meme image.</p>";
    selectMeme.focus();
  } 
  //  Checks if the input text box are empty.
  else if (inputTopText.value === "") {
    errorMsg.innerHTML += "<p>Please enter top text for the meme image.</p>";
    inputTopText.focus();
  }
  else if (inputBottomText.value === "")
  {
    errorMsg.innerHTML += "<p>Please enter bottom text for the meme image.</p>";
    inputBottomText.focus();
  }
  //  Displays image if all input from the form are valid.
  else {
    //  Removes dashes for the new alt value of the image.
    let newAltValue = memeChoice.toString().replace(/-/g, " ");
    
    //  Removes error message
    errorMsg.innerHTML = "";

    // Adds the location and file type of the image.
    memeChoice = `img/${memeChoice}.png`;
    
    //  Sets attribute of the meme image's src and alt attribute
    //  Displays selected meme image.
    memeDisplay.setAttribute("src", memeChoice);
    memeDisplay.setAttribute("alt", newAltValue);

    //  Displays top and bottom text
    memeTopText.innerHTML = inputTopText.value;
    memeBottomText.innerHTML = inputBottomText.value;
  }
}

// This function runs if Reset button was clicked.
function ResetHandler() {
  //resets top and bottom text to empty string.
  memeTopText.innerHTML = "";
  memeBottomText.innerHTML = "";

  //resets error message to empty string.
  errorMsg.innerHTML = "";

  //resets to default attributes of the meme image.
  memeDisplay.setAttribute("src", defaultImgSrc);
  memeDisplay.setAttribute("alt", defaultImgAlt);
}

// This function runs if dropdown list choice have change.
function SelectHandler() {
  let memeChoice = selectMeme.options[selectMeme.selectedIndex].value;
  console.log(memeChoice);
  if (memeChoice === "") {
    errorMsg.innerHTML += "<p>Please select a meme image.</p>";
  } else {
    let newAltValue = memeChoice.toString().replace(/-/g, " ");
    errorMsg.innerHTML = "";
    memeChoice = `img/${memeChoice}.png`;
    memeDisplay.setAttribute("src", memeChoice);
    memeDisplay.setAttribute("alt", newAltValue);
  }
}

//  Adds event listener of the form.
memeForm.addEventListener("submit", SubmitHandler);
memeForm.addEventListener("reset", ResetHandler);
selectMeme.addEventListener("change", SelectHandler);

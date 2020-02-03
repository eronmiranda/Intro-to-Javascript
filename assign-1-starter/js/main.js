// Enter your JavaScript for the solution here...
let memeForm = document.querySelector("form");
let selectMeme = memeForm.elements.memeImage;

let memeTopText = document.querySelector(".meme-display .top-text");
let memeBottomText = document.querySelector(".meme-display .bottom-text");

let memeDisplay = document.querySelector(".content .meme-display img");
let defaultImgSrc = memeDisplay.getAttribute("src");
let defaultImgAlt = memeDisplay.getAttribute("alt");

let errorMsg = document.querySelector(".error");

function SubmitHandler(event) {
  event.preventDefault();

  let memeChoice = selectMeme.options[selectMeme.selectedIndex].value;
  let inputTopText = event.target.elements.memeTopText.value;
  let inputBottomText = event.target.elements.memeBottomText.value;

  if (memeChoice === "") {
    prompt("error");
  } else {
    let newAltValue = memeChoice.toString().replace(/-/g, " ");

    memeChoice = `img/${memeChoice}.png`;

    memeDisplay.setAttribute("src", memeChoice);
    memeDisplay.setAttribute("alt", newAltValue);

    memeTopText.innerHTML = inputTopText;
    memeBottomText.innerHTML = inputBottomText;
  }
}

function ResetHandler() {
  memeTopText.innerHTML = "";
  memeBottomText.innerHTML = "";
  errorMsg = "";
  memeDisplay.setAttribute("src", defaultImgSrc);
  memeDisplay.setAttribute("alt", defaultImgAlt);
}

function SelectHandler(event) {
  let memeChoice = selectMeme.options[selectMeme.selectedIndex].value;
  console.log(memeChoice);
  if (memeChoice === "") {
    errorMsg.innerHTML = "Please select a meme image.";
  } else {
    let newAltValue = memeChoice.toString().replace(/-/g, " ");
    memeChoice = `img/${memeChoice}.png`;

    memeDisplay.setAttribute("src", memeChoice);
    memeDisplay.setAttribute("alt", newAltValue);
  }
}

memeForm.addEventListener("submit", SubmitHandler);
memeForm.addEventListener("reset", ResetHandler);
selectMeme.addEventListener("change", SelectHandler);

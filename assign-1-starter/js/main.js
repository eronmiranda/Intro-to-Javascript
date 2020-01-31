// Enter your JavaScript for the solution here...
let memeForm = document.querySelector("form");

let memeTopText = document.querySelector(".meme-display .top-text");
let memeBottomText = document.querySelector(".meme-display .bottom-text");

let memeDisplay = document.querySelector(".content .meme-display img");
let defaultImgSrc = memeDisplay.getAttribute("src");

function SubmitHandler(event){
    event.preventDefault();
    let selectMeme = event.target.elements.memeImage;
    let memeChoice = selectMeme.options[selectMeme.selectedIndex].value;
    let inputTopText = event.target.elements.memeTopText.value;
    let inputBottomText = event.target.elements.memeBottomText.value;

    if(memeChoice === "")
    {
        prompt("error");
    }
    else
    {
        memeChoice = `img/${memeChoice}.png`;
        memeDisplay.setAttribute("src",memeChoice)
        memeTopText.innerHTML = inputTopText;
        memeBottomText.innerHTML = inputBottomText;
    }
}

function ResetHandler(event){
    memeTopText.innerHTML = "";
    memeBottomText.innerHTML = "";
    memeDisplay.setAttribute("src", defaultImgSrc);
}


memeForm.addEventListener("submit", SubmitHandler);
memeForm.addEventListener("reset", ResetHandler);




//for reset
//variable.value = '';
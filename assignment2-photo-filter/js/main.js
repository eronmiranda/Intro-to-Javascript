// Enter your JavaScript for the solution here...
let filterBar = document.querySelector(".frm-control");
let resetBtn = document.querySelector(".reset");
let thumbDisplay = document.querySelectorAll(".gallery .thumb-display");

filterBar.addEventListener("input", filterHandler);

function filterHandler(evt) {
  let tagsList = document.querySelectorAll(".thumb-display p.tags");
  let input = evt.target.value.toLowerCase();

  if (input === "") {
    resetBtn.classList.add("hidden");
  } else {
    resetBtn.classList.remove("hidden");
  }
  for (let index = 0; index < tagsList.length; index++) {
    if (tagsList[index].innerHTML.match(input)) {
      thumbDisplay[index].classList.remove("hidden");
    } else {
      thumbDisplay[index].classList.add("hidden");
    }
  }
}

resetBtn.addEventListener("click", function(evt) {
  evt.target.classList.add("hidden");
  filterBar.value = "";
  thumbDisplay.forEach(element => element.classList.remove("hidden"));
});

filterBar.addEventListener("keypress", function(evt) {
  if (evt.keyCode === 13) {
    evt.preventDefault();
  }
});

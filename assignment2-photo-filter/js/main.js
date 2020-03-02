// Enter your JavaScript for the solution here...
let filterBar = document.querySelector(".frm-control");
let resetBtn = document.querySelector(".reset");

let tagsArray = Array.from(document.querySelectorAll(".thumb-display p.tags"));

function filterHandler(evt) {
  let input = evt.target.value.toLowerCase();
  let hideTags = [];

  let showTags = tagsArray.filter(tag => {
    if (tag.innerHTML.toLowerCase().includes(input)) {
      return true;
    }
    hideTags.push(tag);
  });

  showTags.map(tag => {
    tag.parentNode.classList.remove("hidden");
  });
  hideTags.map(tag => {
    tag.parentNode.classList.add("hidden");
  });

  if (input === "") {
    resetBtn.classList.add("hidden");
  } else {
    resetBtn.classList.remove("hidden");
  }
}

resetBtn.addEventListener("click", function(evt) {
  evt.target.classList.add("hidden");
  filterBar.value = "";
  tagsArray.forEach(element => element.parentNode.classList.remove("hidden"));
});

filterBar.addEventListener("keypress", function(evt) {
  if (evt.keyCode === 13) {
    evt.preventDefault();
  }
});

filterBar.addEventListener("input", filterHandler);

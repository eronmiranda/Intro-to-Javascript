// Enter JavaScript for the exercise here...
document
  .querySelector("[name=toggle]")
  .addEventListener("change", function(evt) {
    let checks = document.querySelectorAll("[name=message]");

    for (let index = 0; index < checks.length; index++) {
      if (evt.target.checked) {
        checks[index].checked = true;
      } else {
        checks[index].checked = false;
      }
    }
  });

function SearchHandler(evt) {
  var input = document.querySelector(".search").value.toLowerCase();
  let list = document.querySelectorAll("tr td:last-child");
  let row = document.querySelectorAll("tbody tr");

  for (let index = 0; index < list.length; index++) {
    let temp = list[index].innerHTML.toLowerCase();
    if (temp.match(input)) {
      row[index].classList.add("found");
    } else {
      row[index].classList.remove("found");
    }
  }
}

document.querySelector(".search-btn").addEventListener("click", SearchHandler);

document.querySelector(".search").addEventListener("input", SearchHandler);

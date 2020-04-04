// Enter JavaScript for the exercise here...
let transactionsBody = document.querySelector(".transactions tbody");

let errorDiv = document.querySelector(".error");

let totalDebits = 0;
let totalCredits = 0;

let debitSpan = document.querySelector(".total.debits");
let creditSpan = document.querySelector(".total.credits");

document
  .querySelector(".frm-transactions")
  .addEventListener("submit", function(event) {
    let tableRow,
      descriptionDataDiv,
      typeDataDiv,
      amountDataDiv,
      toolsDataDiv,
      descriptionText,
      description,
      typeSelect,
      type,
      amountText,
      amount,
      trashIcon;

    // Resets error messages using DOM element.
    while (errorDiv.firstChild) {
      errorDiv.removeChild(errorDiv.firstChild);
    }

    // Gets all the input values in the form.
    descriptionText = event.target.elements.description.value;
    typeSelect = event.target.elements.type;
    amountText = parseFloat(event.target.elements.currency.value);

    // Creates elements needed for the transactions table.
    tableRow = document.createElement("tr");
    descriptionDataDiv = document.createElement("td");
    typeDataDiv = document.createElement("td");
    amountDataDiv = document.createElement("td");
    toolsDataDiv = document.createElement("td");
    tableData = document.createElement("td");
    trashIcon = document.createElement("i");

    // Convert input string values to text node.
    description = document.createTextNode(descriptionText);
    amount = document.createTextNode(`$${amountText.toFixed(2)}`);
    type = document.createTextNode(typeSelect.value);

    // Add classes needed for each element.
    amountDataDiv.classList.add("amount");
    // Sets up the trash icon
    toolsDataDiv.classList.add("tools");
    trashIcon.classList.add("delete");
    trashIcon.classList.add("fa");
    trashIcon.classList.add("fa-trash-o");
    toolsDataDiv.appendChild(trashIcon);

    // These boolean variables are used to check if inputs are valid.
    let validDescription = descriptionText !== "",
      validType = typeSelect.selectedIndex !== 0,
      validAmount = amountText > 0;

    // Checks description input if empty
    if (!validDescription) {
      addErrorMsg("Please enter a description");
    } else {
      descriptionDataDiv.appendChild(description);
    }

    // Checks selected transaction type
    switch (typeSelect.selectedIndex) {
      case 0:
        addErrorMsg("Please choose a type of transaction");
        break;
      case 1:
        typeDataDiv.appendChild(type);
        tableRow.classList.add("debit");
        break;
      case 2:
        typeDataDiv.appendChild(type);
        tableRow.classList.add("credit");
        break;
    }

    // Checks if amount paid is zero or negative value.
    if (!validAmount) {
      addErrorMsg("Please enter an amount");
    } else {
      amountDataDiv.appendChild(amount);
    }

    if (validDescription && validType && validAmount) {
      if (tableRow.classList.contains("debit")) {
        totalDebits += parseFloat(amountText);
        debitSpan.childNodes[0].textContent = `$${totalDebits.toFixed(2)}`;
      } else {
        totalCredits += parseFloat(amountText);
        creditSpan.childNodes[0].textContent = `$${totalCredits.toFixed(2)}`;
      }
      tableRow.appendChild(descriptionDataDiv);
      tableRow.appendChild(typeDataDiv);
      tableRow.appendChild(amountDataDiv);
      tableRow.appendChild(toolsDataDiv);

      transactionsBody.appendChild(tableRow);

      event.target.reset();
    }

    event.preventDefault();
  });

function addErrorMsg(message) {
  let li = document.createElement("li");
  message = document.createTextNode(message);

  li.appendChild(message);
  errorDiv.appendChild(li);
}

// Trash icon listener.
transactionsBody.addEventListener("click", function(event) {
  if (event.target.classList.contains("delete")) {
    let amount = parseFloat(
      event.target.parentNode.previousSibling.childNodes[0].textContent.replace(
        /\$/g,
        ""
      )
    );
    if (event.target.parentNode.parentNode.classList.contains("debit")) {
      totalDebits -= amount;
      debitSpan.childNodes[0].textContent = `$${totalDebits.toFixed(2)}`;
    } else {
      totalCredits -= amount;
      creditSpan.childNodes[0].textContent = `$${totalCredits.toFixed(2)}`;
    }
    event.target.parentNode.parentNode.remove();
  }
});

// timer function (2 minutes)
let timeoutInMiliseconds = 120000;
let timeOut = setTimeout(doInactive, timeoutInMiliseconds);

document.addEventListener("mousemove", resetTimer);
document.addEventListener("mousedown", resetTimer);
document.addEventListener("keypress", resetTimer);
document.addEventListener("touchmove", resetTimer);

function startTimer() {
  timeOut = setTimeout(doInactive, timeoutInMiliseconds);
}
function resetTimer() {
  clearTimeout(timeOut);
  startTimer();
}
function doInactive() {
  alert("You have been inactive for 2 minutes. This page will refresh");
  location.reload(true);
}

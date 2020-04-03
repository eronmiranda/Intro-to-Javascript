// Enter JavaScript for the exercise here...
let transactions = document.querySelector(".transactions");

console.log(transactions);
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
      type,
      amountText,
      amount,
      tools,
      trashIcon;
    let errorMsg;
    event.preventDefault();

    descriptionText = event.target.elements.description.value;
    type = event.target.elements.type;
    amountText = event.target.elements.currency.value;

    tableRow = document.createElement("tr");
    descriptionDataDiv = document.createElement("td");
    typeDataDiv = document.createElement("td");
    amountDataDiv = document.createElement("td");
    toolsDataDiv = document.createElement("td");
    tableData = document.createElement("td");
    trashIcon = document.createElement("i");

    description = document.createTextNode(descriptionText);
    amount = document.createTextNode(amountText);

    amountDataDiv.classList.add("amount");
    toolsDataDiv.classList.add("tools");
    trashIcon.classList.add("delete");
    trashIcon.classList.add("fa");
    trashIcon.classList.add("fa-trash-o");

    //insert error messages. temporary.
    if (descriptionText == "") {
      errorMsg = "";
    } else {
      descriptionDataDiv.appendChild(description);
    }
    if (amountText == "") {
      errorMsg = "";
    } else {
      amountDataDiv.appendChild(amount);
    }
    switch (type.selectedIndex) {
      case 0:
        errorMsg = "";
        break;
      case 1:
        typeDataDiv.appendChild(type.value);
        tableRow.classList.add("debit");
        console.log(typeDataDiv);
        break;
      case 2:
        typeDataDiv.appendChild(type.value);
        tableRow.classList.add("credit");
        break;
    }
    //evt.target.reset();
    event.preventDefault();
  });

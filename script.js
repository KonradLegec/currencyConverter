let button = document.querySelector(".js-button");
let amount = document.querySelector(".js-input");
let form = document.querySelector(".js-form");
let output = document.querySelector(".js-output");
let initialCurrency = document.querySelector(".js-initialCurrency");
let finalCurrency = document.querySelector(".js-finalCurrency");

let EURtoPLN = 4.75;
let EURtoCAD = 1.3;
let CADtoPLN = 3.65;
let EURtoHRK = 7.51;
let CADtoHRK = 5.78;
let PLNtoHRK = 1.59;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let amountVal = parseInt(amount.value);

  switch (initialCurrency.value) {
    case "EUR":
      switch (finalCurrency.value) {
        case "PLN": result = amountVal * EURtoPLN;
        break;
        case "CAD": result = amountVal * EURtoCAD;
        break;
        case "HRK": result = amountVal * EURtoHRK; 
        break;
        case "EUR": result = amountVal;
      }
    break;
    case "PLN":
      switch (finalCurrency.value) {
        case "PLN": result = amountVal;
        break;
        case "CAD": result = amountVal / CADtoPLN;
        break;
        case "HRK": result = amountVal * PLNtoHRK; 
        break;
        case "EUR": result = amountVal / EURtoPLN;
      }
    break;
    case "CAD":
      switch (finalCurrency.value) {
        case "PLN": result = amountVal * CADtoPLN;
        break;
        case "CAD": result = amountVal;
        break;
        case "HRK": result = amountVal * CADtoHRK; 
        break;
        case "EUR": result = amountVal / EURtoCAD;
      }
    break;
    case "HRK":
      switch (finalCurrency.value) {
        case "PLN": result = amountVal / PLNtoHRK;
        break;
        case "CAD": result = amountVal / CADtoHRK;
        break;
        case "HRK": result = amountVal; 
        break;
        case "EUR": result = amountVal / EURtoHRK;
      }
  }
  output.value = result.toFixed(2);
});

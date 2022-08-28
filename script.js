let button = document.querySelector(".js-button");
let amount = document.querySelector(".js-input");
let form = document.querySelector(".js-form");
let output = document.querySelector(".js-output");
let initialCurrency = document.querySelector(".initialCurrency");
let finalCurrency = document.querySelector(".finalCurrency");

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
      if (finalCurrency.value === "EUR") result = amountVal;
      else if (finalCurrency.value === "PLN") result = amountVal * EURtoPLN;
      else if (finalCurrency.value === "CAD") result = amountVal * EURtoCAD;
      else if (finalCurrency.value === "HRK") result = amountVal * EURtoHRK;
      break;
    case "PLN":
      if (finalCurrency.value === "EUR") result = amountVal / EURtoPLN;
      else if (finalCurrency.value === "PLN") result = amountVal;
      else if (finalCurrency.value === "CAD") result = amountVal / CADtoPLN;
      else if (finalCurrency.value === "HRK") result = amountVal * PLNtoHRK;
      break;
    case "CAD":
      if (finalCurrency.value === "EUR") result = amountVal / EURtoCAD;
      else if (finalCurrency.value === "PLN") result = amountVal * CADtoPLN;
      else if (finalCurrency.value === "CAD") result = amountVal;
      else if (finalCurrency.value === "HRK") result = amountVal * CADtoHRK;
      break;
    case "HRK":
      if (finalCurrency.value === "EUR") result = amountVal / EURtoHRK;
      else if (finalCurrency.value === "PLN") result = amountVal / PLNtoHRK;
      else if (finalCurrency.value === "CAD") result = amountVal / CADtoHRK;
      else if (finalCurrency.value === "HRK") result = amountVal;
      break;
  }

  output.value = result.toFixed(2);
});

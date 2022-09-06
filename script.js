{
  const form = document.querySelector(".js-form");

  let amountVal = () => {
    const amount = document.querySelector(".js-input");
    return parseInt(amount.value);
  };

  const calculateResult = () => {
    const initialCurrency = document.querySelector(".js-initialCurrency");
    const finalCurrency = document.querySelector(".js-finalCurrency");
    const EURtoPLN = 4.75;
    const EURtoCAD = 1.3;
    const CADtoPLN = 3.65;
    const EURtoHRK = 7.51;
    const CADtoHRK = 5.78;
    const PLNtoHRK = 1.59;

    switch (initialCurrency.value) {
      case "EUR":
        switch (finalCurrency.value) {
          case "PLN":
            result = amountVal() * EURtoPLN;
            break;
          case "CAD":
            result = amountVal() * EURtoCAD;
            break;
          case "HRK":
            result = amountVal() * EURtoHRK;
            break;
          case "EUR":
            result = amountVal();
        }
        break;
      case "PLN":
        switch (finalCurrency.value) {
          case "PLN":
            result = amountVal();
            break;
          case "CAD":
            result = amountVal() / CADtoPLN;
            break;
          case "HRK":
            result = amountVal() * PLNtoHRK;
            break;
          case "EUR":
            result = amountVal() / EURtoPLN;
        }
        break;
      case "CAD":
        switch (finalCurrency.value) {
          case "PLN":
            result = amountVal() * CADtoPLN;
            break;
          case "CAD":
            result = amountVal();
            break;
          case "HRK":
            result = amountVal() * CADtoHRK;
            break;
          case "EUR":
            result = amountVal() / EURtoCAD;
        }
        break;
      case "HRK":
        switch (finalCurrency.value) {
          case "PLN":
            result = amountVal() / PLNtoHRK;
            break;
          case "CAD":
            result = amountVal() / CADtoHRK;
            break;
          case "HRK":
            result = amountVal();
            break;
          case "EUR":
            result = amountVal() / EURtoHRK;
        }
    }
    return result;
  };

  form.addEventListener("submit", (e) => {
    const output = document.querySelector(".js-output");
    e.preventDefault();
    calculateResult();
    output.value = result.toFixed(2);
  });
};

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
            return amountVal() * EURtoPLN;
          case "CAD":
            return amountVal() * EURtoCAD;
          case "HRK":
            return amountVal() * EURtoHRK;
          case "EUR":
            return amountVal();
        }

      case "PLN":
        switch (finalCurrency.value) {
          case "PLN":
            return amountVal();
          case "CAD":
            return amountVal() / CADtoPLN;
          case "HRK":
            return amountVal() * PLNtoHRK;
          case "EUR":
            return amountVal() / EURtoPLN;
        }

      case "CAD":
        switch (finalCurrency.value) {
          case "PLN":
            return amountVal() * CADtoPLN;
          case "CAD":
            return amountVal();
          case "HRK":
            return amountVal() * CADtoHRK;
          case "EUR":
            return amountVal() / EURtoCAD;
        }

      case "HRK":
        switch (finalCurrency.value) {
          case "PLN":
            return amountVal() / PLNtoHRK;
          case "CAD":
            return amountVal() / CADtoHRK;
          case "HRK":
            return amountVal();
          case "EUR":
            return  amountVal() / EURtoHRK;
        }
    }
  };
  
  form.addEventListener("submit", (e) => {
    const output = document.querySelector(".js-output");
    e.preventDefault();
    const result = calculateResult();
    output.value = result.toFixed(2);
  });
};

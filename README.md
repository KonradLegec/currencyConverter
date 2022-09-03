# Currency converter v1.0

This is my **first Java Script** project, it is simple design, 4 to 4 currencies converter. It is based on simple Java Script tools such as `add.eventListener` and conditional instructions `switch-case` and `if-else`. Fragment of code below:

```
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
 ```

## Data source
For the moment the currency rates are a declared numbers copied from the market and are not being updated.

## Development
In the oncoming weeks the project will be improved with more currencies, new functions and refreshed user graphic interface.

![img](http://foto-hosting.pl/img/27/20/8d/27208d73425c7801e223dc7900e97ede36b8fbfc.jpeg)

## Demo
https://konradlegec.github.io/currencyConverter/

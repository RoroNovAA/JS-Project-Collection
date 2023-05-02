 /* CELSIUS TO FAHRENHEIT FUNCTION */
 function celsiusToFahrenheit(celsius) {
    let fahrenheit = undefined;
    /* MATHEMATICALLY CONVERTING THE C TO F */
    fahrenheit = celsius * 1.8 + 32;
    return fahrenheit;
  }

  celsiusToFahrenheit(20);
  /* CONSOLE LOG TO SEE THE RESULT */
  console.log(celsiusToFahrenheit(20));
  console.log(celsiusToFahrenheit(12));
function convertTemperature(fromUnit, toUnit) {
    const inputElement = document.getElementById(fromUnit);
    const outputElement = document.getElementById(toUnit);

    const inputValue = parseFloat(inputElement.value);

    if (!isNaN(inputValue)) {
      let convertedValue;

      if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
        convertedValue = (inputValue * 9/5) + 32;
      } else if (fromUnit === 'celsius' && toUnit === 'kelvin') {
        convertedValue = inputValue + 273.15;
      } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
        convertedValue = (inputValue - 32) * 5/9;
      } else if (fromUnit === 'fahrenheit' && toUnit === 'kelvin') {
        convertedValue = (inputValue - 32) * 5/9 + 273.15;
      } else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
        convertedValue = inputValue - 273.15;
      } else if (fromUnit === 'kelvin' && toUnit === 'fahrenheit') {
        convertedValue = (inputValue - 273.15) * 9/5 + 32;
      }

      outputElement.value = convertedValue.toFixed(2);
    }
  }
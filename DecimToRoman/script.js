function convertToRoman() {
    var inputNumber = document.getElementById('number').value;
    var outputElement = document.getElementById('output');
    var romanNumeral = '';

    // Check for valid input
    if (!inputNumber) {
      outputElement.innerText = 'Please enter a valid number';
      return;
    }

    // Convert inputNumber to a valid integer
    inputNumber = parseInt(inputNumber);

    // Check for the specified conditions
    if (isNaN(inputNumber) || inputNumber < 1) {
      outputElement.innerText = 'Please enter a number greater than or equal to 1';
    } else if (inputNumber >= 4000) {
      outputElement.innerText = 'Please enter a number less than or equal to 3999';
    } else {
      romanNumeral = convertToRomanNumeral(inputNumber);
      outputElement.innerText = romanNumeral;
    }
  }

  function convertToRomanNumeral(num) {
    var romanValues = [
      { value: 1000, numeral: 'M' },
      { value: 900, numeral: 'CM' },
      { value: 500, numeral: 'D' },
      { value: 400, numeral: 'CD' },
      { value: 100, numeral: 'C' },
      { value: 90, numeral: 'XC' },
      { value: 50, numeral: 'L' },
      { value: 40, numeral: 'XL' },
      { value: 10, numeral: 'X' },
      { value: 9, numeral: 'IX' },
      { value: 5, numeral: 'V' },
      { value: 4, numeral: 'IV' },
      { value: 1, numeral: 'I' }
    ];

    var result = '';

    for (var i = 0; i < romanValues.length; i++) {
      while (num >= romanValues[i].value) {
        result += romanValues[i].numeral;
        num -= romanValues[i].value;
      }
    }

    return result;
  }
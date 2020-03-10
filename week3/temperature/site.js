function btnConvertTemp() {

    let temp = +document.getElementById("tbTemp").value;
  
    let tempToCelsius = (temp - 32) * 5 / 9;
  
    document.getElementById("convertMessage").innerHTML = `Temperature is ${tempToCelsius}`;
  }
  
  function selectConversion() {
  
    let temp = +document.getElementById("tbTemp").value;
    let choice = document.getElementById("selectConversion").value;
  
    // ternary operator
    let conversion = choice == 1 ? (temp - 32) * 5 / 9 : (temp * 9 / 5) + 32;
  
    /*
  if (choice == 1) {
    conversion =  (temp - 32) * 5 / 9;
  } else {
    conversion =  (temp * 9 / 5) + 32;
  }
  */
  
    conversionType = choice == 1 ? `Celsius` : `Fahrenheit`;
  
  
    document.getElementById("convertMessage").innerHTML = `Temperature is ${conversion} when converted to ${conversionType}`;
  
  
  }
  
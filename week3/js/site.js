//console.log('I am loading the javascript');

function initPage() {
    document.getElementById("loadMessage").innerHTML= "Hello World";
}

function btnPushMessage() {
    document.getElementById("loadMessage").innerHTML= "Hello World from a button press";
}

function btnPushNewDate() {
  var d = new Date();
  var n = d.toDateString();
  document.getElementById("demo").innerHTML = n;
}

function btnPushDate() {
    let d = new Date();
    document.getElementById("loadMessage").innerHTML= `<strong>Date:</strong>${d.toString()} : ${d.toDateString()}`;
}

function btnGetAge() {
    let age = document.getElementById("tbAge").value;
    document.getElementById("ageMessage").innerHTML = `Your age is ${age}`;
}

function getSum() {
    let y = parseInt(document.getElementById("number1").value);
    let z = +document.getElementById("number2").value;
    let x = y + z;
    document.getElementById("sumMessage").innerHTML = x;
}

//function btnInsertAge() {
    let age = parseInt(document.getElementById("myAge").value); 
    let greeting;
    if (age <= 25) {
      greeting = "You are too young";}
      if (age < 50) {
        greeting = "Keep working";
    } else {
      greeting = "Enjoy your life";
    }
    document.getElementById("demo").innerHTML = greeting;
  

  function btnInsertAge(){
    let age = parseInt(document.getElementById("myAge").value); 
    let message = "";

    if (age <= 25){
    message = `${age}:Very young`}
    else if (age > 25 && age <= 50) {
        message = `${age}: not so young`;
    }
    else {
        message = `${age}: not so, not so young`
    }
document.getElementById("ageMessage").innerHTML = message;
  }


  function btnConvertTemp (){
      let temp = +document.getElementById("tbTemp").value;
      let tempToCelsius = (temp-32)*5/9;
      document.getElementById("convertMessage").innerHTML = `Temperature is ${tempToCelsius}`
  }

  function selectConversion() {
    let temp = +document.getElementById("tbTemp").value;
    let choice = document.getElementById("selectConversion").value
    if choice == 1 ? : (temp-32)*5/9 : temp * 9 / 5 + 32

    conversionType = choice == 1 ? `Celsius` : `Fahrenheit`;
    document.getElementById("convertMessage").innerHTML = `Temperature is ${tempToCelsius} when converted`;


  }
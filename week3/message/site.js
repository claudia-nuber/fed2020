//console.log('I am loading the javascript');
function initPage() {
  document.getElementById("loadMessage").innerHTML = "Hello world";
}

function btnPushMessage() {
  document.getElementById("loadMessage").innerHTML = "Hello world from a button press";
}

function btnPushDate() {
  let d = new Date();
  document.getElementById("loadMessage").innerHTML =
      `<strong>Date:</strong> ${d.toString()} : ${d.toDateString()}`;
}

function btnGetSum() {
  // old way is to use parseInt - you can also use parseFloat
  let num1 = parseInt(document.getElementById("tbNum1").value);
  // alternative is to use a + symbol to conver to number
  let num2 = +document.getElementById("tbNum2").value;
  let sum = num1 + num2;
  document.getElementById("sumMessage").innerHTML = `Sum is ${sum}`;
}




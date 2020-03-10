function btnGetAge() {

    let age = +document.getElementById("tbAge").value;
  
    let message = ``;
    if (age <= 25)
        message = `${age}:Very Young`
    else if (age > 25 && age <= 50) {
        message = `${age}: not so young`;
    } else {
  
        message = `${age}:not so, not so young`;
    }
  
    document.getElementById("ageMessage").innerHTML = message;
  }
  
  
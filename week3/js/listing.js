console.log("i am listing js");
 
function populateList() {
 
    let coloursOfTheRainbow = ["Red",  "Orange", "Yellow","Green", "Blue", "Indigo", "Violet"]
 
    let htmlString = `<ol>`;
 
    for (i = 0; i < coloursOfTheRainbow.length; i++) {
        console.log(htmlString);
        htmlString += `<li>${coloursOfTheRainbow[i]}</li>`;
    }
 
    htmlString += `</ol>`
 
    document.getElementById("messagePanel").innerHTML = htmlString;
 
}
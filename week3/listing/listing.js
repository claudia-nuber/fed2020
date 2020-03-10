console.log("i am listing js");

function populateList() {

    let coloursOfTheRainbow = ["Red",  "Orange", "Yellow","Green", "Blue", "Indigo", "Violet"]

    let htmlString = `<ol>`;

    for (i = 0; i < coloursOfTheRainbow.length; i++) {
        console.log(htmlString);
        htmlString += `<li>${coloursOfTheRainbow[i]}</li>`;
    }

    htmlString += `</ol>`

    document.getElementById("messagePanel2").innerHTML = htmlString;

}

function makeAList () {
    let daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let htmlTag = `<ol>`;

    for (i=0; i<daysOfTheWeek.length; i++) {
        console.log(htmlTag);
        htmlTag += `<li>${daysOfTheWeek[i]}</li>`;
    }
    htmlTag += `</ol>`

    document.getElementById("messagePanel1").innerHTML = htmlTag;
}

function initFunctions(){
    populateList();
    makeAList();
}

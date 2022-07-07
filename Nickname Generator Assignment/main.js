let rndBtn = document.getElementById ("ranBtn");
let allBtn = document.getElementById ("allBtn");
let containerEl = document. getElementById("Container")
let nickNames = ["Crusher", "the Scientist", "Twinkle-toes","the Coder", "the Jester",
 "the Sloth", "Quick-Silver","Cool-Dude", "the Mess-Maker"]

rndBtn. addEventListener("click", randomBtnClicked);
allBtn. addEventListener("click", allBtnClicked);

function randomBtnClicked(){
    let firstName = document.getElementById ("FirstName").value;
    let lastName = document.getElementById ("LastName").value;
    let middleName = nickNames[Math.floor((Math.random() * nickNames.length) + 0)];
    containerEl.innerHTML = firstName + " " + middleName + " " +  lastName;
}

function allBtnClicked(){

    let firstName = document.getElementById ("FirstName").value;
    let lastName = document.getElementById ("LastName").value;
    let middleName = " ";
    let allNames = " ";
    for(let i = 0; i < nickNames.length; i++){
        middleName = nickNames[i];
        allNames += `<div>${firstName + " " + middleName + " " +  lastName}</div>`
    }

    containerEl.innerHTML = allNames;

}
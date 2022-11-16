

window.onload = function() {

    var formHandle = document.forms.ixdForm

    formHandle.onsubmit = processForm;

function processForm() {
var fNameValue = formHandle.f__fName
var lNameValue = formHandle.f__lName
var humIdValue = formHandle.f__id

var programBoxValue = formHandle.f__program
var deliverBoxValue = formHandle.f__deliver
var projectBoxValue = formHandle.f__project


deliverError = document.getElementById("caption_deliver");
projectError = document.getElementById("caption_project");


// regex validation parameter variable for student id

var studentIdRegex = /^(n|N)\d{8}$/ ;

// console.log(studentIdRegex);

if (fNameValue.value === "") {
    fNameValue.style["background-color"] = "red";
    fNameValue.focus();
    return false;
}

if (lNameValue.value === "") {
    lNameValue.style["background-color"] = "red";
    lNameValue.focus();
    return false;
}

// regex validation for student id

if (!studentIdRegex.test(humIdValue.value)) {
    humIdValue.style["background-color"] = "red";
    humIdValue.focus();
    return false;
}

if (programBoxValue.value === "X") {
    programBoxValue.style["background-color"] = "red";
    programBoxValue.focus();
    return false;
}

if (deliverBoxValue.value === "") {
    deliverError.style["background-color"] = "red";
    return false;
} 

if (projectBoxValue.value === "") {
    projectError.style["background-color"] = "red";
    return false;
} 


// same as from L7 practice lesson, changed the value of the program code to the full name.

var programFull = programBoxValue.options[programBoxValue.selectedIndex].text;

//fills out response msg with dynamic responses. I get the correct corresponding resposes, but the text messages dont really make exact sense with the selections. ie the 'Humber Current' selection yields a msg about 'Humber News'. We were told not to
//alter the html file, so i left it.

function resultDisplay () {
var fNameMsg = document.getElementById("result__Fname");
fNameMsg.innerHTML = fNameValue.value;
var lNameMsg = document.getElementById("result__Lname");
lNameMsg.innerHTML = lNameValue.value;
var humIdMsg = document.getElementById("result__id");
humIdMsg.innerHTML = humIdValue.value;
var programMsg = document.getElementById("result__program");
programMsg.innerHTML = programFull;
var deliverMsg = document.getElementById("result__delivery");
deliverMsg.innerHTML = deliverBoxValue.value;
var projectMsg = document.getElementById("result__project");
projectMsg.innerHTML = projectBoxValue.value;
}
resultDisplay();

//hides header and form on submission.

var resultMsg = document.getElementById("result");
resultMsg.style.display = "block";

//trying to get the red to disappear after something is selected on radio buttons (if i trigger an error and then comply and select something),I made a function that would take in the particular box's name as a parameter, //but
// it didn't work. also, any else statement or another if statement make it so my form wont submit, and i can't have a return false in my else
//because then it kills the rest of the function.

// function endRed(whatBox){
// 	whatBox.style["background-color"] = "none";
// }

// console.log(fNameValue.value);

var headerDisplay = document.getElementById("welcome");
headerDisplay.style.display = "none";
formHandle.style.display = "none";
        return false
}








}
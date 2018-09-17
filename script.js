// var for input
var number = document.getElementById("numberInput").value;
Submitted = "true";
// length < 20 characters
if (number.length > 20) {
    alert("The number must no more than 20 characters");  
    Submitted = "false";
}
// validate - numbers, -, . 
const regex = new RegExp('[[\S]+[\d,-,.]+[\d]]');

if (number = ){ 
    Submitted = "true";
}
else {
    alert("Invalid Number");
    Submitted = "false";}

// local storage - mongo
// if input is empty, user time submitted is recorded
// display all with time and number and user number
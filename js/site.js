//Get string from page
function getValue(){
    //Make sure alert is invisible before button is pressed
    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;

    let revString = reverseString(userString);

    displayString(revString);
}

//Reverse the string
function reverseString(userString){
    let revString = [];

    //reverse a string using a for loop
    for (let i = userString.length - 1; i >= 0; i--) {
      revString += userString[i];         
    }
    
    return revString;
}

//Display the reversed string to the user
function displayString(revString){
    document.getElementById("msg").innerHTML = `Your reversed string is: ${revString}`;
    document.getElementById("alert").classList.remove("invisible");        
}
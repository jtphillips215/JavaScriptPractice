"use strict";

const getRandomNumber = max => {
	let random = null;
	if (!isNaN(max)) {
		random = Math.random();             // value >= 0.0 and < 1.0
		random = Math.floor(random * max);  // value is an integer between 0 and max - 1
		random = random + 1;                // value is an integer between 1 and max
	}
	return random;
};

$(document).ready( () => {
    $("#generate").click( () => {
        $("#password").val( "" ); // clear previous entry
    
        const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-+!@";
        
        // getting value from the number blank
        let numCharacters = $("#num").val();

        // testing if blank contains numbers
        // displaying alert if nun-numeric characters detected
        if (isNaN(numCharacters)) {
            alert("Please enter a number!");
        }

        // variable to hold our password
        let userPassword = "";

        // for loop to add to password
        for (i = 0; i < numCharacters; i++) {
            userPassword += chars.charAt(getRandomNumber(chars));
        }

        // displaying generated password to user
        $("#password").val(userPassword);

    }); // end click()
    
    $("#clear").click( () => {
        $("#num").val( "" );
        $("#password").val( "" );
        $("#num").focus();
    }); // end click()
    
    // set focus on initial load
    $("#num").focus();
}); // end ready()
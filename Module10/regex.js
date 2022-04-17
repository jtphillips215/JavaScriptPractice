"use strict";

$(document).ready( () => {
    $("#validate").click( () => {
        const phone = $("#phone").val();
        // initial pattern
        // const pattern = /^\d{3}-\d{3}-\d{4}$/;    //999-999-9999
        // adding prefix for 1
        // const pattern = /^\d{1}-\d{3}-\d{3}-\d{4}$/;    //1-555-555-5555
        // optional prefic for 1
        // const pattern = /^(\d{1}-)?\d{3}-\d{3}-\d{4}$/;    //1-555-555-5555 or 555-555-5555
        // dashes or dots
        const pattern = /^(\d{1}(-|\.))?\d{3}(-|\.)\d{3}(-|\.)\d{4}$/;    // above or 9.555.555.5555
        const isValid = pattern.test(phone);

        $("#message").text( (isValid) ? "Valid phone number" : "Invalid phone number" );
        $("#phone").focus();
    }); // end click()
    
    $("#phone").val("123-456-7890");             // set default phone number
    $("#phone").focus();                         // set focus on initial load
    
}); // end ready()
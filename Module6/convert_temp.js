"use strict";
var $ = function(id) { return document.getElementById(id); };


var clearTextBoxes = function() {
    $("degrees_entered").value = "";
    $("degrees_computed").value = "";
};

window.onload = function() {
    $("convert").onclick = convertTemp;
    $("to_celsius").onclick = toCelsius;
    $("to_fahrenheit").onclick = toFahrenheit;
	$("degrees_entered").focus();
};

// to fahrenheit function modifies UI when user clicks the to Fahrenheit radio button
const toFahrenheit = () => {
    // assigning html labels to js variables
    let lbl_degrees_entered = $("degree_label_1");
    let lbl_degrees_computed = $("degree_label_2");

    // changing labels to the correct text
    lbl_degrees_entered.innerHTML = "Enter C Degrees";
    lbl_degrees_computed.innerHTML = "Degrees Fahrenheit";

    // calling function to clear textboxes
    clearTextBoxes();

    // focusing on text box to enter value to be converted to improve ux
    $("degrees_entered").focus();
}

// to celsius function modifies UI when user clicks the to Celsius radio button
const toCelsius = () => {
    // assigning html labels to js variables
    let lbl_degrees_entered = $("degree_label_1");
    let lbl_degrees_computed = $("degree_label_2");

    // changing labels to the correct text
    lbl_degrees_entered.innerHTML = "Enter F Degrees";
    lbl_degrees_computed.innerHTML = "Degrees Calsius";

    // calling function to clear text boxes
    clearTextBoxes();

    // focusing on textbox to enter value to be converted to improve ux
    $("degrees_entered").focus();
}

// convertTemp takes the temperature and converts it to the output depending on
// which radio button is clicked
const convertTemp = () => {
    // testing if user entered a number an alerting user if not
    // added if the field was blank after testing
    if (isNaN($("degrees_entered").value) || $("degrees_entered").value == "") {
        window.alert("You must enter a valid number for degrees.")
    }
    else {
        if ($("to_celsius").checked) {
            // accessing number entered and converting to celsius
            let num_degrees_entered = parseFloat($("degrees_entered").value);
            let num_degrees_computed = (num_degrees_entered - 32) * (5/9);

            // updating textbox for degrees computed
            $("degrees_computed").value = num_degrees_computed;
        }
        else {
            // accessing number entered and converting to fahrenheit
            let num_degrees_entered = parseFloat($("degrees_entered").value);
            let num_degrees_computed = num_degrees_entered * (9/5) + 32;

            // updating textbox for degrees computed
            $("degrees_computed").value = num_degrees_computed;
        }
    }
    
    // focusing on textbox to enter value to be converted to improve ux
    $("degrees_entered").focus();
}
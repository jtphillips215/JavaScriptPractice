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
    let degrees_entered = $(degree_label_1);
    let degrees_computed = $(degree_label_2);

    // changing labels to the correct text
    degrees_entered.value = "Enter C Degrees";
    degrees_computed.value = "Degrees Fahrenheit";

    // calling function to clear textboxes
    clearTextBoxes();
}

// to celsius function modifies UI when user clicks the to Celsius radio button
const toCelsius = () => {
    // assigning html labels to js variables
    let degrees_entered = $(degree_label_1);
    let degrees_computed = $(degree_label_2);

    // changing labels to the correct text
    degrees_entered.value = "Enter F Degrees";
    degrees_computed.value = "Degrees Calsius";

    // calling function to clear text boxes
    clearTextBoxes();
}

// convertTemp takes the temperature and converts it to the output depending on
// which radio button is clicked
const convertTemp = () => {

}

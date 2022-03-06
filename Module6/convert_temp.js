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
const to_fahrenheit = () => {
    // assigning html labels to js variables
    let degrees_entered = $(degree_label_1);
    let degrees_computed = $(degree_label_2);
}

// to celsius function modifies UI when user clicks the to Celsius radio button
const to_celsius = () => {
    // assigning html labels to js variables
    let degrees_entered = $(degree_label_1);
    let degrees_computed = $(degree_label_2);

}

// convertTemp takes the temperature and converts it to the output depending on
// which radio button is clicked
const convertTemp = () => {

}

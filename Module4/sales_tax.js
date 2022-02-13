"use strict";

const $ = selector => document.querySelector(selector);

// process entries gets the user entries, calculates the sales tax and total,
// and displays those results
const processEntries = function() {
  let subtotal = parseFloat(textbox.$("#subtotal")).value;
  let taxRate = parseFloat(textbox.$("#tax_rate")).value;
  let salesTax = subtotal * taxRate;
  let total = subtotal + salesTax;
  alert(total);
  subtotalFocus();
}

// focusing on subtotal for page start and on clicking calculate
const subtotalFocus = function() {
  document.querySelector("#subTotal").focus();
}

// function for clearing form to be attached to event handlers
const clearForm = function() {
  $("#subtotal").value = "";
  $("#tax_rate").value = "";
  $("#sales_tax").value = "";
  $("#total").value = "";
  subtotalFocus();
}

// DOMContentLoaded event handler for attaching the processEntries() function
// to the click event of the Calculate button
let calculate = $("#calculate");
calculate.addEventListener("click", processEntries);

// data validation for the processEntries() function
// Subtotal must be > 0 and < 10000
// Tax Rate must be > 0 and < 12

// event handler for the click event of Subtotal text bock clear the data from the text box

// event handler for the click event of tax rate text bock clear the data from the text box

// Update the event handler for the Clear button to call these functions as well
// (to reduce code duplication)
let clear = $("#clear");
clear.addEventListener("click", clearForm);
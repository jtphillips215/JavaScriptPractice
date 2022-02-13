"use strict";

const $ = selector => document.querySelector(selector);

// process entries gets the user entries, calculates the sales tax and total,
// and displays those results
const processEntries = () => {
  let subtotal = parseFloat($("#subtotal")).value;
  let taxRate = parseFloat($("#tax_rate")).value;
  let salesTax = subtotal * taxRate;
  $("#sales_tax").value = salesTax.toFixed(2);
  let total = subtotal + salesTax;
  $("#total").value = total.toFixed(2);
  subtotalFocus();
}

// function for focusing on subtotal for page start and on clicking calculate
const subtotalFocus = () => {
  document.querySelector("#subTotal").focus();
}

window.onload = () => {
  subtotalFocus();
}

// function for clearing form to be attached to event handlers
const clearForm = () => {
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

// event handler for the click event of subtotal text bock clear the data from the text box
let clearSubtotal = $("subtotal");
clearSubtotal.addEventListener("click", $("#subtotal").value = "");

// event handler for the click event of tax rate text bock clear the data from the text box
let clearTaxRate = $("subtotal");
clearTaxRate.addEventListener("click", $("#tax_rate").value = "");

// Update the event handler for the Clear button to call these functions as well
// (to reduce code duplication)
let clear = $("#clear");
clear.addEventListener("click", clearForm);
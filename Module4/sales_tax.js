"use strict";

const $ = selector => document.querySelector(selector);

// process entries gets the user entries, calculates the sales tax and total,
// and displays those results
const processEntries = () => {
  let subtotal = parseFloat($("#subtotal").value);
  let taxRate = parseFloat($("#tax_rate").value);
  
  // data validation for the processEntries() function
  if(isNaN(subtotal) || subtotal < 0 || subtotal > 10000) {
    alert("Subtotal must be > 0 and < 10000");
  }
  else if(isNaN(taxRate) || taxRate < 0 || taxRate > 12) {
    alert("Tax Rate must be > 0 and < 12");
  }
  else {
    let salesTax = subtotal * (taxRate / 100);
    $("#sales_tax").value = salesTax.toFixed(2);
    let total = subtotal + salesTax;
    $("#total").value = total.toFixed(2);
    subtotalFocus();
  }
}

// function for focusing on subtotal for page start and on clicking calculate
const subtotalFocus = () => {
  $("#subtotal").focus();
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
document.addEventListener("DOMContentLoaded", () => {
  let calculate = $("#calculate");
calculate.addEventListener("click", processEntries);
});



// event handler for the click event of subtotal text bock clear the data from the text box
$("#subtotal").addEventListener("click", () => {
   $("#subtotal").value = "";
});

// event handler for the click event of tax rate text bock clear the data from the text box
$("#tax_rate").addEventListener("click", () => {
  $("#tax_rate").value = "";
});

// Update the event handler for the Clear button to call these functions as well
// (to reduce code duplication)
let clear = $("#clear");
clear.addEventListener("click", clearForm);
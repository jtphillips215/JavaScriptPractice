"use strict";

const $ = selector => document.querySelector(selector);

// process entries gets the user entries, calculates the sales tax and total,
// and displays those results
const processEntries = function() {
  return;
}

// focusing on subtotal for page start and on clicking calculate
document.querySelector("#subTotal").focus();

// DOMContentLoaded event handler for attaching the processEntries() function
// to the click event of the Calculate button

// data validation for the processEntries() function
// Subtotal must be > 0 and < 10000
// Tax Rate must be > 0 and < 12

// event handler for the click event of Subtotal text bock clear the data from the text box

// event handler for the click event of tax rate text bock clear the data from the text box

// Update the event handler for the Clear button to call these functions as well (to reduce code duplication)
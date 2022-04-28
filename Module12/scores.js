"use strict";

// adding arrays for score values and strings
const scores = new Array();
const scoresString = new Array();

const displayScores = (scores, scoresString) => {
	
};

$(document).ready( () => {
    $("#add_button").click( () => {
        
        
        // get the add form ready for next entry
        $("#first_name").val( "" );
        $("#last_name").val( "" );
        $("#score").val( "" );
        $("#first_name").focus();
    }); // end click()
    
    $("#clear_button").click( () => {


        // remove the score data from the web page
        $("#average_score").val( "" );
        $("#scores").val( "" );

        $("#first_name").focus();
    }); // end click()
       
    $("#sort_button").click( () => {

    }); // end click()
    
    $("#first_name").focus();
}); // end ready()
"use strict";

// adding arrays for score values and strings
const scores = new Array();
const scoresString = new Array();

const displayScores = (scores, scoresString) => {
    //console.log(scores);
    
    // total that can be added to as we iterate through array
    let total = 0;
    // iterating through array and adding to total 
	for (let i = 0; i < scores.length; i++) {
        let score = parseInt(scores[i]); 
        total += score;
        //console.log(total);
    }

    // calculating average and updating blank
    let average = total / scores.length;
    console.log(average);
    $("#average_score").text(average);
}

$(document).ready( () => {
    $("#add_button").click( () => {
        // adding our score to the scores array
        let score = $("#score").val();
        //console.log(score);
        scores[scores.length] = score;
        // calling display scores to update with the required information
        displayScores(scores, scoresString);
        
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
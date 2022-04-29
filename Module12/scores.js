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
    //console.log(average);
    $("#average_score").text(average);

    let scoresText = "";
    // updating text area with scores from scorestring array
    for (let i = 0; i <  scoresString.length; i++) {
        console.log(scoresString[i]);
        scoresText += scoresString[i] + "\n";
    }
    $("#scores").text(scoresText);
}

$(document).ready( () => {
    $("#add_button").click( () => {
        // adding our score to the scores array
        let score = $("#score").val();
        //console.log(score);
        scores[scores.length] = score;

        // adding name and score to the scorestring array
        let lastName = $("#last_name").val();
        let firstName = $("#first_name").val();
        scoresString[scoresString.length] = lastName + ", " + firstName + ": " + score;
        //console.log(scoresString);

        // calling display scores to update with the required information
        displayScores(scores, scoresString);
        
        // get the add form ready for next entry
        $("#first_name").val( "" );
        $("#last_name").val( "" );
        $("#score").val( "" );
        $("#first_name").focus();
    }); // end click()
    
    $("#clear_button").click( () => {

        // emptying arrays
        scores.length = 0;
        scoresString.length = 0;
        

        // remove the score data from the web page
        $("#average_score").text( "" );
        $("#scores").val( "" );

        $("#first_name").focus();
    }); // end click()
       
    $("#sort_button").click( () => {

    }); // end click()
    
    $("#first_name").focus();
}); // end ready()
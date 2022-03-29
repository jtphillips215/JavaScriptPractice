$(document).ready(function() {

  // attaching second function for the click event of the a tags/links
  $("#jdom a").click( evt => {
    
    // current target determines which like is clicked
    const currentLink = evt.currentTarget;
    
    // toggle minus class for previous dov
    $(currentLink).prev().toggleClass("hide");
    
    // show or hide selected div 
    if ($(currentLink).prev().attr("class") !== "hide") {
      $(currentLink).prev().hide();
    } 
    else { $(currentLink).prev().show();
      $(currentLink).text("Show less")
    }
    
    // preventiong default behavior for link
    evt.preventDefault();
  }); 
});
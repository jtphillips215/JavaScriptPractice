$(document).ready(function() {

  // attaching second function for the click event of the a tags/links
  $("#jdom a").click( evt => {
    
    // current target determines which like is clicked
    const currentLink = evt.currentTarget;
    
    // toggle minus class for a tag 
    $(currentLink).toggleClass("hide");
    
    // show or hide related div 
    if ($(currentLink).prev().attr("class") != "hide") {
      $(currentLink).prev().hide();
    } 
    else { $(currentLink).prev().show(); }
    
    // preventiong default behavior for link
    evt.preventDefault();
  }); 
});
function openNav() {
  document.getElementById("nav-items").style.width = "80%";
}
  
/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("nav-items").style.width = "0";
}

  var tabs = document.getElementById('tabs');
  var tab = tabs.getElementsByClassName('tab');
  for(var i=0; i<tab.length; i++){
    tab[i].addEventListener("click", function(){
      var current = document.getElementsByClassName("active");

      // If there's no active class
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }

    // Add the active class to the current/clicked button
    this.className += " active";
    }); 
  }

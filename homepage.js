// Citation: https://www.w3schools.com/howto/howto_js_tabs.asp

// function openTab(evt, tab) {
//   var i, tablink, tabcontent;
//
//   // Hide all tabcontents
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }
//
//   // Remove class "active" from tablinks
//   tablink = document.getElementsByClassName("tablink");
//   for (i = 0; i < tablink.length; i++) {
//     tablink[i].className = tablink[i].className.replace(" active", "");
//   }
//
//   // Show the current tab and add "active" class to the button that opened tab
//   document.getElementById(tab).style.display = "block";
//   evt.currentTarget.className += " active";
// }

$(document).ready(setup);

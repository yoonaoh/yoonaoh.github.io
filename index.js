// Reference: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var landingHeight = document.getElementById("introduction").style.height;
  if (document.body.scrollTop > landingHeight || document.documentElement.scrollTop > landingHeight) {
    document.getElementById("topbtn").style.display = "block";
  } else {
    document.getElementById("topbtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function displayOverlay() {
  var projectName = event.target.id;
  var overlay = document.getElementById(projectName + "-overlay");
  overlay.style.display = "flex";
}

function closeProject() {
  var parentObj = event.target.parentNode;
  parentObj.style.display = "none";
}

function enlargeImage() {
  
}

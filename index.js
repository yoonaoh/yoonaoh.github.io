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
  // Remove the scroll to top button.
  var scrollBtn = document.getElementById("topbtn");
  scrollBtn.style.display = "none";
}

function closeProject() {
  var parentObj = event.target.parentNode;
  parentObj.style.display = "none";
  // Remove the scroll to top button.
  var scrollBtn = document.getElementById("topbtn");
  scrollBtn.style.display = "block";
}

function enlargeImage() {
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = event.target;
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

}

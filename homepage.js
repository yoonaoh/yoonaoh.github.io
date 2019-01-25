function toggleView(idName){
  var tab = document.getElementById(idName);
  if (tab.style.display === "none") {
    tab.style.display = "block";
  } else {
    tab.style.display = "none";
  }
}

$(document).ready(setup);

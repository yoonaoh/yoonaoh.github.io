function tabView(tabName){

  var i, tabs, activeTab;

  tabs = document.getElementsByClassName("tabcontent");
  activeTab = document.getElementById(tabName);

  if (activeTab.style.display === "none") {
    activeTab.style.display = "block";
    for (i = 0; i < tabs.length; i++) {
      if (tabs[i] != activeTab) {
        tabs[i].style.display = "none";
      }
    }
  } else {
    activeTab.style.display = "none";
  }
}

$(document).ready(setup);

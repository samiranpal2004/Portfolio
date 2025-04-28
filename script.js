function opentab(event, tabname) {
  var tablinks = document.getElementsByClassName("tab-links");
  var tabcontents = document.getElementsByClassName("tab-contents");

  for (var tablink of tablinks) {
    tablink.classList.remove("active-links");
  }
  for (var tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-links");
  document.getElementById(tabname).classList.add("active-tab");
}

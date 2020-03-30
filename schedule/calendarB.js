window.onload = function () {
  $("#accordion19").accordion();
  $("#accordion20").accordion();
  $('.calendars').hide();
  $('.2020').show();
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("Dropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
 window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function yearChange(year) {
  $('.calendars').hide();
  $('.' + year).show();
}

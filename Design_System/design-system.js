//Add more js later
function toggleNavbar(isVisible) {
    let dsSideNavbar = document.getElementById("ds-side-navbar");
    let navbarToggle = document.getElementById("navbar-toggle");
    if (isVisible) {
        // When isVisible is true (showing the navbar)
        document.getElementById("navbar-open").style.display = "none";
        document.getElementById("navbar-close").style.display = "flex";
        dsSideNavbar.style.display = "flex";
        navbarToggle.classList.add("active");
    } else {
        // When isVisible is false (hiding the navbar)
        document.getElementById("navbar-open").style.display = "flex";
        document.getElementById("navbar-close").style.display = "none";
        dsSideNavbar.style.display = "none";
        navbarToggle.classList.remove("active");
        logo.style.display = "none";
    }
}

//This removes the active class from all links and adds it to the link that matches
//the current page url
document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll('.side-navbar a');
    var currentUrl = window.location.pathname.split('/').pop();

    navLinks.forEach(function(link) {
      if (link.getAttribute('href') === currentUrl) {
        link.classList.add('active');
      }
    });
});

//js to toggle side-nav-bar in mobile screen (Outback Nursery)
document.addEventListener("DOMContentLoaded", function() {
  let on_SideNavbar = document.getElementById("on-side-navbar");
  let on_navbarOpen = document.getElementById("on-navbar-open");
  let on_navbarClose = document.getElementById("on-navbar-close");

  // Optional: Assuming you have a logo that needs to be hidden
  //let logo = document.querySelector(".on-logo"); // Adjust the selector as necessary

  // Function to show the side navbar
  on_navbarOpen.addEventListener("click", function() {
  on_SideNavbar.style.transform = "translateX(0%)"; // Assuming CSS transitions
  this.style.display = "none";
  on_navbarClose.style.display = "flex";
  //if (logo) logo.style.display = "none"; // Hide logo if it exists
  });

  // Function to hide the side navbar
  on_navbarClose.addEventListener("click", function() {
  on_SideNavbar.style.transform = "translateX(100%)"; // Assuming CSS transitions
  this.style.display = "none";
  on_navbarOpen.style.display = "flex";
  //if (logo) logo.style.display = "flex"; // Show logo if it exists
  });
});

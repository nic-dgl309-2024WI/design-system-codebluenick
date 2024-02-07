//Add more js later
function toggleNavbar(isVisible) {
    let sideNavbar = document.getElementById("side-navbar");
    let navbarToggle = document.getElementById("navbar-toggle");
    if (isVisible) {
        // When isVisible is true (showing the navbar)
        document.getElementById("navbar-open").style.display = "none";
        document.getElementById("navbar-close").style.display = "flex";
        sideNavbar.style.display = "flex";
        navbarToggle.classList.add("active");
    } else {
        // When isVisible is false (hiding the navbar)
        document.getElementById("navbar-open").style.display = "flex";
        document.getElementById("navbar-close").style.display = "none";
        sideNavbar.style.display = "none";
        navbarToggle.classList.remove("active");
        logo.style.display = "none";
    }
}
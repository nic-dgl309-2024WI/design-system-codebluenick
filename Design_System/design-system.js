// Wait for the document to be fully loaded before initializing all functionalities
document.addEventListener('DOMContentLoaded', function() {
  initializeNavbar(); // Initialize navbar toggle functionality
  initializeActiveLinkHighlighting(); // Highlight the active link based on current URL
  initializeMobileSidebarToggle(); // Toggle sidebar for mobile screens
  initializeAboutCarousel(); // Initialize carousel in the about section
  initializeAccordion(); // Initialize accordion functionality
  initializeCardSlider(); // Initialize card slider functionality
});

// Function to toggle the visibility of the navbar
function initializeNavbar() {
  let dsSideNavbar = document.getElementById("ds-side-navbar");
  let navbarToggle = document.getElementById("navbar-toggle");
  document.querySelectorAll("#navbar-toggle, #navbar-open, #navbar-close").forEach(element => {
      element.addEventListener('click', function() {
          const isVisible = dsSideNavbar.style.display === "flex";
          toggleNavbar(!isVisible); // Toggle navbar based on current visibility
      });
  });

  // Inner function to apply visibility changes to the navbar
  function toggleNavbar(isVisible) {
      document.getElementById("navbar-open").style.display = isVisible ? "none" : "flex";
      document.getElementById("navbar-close").style.display = isVisible ? "flex" : "none";
      dsSideNavbar.style.display = isVisible ? "flex" : "none";
      navbarToggle.classList.toggle("active", isVisible);
  }
}

// Function to highlight the active navigation link based on the current page URL
function initializeActiveLinkHighlighting() {
  var navLinks = document.querySelectorAll('.side-navbar a');
  var currentUrl = window.location.pathname.split('/').pop();

  navLinks.forEach(function(link) {
      if (link.getAttribute('href') === currentUrl) {
          link.classList.add('active'); // Add 'active' class to the matching link
      }
  });
}

// Function to toggle the mobile sidebar
function initializeMobileSidebarToggle() {
  let on_SideNavbar = document.getElementById("on-side-navbar");
  let on_navbarOpen = document.getElementById("on-navbar-open");
  let on_navbarClose = document.getElementById("on-navbar-close");

  // Open sidebar
  on_navbarOpen.addEventListener("click", function() {
      on_SideNavbar.style.transform = "translateX(0%)";
      this.style.display = "none";
      on_navbarClose.style.display = "flex";
  });

  // Close sidebar
  on_navbarClose.addEventListener("click", function() {
      on_SideNavbar.style.transform = "translateX(100%)";
      this.style.display = "none";
      on_navbarOpen.style.display = "flex";
  });
}

// Function to add carousel functionality to the "about" section
function initializeAboutCarousel() {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.on-carousel-slide');
  const showSlide = (index) => {
      slides.forEach((slide, i) => {
          slide.style.display = i === index ? 'flex' : 'none'; // Show only the active slide
      });
  };

  // Navigate to previous slide
  document.querySelector('.on-c-c-prev').addEventListener('click', () => {
      currentSlide = currentSlide <= 0 ? slides.length - 1 : currentSlide - 1;
      showSlide(currentSlide);
  });

  // Navigate to next slide
  document.querySelector('.on-c-c-next').addEventListener('click', () => {
      currentSlide = currentSlide >= slides.length - 1 ? 0 : currentSlide + 1;
      showSlide(currentSlide);
  });

  showSlide(currentSlide); // Initialize the carousel by showing the first slide
}

// Function to add accordion functionality
function initializeAccordion() {
  document.querySelectorAll('.on-accordion-button').forEach(button => {
      button.addEventListener('click', function() {
          const expanded = this.getAttribute('aria-expanded') === 'true' || false;
          this.setAttribute('aria-expanded', !expanded);
          const content = this.nextElementSibling;
          content.style.maxHeight = expanded ? 0 : content.scrollHeight + 'px'; // Toggle the max-height to show or hide content
      });
  });
}

// Function to add card slider functionality
function initializeCardSlider() {
  let slideIndex = 1;
  showSlides(slideIndex);

  document.querySelector('.prev-arrow').addEventListener('click', function() {
      plusSlides(-1);
  });

  document.querySelector('.next-arrow').addEventListener('click', function() {
      plusSlides(1);
  });

  function plusSlides(n) {
      showSlides(slideIndex += n);
  }

  function showSlides(n) {
      let slides = document.getElementsByClassName("on-hp-card");
      const cardsToShow = window.innerWidth >= 768 ? 3 : 1; // 3 cards on desktop, 1 on mobile
      let totalSets = Math.ceil(slides.length / cardsToShow);

      if (n > totalSets) slideIndex = 1; // Loop back to the start
      else if (n < 1) slideIndex = totalSets; // Loop to the end

      // Initially hide all slides
      for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none"; 
      }

      // Determine the start and end index of slides to show
      let start = (slideIndex - 1) * cardsToShow;
      let end = start + cardsToShow;

      // Show the correct set of slides
      for (let i = start; i < end && i < slides.length; i++) {
          slides[i].style.display = "block";
      }
  }

  // Reinitialize the slider on window resize to adjust for responsive changes
  window.addEventListener('resize', function() {
      showSlides(slideIndex);
  });
}


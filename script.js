// Welcome message animation
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    const welcomeMessage = document.getElementById("welcome-message");
    const mainContent = document.getElementById("main-content");

    welcomeMessage.classList.add("hidden");

    setTimeout(() => {
      welcomeMessage.style.display = "none";

      mainContent.classList.add("visible");

      AOS.refresh();
    }, 1500);
  }, 2500);
});

// Close the navbar when a link is clicked
document.addEventListener('DOMContentLoaded', function () {
  let navbarToggler = document.querySelector('.navbar-toggler');
  let navbarNav = document.querySelector('#navbarNav');

  function collapseNavbar() {
    if (navbarNav.classList.contains('show')) {
      navbarToggler.click();
    }
  }

  let navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  navLinks.forEach(function (link) {
    link.addEventListener('click', collapseNavbar);
  });
});

// Animation On Scroll
AOS.init({
  duration: 1000,
  offset: 200,
});

// Typing animation
document.addEventListener('DOMContentLoaded', function () {
  let options = {
    strings: ['Jr. Software Engineer', 'Web Developer'],
    typeSpeed: 60,
    backSpeed: 30,
    loop: true,
  };

  let typed = new Typed('.typing-text', options);
});

// Back to top button
document.addEventListener('scroll', () => {
  const button = document.getElementById('backToTop');
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;

  if (scrollPosition > 100) {
    button.style.opacity = '1';
    button.style.visibility = 'visible';
  } else {
    button.style.opacity = '0';
    button.style.visibility = 'hidden';
  }
});

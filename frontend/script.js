// ===== MOBILE MENU TOGGLE =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', function () {
  navLinks.classList.toggle('show');
});

// ===== SCROLL TO FEATURES WHEN "GET STARTED" IS CLICKED =====
const ctaBtn = document.getElementById('ctaBtn');

ctaBtn.addEventListener('click', function () {
  const featuresSection = document.getElementById('features');
  featuresSection.scrollIntoView({ behavior: 'smooth' });
});

// ===== ANIMATED STAT COUNTERS =====
const counters = document.querySelectorAll('.counter');

counters.forEach(function (counter) {
  const target = parseInt(counter.getAttribute('data-target'));
  let current = 0;
  const increment = target / 500; // speed

  function updateCounter() {
    current += increment;
    if (current < target) {
      counter.innerText = Math.ceil(current);
      requestAnimationFrame(updateCounter);
    } else {
      counter.innerText = target;
    }
  }

  updateCounter();
});

// ===== CONTACT FORM HANDLING =====
const contactForm = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault(); // stops the page from reloading

  const name = document.getElementById('nameInput').value;

  formMsg.innerText = 'Thanks ' + name + ', your message has been noted!';

  contactForm.reset(); // clears the form fields
});
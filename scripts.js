// Slider functionality
(function(){
  const slides = document.getElementById('slides');
  const slideCount = slides.children.length;
  let index = 0;

  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');

  function updateSlider() {
    slides.style.transform = 'translateX(' + (-index * 100) + '%)';
  }

  prevBtn.addEventListener('click', () => {
    index = (index === 0) ? slideCount -1 : index - 1;
    updateSlider();
  });

  nextBtn.addEventListener('click', () => {
    index = (index === slideCount -1) ? 0 : index + 1;
    updateSlider();
  });

  // Auto slide every 6 seconds
  setInterval(() => {
    index = (index === slideCount -1) ? 0 : index + 1;
    updateSlider();
  }, 6000);
})();

// Contact form validation and submission simulation
(function(){
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    formMessage.style.color = '#b94848';
    formMessage.textContent = '';

    // Simple client-side validation
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim();

    if (!name || !phone || !message) {
      formMessage.textContent = 'Please fill in all required fields.';
      return;
    }

    // Basic phone pattern: allows digits, spaces, dashes, optional +, length 7 to 15
    const phonePattern = /^\+?[0-9\s\-]{7,15}$/;
    if (!phonePattern.test(phone)) {
      formMessage.textContent = 'Please enter a valid contact number.';
      return;
    }

    // Simulate sending message
    formMessage.style.color = '#4b2e05';
    formMessage.textContent = 'Thank you for reaching out! We will get back to you soon.';
    form.reset();
  });
})();

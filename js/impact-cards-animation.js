// Scroll-triggered animation for impact cards
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.post-it');

  if (!cards.length) return;

  // Intersection Observer for scroll-triggered animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  // Set initial state and observe each card
  cards.forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
  });
});

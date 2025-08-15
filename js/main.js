// Fade-in sections when scrolled into view
document.querySelectorAll('.card, .project, .timeline-event').forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(45px)';
});

window.addEventListener('scroll', () => {
  document.querySelectorAll('.card, .project, .timeline-event').forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 120) {
      el.style.transition = 'opacity 0.7s cubic-bezier(.68,-0.55,.27,1.55),transform .7s';
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
});

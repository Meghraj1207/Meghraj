// Example: Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({behavior: 'smooth'});
        }
    });
});
// Add more interactive functions/animations as needed

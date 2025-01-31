// Scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.animate').forEach((el) => {
    observer.observe(el);
});

// Theme toggle
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    // Add dark theme variables in CSS if needed
}

// Enhanced toggle function with animation
function toggleSection(id) {
    const section = document.getElementById(id);
    section.classList.toggle('active');
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Download button animation
document.querySelector('.download-btn')?.addEventListener('click', function() {
    this.classList.add('clicked');
    setTimeout(() => this.classList.remove('clicked'), 300);
});

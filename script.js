// Smooth Scroll with Highlight
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            // Scroll to section
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Add highlight animation
            targetSection.classList.add('highlight');
            setTimeout(() => {
                targetSection.classList.remove('highlight');
            }, 1000);
        }
    });
});

// Project Toggle
function toggleSection(id) {
    const section = document.getElementById(id);
    section.classList.toggle('active');
}

// Theme Toggle
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    
    // Update theme in localStorage
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Load Saved Theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
}

// Intersection Observer for Animations
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

// Highlight Animation
document.addEventListener('DOMContentLoaded', () => {
    const highlightCSS = `
        @keyframes highlight {
            0% { background-color: rgba(46, 204, 113, 0.2); }
            100% { background-color: transparent; }
        }
        .highlight {
            animation: highlight 1s ease;
        }
    `;
    const style = document.createElement('style');
    style.textContent = highlightCSS;
    document.head.appendChild(style);
});
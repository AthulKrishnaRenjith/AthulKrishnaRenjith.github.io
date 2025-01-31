document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scroll
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                targetSection.classList.add('highlight');
                setTimeout(() => {
                    targetSection.classList.remove('highlight');
                }, 1000);
            }
        });
    });

    // Theme Toggle
    function toggleTheme() {
        document.body.classList.toggle('light-theme');
        const isLight = document.body.classList.contains('light-theme');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    }

    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    }

    // Project Toggle
    function toggleSection(id) {
        const section = document.getElementById(id);
        section.classList.toggle('active');
    }

    // Intersection Observer
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

    // Add highlight animation
    const highlightCSS = `
        @keyframes highlight {
            0% { background-color: rgba(0, 255, 209, 0.1); }
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
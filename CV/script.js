document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scrolling
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Form Validation
    const emailInput = document.querySelector('input[type="email"]');
    if (emailInput) {
        emailInput.addEventListener('input', function() {
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (emailPattern.test(emailInput.value)) {
                emailInput.setCustomValidity('');
            } else {
                emailInput.setCustomValidity('Please enter a valid email address.');
            }
        });
    }

    // Dynamic Content Loading
    const loadMoreBtn = document.getElementById('load-more');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            const additionalContent = `
                <article>
                    <h3>New Experience</h3>
                    <p><em>New Role (2025 - Present)</em></p>
                    <ul>
                        <li>Developed new features and optimized performance.</li>
                        <li>Collaborated with cross-functional teams.</li>
                    </ul>
                </article>
            `;
            document.querySelector('.work-experience').innerHTML += additionalContent;
            loadMoreBtn.style.display = 'none';
        });
    }

    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
        });
    }

    // Scroll to Top Button
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    if (scrollToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 200) {
                scrollToTopBtn.style.display = 'block';
            } else {
                scrollToTopBtn.style.display = 'none';
            }
        });

        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
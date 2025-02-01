// -----------------------------Cursor------------------
document.addEventListener('mousemove', moveCursor);

function moveCursor(e) {
    const cursor = document.getElementById('custom-cursor');
    cursor.style.transform = `translate(${e.clientX - cursor.offsetWidth / 2}px, ${e.clientY - cursor.offsetHeight / 2}px)`;
}

// left-NAV
document.querySelectorAll('.Left-NAV').forEach(item => {
    item.addEventListener('mouseenter', function () {
        const cursor = document.getElementById('custom-cursor');
        const rect = item.getBoundingClientRect();
        cursor.style.transition = 'width 0.2s, height 0.2s, transform 0.2s';
        cursor.style.width = '80px';
        cursor.style.height = '80px';
        cursor.style.transform = `translate(${rect.left + rect.width / 2 - 40}px, ${rect.top + rect.height / 2 - 40}px)`;
        document.removeEventListener('mousemove', moveCursor);
    });

    item.addEventListener('mouseleave', function () {
        const cursor = document.getElementById('custom-cursor');
        cursor.style.transition = 'width 0.2s, height 0.2s, transform 0s';
        cursor.style.width = '30px';
        cursor.style.height = '30px';
        document.addEventListener('mousemove', moveCursor);
    });
});

// Skill Items
document.querySelectorAll('.skill-item').forEach(item => {
    const icon = item.querySelector('.skill-logo'); // Target the icon inside the div

    item.addEventListener('mouseenter', function () {
        const cursor = document.getElementById('custom-cursor');
        const rect = icon.getBoundingClientRect(); // Get the position of the icon

        cursor.style.transition = 'width 0.2s, height 0.2s, transform 0.5s';
        cursor.style.width = '80px';
        cursor.style.height = '80px';
        cursor.style.transform = `translate(${rect.left + rect.width / 2 - 90}px, ${rect.top + rect.height / 2 - 40}px)`;
        document.removeEventListener('mousemove', moveCursor);
    });

    item.addEventListener('mouseleave', function () {
        const cursor = document.getElementById('custom-cursor');
        cursor.style.transition = 'width 0.2s, height 0.2s, transform 0s';
        cursor.style.width = '30px';
        cursor.style.height = '30px';
        document.addEventListener('mousemove', moveCursor);
    });
});

// Heading Points
document.querySelectorAll('.headings').forEach(item => {
    item.addEventListener('mouseenter', function () {
        const cursor = document.getElementById('custom-cursor');
        cursor.style.width = '100px';
        cursor.style.height = '100px';
    });
    item.addEventListener('mouseleave', function () {
        const cursor = document.getElementById('custom-cursor');
        cursor.style.width = '30px';
        cursor.style.height = '30px';
    });
});

// logo and Name
document.querySelectorAll('.brand').forEach(item => {
    item.addEventListener('mouseenter', function () {
        const cursor = document.getElementById('custom-cursor');
        const rect = item.getBoundingClientRect();
        cursor.style.transition = 'width 0.2s, height 0.2s, transform 0.2s';
        cursor.style.width = '200px';
        cursor.style.height = '200px';
        cursor.style.transform = `translate(${rect.left + rect.width / 2 - 100}px, ${rect.top + rect.height / 2 - 100}px)`;
        document.removeEventListener('mousemove', moveCursor);
    });
    item.addEventListener('mouseleave', function () {
        const cursor = document.getElementById('custom-cursor');
        cursor.style.transition = 'width 0.2s, height 0.2s, transform 0s';
        cursor.style.width = '30px';
        cursor.style.height = '30px';
        document.addEventListener('mousemove', moveCursor);
    });
});

// images
document.querySelectorAll('.images').forEach(item => {
    item.addEventListener('mouseenter', function () {
        const cursor = document.getElementById('custom-cursor');
        cursor.style.width = '200px';
        cursor.style.height = '200px';
    });
    item.addEventListener('mouseleave', function () {
        const cursor = document.getElementById('custom-cursor');
        cursor.style.width = '30px';
        cursor.style.height = '30px';
    });
});

// Right-NAV
document.querySelectorAll('.Right-NAV').forEach(item => {
    item.addEventListener('mouseenter', function () {
        const cursor = document.getElementById('custom-cursor');
        const rect = item.getBoundingClientRect();
        cursor.style.transition = 'width 0.2s, height 0.2s, transform 0.2s';
        cursor.style.width = '150px';
        cursor.style.height = '50px';
        cursor.style.borderRadius = '0%';
        cursor.style.transform = `translate(${rect.left + rect.width / 2 - 80}px, ${rect.top + rect.height / 2 - 22}px)`;
        document.removeEventListener('mousemove', moveCursor);
    });
    item.addEventListener('mouseleave', function () {
        const cursor = document.getElementById('custom-cursor');
        cursor.style.transition = 'width 0.2s, height 0.2s, transform 0s';
        cursor.style.width = '30px';
        cursor.style.height = '30px';
        cursor.style.borderRadius = '100%';
        document.addEventListener('mousemove', moveCursor);
    });
});

// ---------------------------------- Journey section -----------------------

document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.timeline-item');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 });

    items.forEach(item => {
        observer.observe(item);
    });
});

// -----------------------------Project section---------------------

function showProject(projectId) {
    // Hide all project details
    document.querySelectorAll('.project-details').forEach(function (project) {
        project.classList.add('hidden');
    });

    // Show the selected project details
    document.getElementById(projectId).classList.remove('hidden');
}

// ----------------------------- Section Slide ------------------------

document.querySelectorAll('.nav-rightSide').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const targetPosition = targetSection.offsetTop;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 100; // Duration in milliseconds
            let start = null;

            window.requestAnimationFrame(step);

            function step(timestamp) {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
                if (progress < duration) {
                    window.requestAnimationFrame(step);
                }
            }

            function easeInOutCubic(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t * t + b;
                t -= 2;
                return c / 2 * (t * t * t + 2) + b;
            }
        }
    });
});
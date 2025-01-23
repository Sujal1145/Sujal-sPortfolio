document.addEventListener('mousemove', function (e) {
    const cursor = document.getElementById('custom-cursor');
    cursor.style.transform = `translate(${e.clientX - cursor.offsetWidth / 2}px, ${e.clientY - cursor.offsetHeight / 2}px)`;
});

document.querySelectorAll('.hover-target').forEach(item => {
    item.addEventListener('mouseenter', function () {
        const cursor = document.getElementById('custom-cursor');
        cursor.style.width = '80px';
        cursor.style.height = '80px';
    });
    item.addEventListener('mouseleave', function () {
        const cursor = document.getElementById('custom-cursor');
        cursor.style.width = '30px';
        cursor.style.height = '30px';
    });
});


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

// ---------------------------------------------

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.remove('hidden-left', 'hidden-right');
        } else {
            if (entry.boundingClientRect.top > 0) {
                entry.target.classList.add('hidden-left');
                entry.target.classList.remove('visible');
            } else {
                entry.target.classList.add('hidden-right');
                entry.target.classList.remove('visible');
            }
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

document.querySelectorAll('.fade-in-left, .fade-in-right').forEach(element => {
    observer.observe(element);
});

// ----------------------------------

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
// -----------------------------------------------
function showProject(projectId) {
    // Hide all project details
    document.querySelectorAll('.project-details').forEach(function (project) {
        project.classList.add('hidden');
    });

    // Show the selected project details
    document.getElementById(projectId).classList.remove('hidden');
}
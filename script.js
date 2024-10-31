function closeModal() {
    const modal = document.getElementById('course-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

function enrollCourse(courseName) {
    location.href = "mailto:octobit.trade@gmail.com?cc=knezevic.karlo1@gmail.com&subject="+courseName;
    closeModal();
}

function contact_lecturer() {
    location.href = "mailto:knezevic.karlo1@gmail.com?cc=octobit.trade@gmail.com";
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('course-modal');
    if (event.target === modal) {
        closeModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});
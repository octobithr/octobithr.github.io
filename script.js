function closeModal() {
    const modal = document.getElementById('course-modal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = '';
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

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach((elem) => {
    observer.observe(elem);
});

// Add smooth parallax effect
window.addEventListener('scroll', () => {
    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach(elem => {
        const speed = elem.dataset.speed || 0.5;
        const yPos = -(window.pageYOffset * speed);
        elem.style.transform = `translateY(${yPos}px)`;
    });
});

// Add scroll progress indicator
const addScrollProgress = () => {
    const indicator = document.createElement('div');
    indicator.className = 'scroll-progress';
    document.body.appendChild(indicator);

    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        indicator.style.width = scrolled + '%';
    });
};

// Add loading states
const addLoadingStates = () => {
    document.querySelectorAll('.course-card').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.add('skeleton-loading');
            setTimeout(() => card.classList.remove('skeleton-loading'), 1000);
        });
    });
};

// Smooth reveal for sections
const revealSections = () => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));
};

// Mobile Navigation
const initMobileNav = () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (!hamburger || !mobileMenu) return;

    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileMenu.classList.toggle('visible');
        document.body.style.overflow = mobileMenu.classList.contains('visible') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('visible');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (mobileMenu.classList.contains('visible') && 
            !mobileMenu.contains(e.target) && 
            !hamburger.contains(e.target)) {
            mobileMenu.classList.remove('visible');
            document.body.style.overflow = '';
        }
    });
};

// Progress Circle Animation
const initProgressCircles = () => {
    const circles = document.querySelectorAll('.progress-circle-container');
    
    circles.forEach(circle => {
        circle.addEventListener('mouseenter', () => {
            const progressCircle = circle.querySelector('.progress-circle');
            progressCircle.classList.add('animate-progress');
        });

        circle.addEventListener('mouseleave', () => {
            const progressCircle = circle.querySelector('.progress-circle');
            progressCircle.classList.remove('animate-progress');
        });
    });
};

// Initialize all features
document.addEventListener('DOMContentLoaded', () => {
    addScrollProgress();
    addLoadingStates();
    revealSections();
    generateCourseCards();
    initMobileNav();
    initProgressCircles();
});

// Update modal generation if you're creating it dynamically
function createModal(content) {
    return `
        <div id="course-modal" class="fixed inset-0 bg-black bg-opacity-50 z-50">
            <div class="modal-content bg-white rounded-lg shadow-xl p-6 relative">
                <button 
                    class="modal-close-btn" 
                    onclick="closeModal()" 
                    type="button"
                    aria-label="Close modal"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
                ${content}
            </div>
        </div>
    `;
}

// Add event listeners for modal closing
document.addEventListener('click', function(event) {
    const modal = document.getElementById('course-modal');
    if (modal && event.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

window.addEventListener("load", function () {
    const typedTextSpan = document.querySelector('.typed-text');
    if (typedTextSpan) {
        new Typed(typedTextSpan, {
            strings: ['Software Developer', 'Data Scientist', 'ML Engineer', 'Problem Solver'],
            typeSpeed: 70,
            backSpeed: 50,
            backDelay: 1500,
            loop: true,
            showCursor: true,
            cursorChar: '|',
        });
    }

    AOS.init({
        offset: 50,
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
    });

    window.hamburg = function () {
        document.querySelector(".dropdown").style.transform = "translateY(0px)";
    };

    window.cancel = function () {
        document.querySelector(".dropdown").style.transform = "translateY(-500px)";
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            const dropdown = document.querySelector(".dropdown");
            if (dropdown && dropdown.style.transform === "translateY(0px)") {
                dropdown.style.transform = "translateY(-500px)";
            }
        });
    });

    const skillsSection = document.getElementById('skills');
    const progressFills = document.querySelectorAll('.progress-fill');

    function animateSkillBars() {
    document.querySelectorAll('.progress-fill').forEach(fill => {
        const progress = fill.getAttribute('data-progress');
        if (progress) {
            fill.style.width = progress;
        }
    });
}


    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    if (skillsSection) {
        observer.observe(skillsSection);
    }
});

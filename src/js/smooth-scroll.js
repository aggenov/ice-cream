/**
 * Scroll to section
 */
function scrollToSection() {
    function smoothScroll(targetEl, duration) {
        let header = document.querySelector('header.header');
        let headerElHeight = header.clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
        const ease = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
        const animation = function (currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);
    };
    const links = document.querySelectorAll('a.js-scroll-to');
    if (links) {
        links.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    }
}
scrollToSection();
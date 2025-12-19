document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo-container');
    
    logo.addEventListener('click', function() {
        // Animate scale up with easing
        this.animate([
            { transform: 'scale(1)' },
            { transform: 'scale(1.1)' }
        ], {
            duration: 200,
            easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
            fill: 'forwards'
        });
        
        // Animate back to normal
        setTimeout(() => {
            this.animate([
                { transform: 'scale(1.1)' },
                { transform: 'scale(1)' }
            ], {
                duration: 300,
                easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
                fill: 'forwards'
            });
        }, 200);
    });
});
// Loader functionality
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('zaraLoader').style.opacity = '0';
        setTimeout(function() {
            document.getElementById('zaraLoader').remove();
        }, 500);
    }, 1000); // Adjust timing as needed
});

/*Scrool button effect */
// Smooth scroll to a target or to the next <section> when #btn is clicked.
// If the button has a data-target attribute (id of an element), it will scroll to that element.
// Otherwise it finds the next <section> below the current scroll position and scrolls to it.
(function() {
    const btn = document.getElementById('btn');
    if (!btn) return;

    btn.addEventListener('click', function(e) {
        e.preventDefault();

        // If the button specifies a target id via data-target, scroll to that element
        const targetId = btn.getAttribute('data-target');
        if (targetId) {
            const el = document.getElementById(targetId);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            return;
        }

        // Otherwise, smooth-scroll to the next <section> element on the page
        const sections = Array.from(document.querySelectorAll('section'));
        if (sections.length === 0) return;

        const currentScroll = window.scrollY || window.pageYOffset;
        // Find the first section whose top is below the current scroll position + 1px
        const next = sections.find(s => (s.getBoundingClientRect().top + currentScroll) > currentScroll + 1);

        // If no next section, scroll to the last section (or you could loop to first)
        const target = next || sections[sections.length - 1];
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
})();

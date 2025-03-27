document.addEventListener('DOMContentLoaded', function() {
    if (typeof jQuery !== 'undefined' && $.fn.counterUp) {
        $('.about-item-heading').counterUp({
            delay: 10,
            time: 2000
        });
    } else {
        console.error("jQuery or counterUp plugin is not loaded.");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    if (typeof jQuery === "undefined") {
        console.error("jQuery is required for counterUp.");
        return;
    }
    
    if (typeof $.fn.counterUp === "undefined") {
        console.error("counterUp plugin is not loaded.");
        return;
    }

    $('.about-2-item-1-heading').counterUp({
        delay: 10,
        time: 2000
    });
});

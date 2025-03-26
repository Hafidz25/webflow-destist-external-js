// Add Swiper CSS dynamically
const swiperCSS = document.createElement('link');
swiperCSS.rel = 'stylesheet';
swiperCSS.href = 'https://unpkg.com/swiper@8/swiper-bundle.min.css';
document.head.appendChild(swiperCSS);

// Load Swiper JS dynamically
const swiperJS = document.createElement('script');
swiperJS.src = 'https://unpkg.com/swiper@8/swiper-bundle.min.js';
document.head.appendChild(swiperJS);

// Initialize everything after resources are loaded
swiperJS.onload = function() {
  // Remove hide-slide class from all slides
  document.addEventListener('DOMContentLoaded', function() {
    var swiperSlides = document.querySelectorAll('.swiper-slide');
    
    swiperSlides.forEach(function(slide) {
      slide.classList.remove('hide-slide');
    });
  });

  // Initialize Swiper
  let photoSwiper = new Swiper(".swiper.is-photos", {
    effect: "cards",
    grabCursor: true,
    loop: false,
    keyboard: true,
    navigation: {
      nextEl: ".arrow.is-right",
      prevEl: ".arrow.is-left"
    },
    on: {
      slideChange: function () {
        let activeIndex = this.activeIndex;

        // Handle text-slide elements
        document.querySelectorAll('.text-slide').forEach(function(text) {
          text.style.opacity = '0';
          text.style.display = 'none';
        });
        let activeText = document.querySelector('.text-slide[data-index="' + activeIndex + '"]');
        if (activeText) {
          activeText.style.opacity = '1';
          activeText.style.display = 'block';
        }
        
        // Handle text-slide-name elements
        document.querySelectorAll('.text-slide-name').forEach(function(text) {
          text.style.opacity = '0';
          text.style.display = 'none';
        });
        let activeTextName = document.querySelector('.text-slide-name[data-index="' + activeIndex + '"]');
        if (activeTextName) {
          activeTextName.style.opacity = '1';
          activeTextName.style.display = 'block';
        }
        
        // Handle text-slide-job elements
        document.querySelectorAll('.text-slide-job').forEach(function(text) {
          text.style.opacity = '0';
          text.style.display = 'none';
        });
        let activeTextJob = document.querySelector('.text-slide-job[data-index="' + activeIndex + '"]');
        if (activeTextJob) {
          activeTextJob.style.opacity = '1';
          activeTextJob.style.display = 'block';
        }
      }
    }
  });

  // Expose goToSlide function globally
  window.goToSlide = function(slideIndex) {
    photoSwiper.slideTo(slideIndex);
  };
};

function navigateSlide(event, sliderCarouselId) {
    event.preventDefault();
    const targetSlide = document.getElementById(sliderCarouselId);
    if (targetSlide) {
      // Hide all slides
      document.querySelectorAll('.carousel-item').forEach(slide => {
        slide.style.display = 'none';
      });
      // Show the target slide
      targetSlide.style.display = 'block';
    }
  }
  
// 

  // Show the first slide initially
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('slide1').style.display = 'block';
  });

//   message

function message(){
  alert("Site under maintenance. Please check back later.")
}
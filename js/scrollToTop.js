function scrollToTop() {
  var container = document.querySelector('.sacrifice');
  if (container) {
      container.scrollTop = 0;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var returnToTopButton = document.querySelector('.return-to-top-button');
  if (returnToTopButton) {
      returnToTopButton.addEventListener('click', function() {
          scrollToTop();
      });
  }
});
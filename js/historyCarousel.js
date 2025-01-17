document.addEventListener("DOMContentLoaded", () => {
  const historyCarouselWrapper = document.querySelector(
    ".history-carousel-wrapper"
  );
  const historyDots = document.querySelectorAll(".history-dot");

  function navigateHistoryCarousel(index) {
    const newPosition =
      -index * historyCarouselWrapper.parentElement.offsetWidth;
    historyCarouselWrapper.style.transform = `translateX(${newPosition}px)`;

    historyDots.forEach((dot, dotIndex) => {
      dot.classList.toggle("active", dotIndex === index);
    });
  }

  historyDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      navigateHistoryCarousel(index);
    });
  });

  navigateHistoryCarousel(0);
});

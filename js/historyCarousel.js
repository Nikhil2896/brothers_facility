document.addEventListener("DOMContentLoaded", () => {
  const historyCarouselWrapper = document.querySelector(
    ".history-carousel-wrapper"
  );
  const historyDots = document.querySelectorAll(".history-dot");
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");
  let currentIndex = 0;

  function navigateHistoryCarousel(index) {
    const newPosition =
      -index * historyCarouselWrapper.parentElement.offsetWidth;
    historyCarouselWrapper.style.transform = `translateX(${newPosition}px)`;

    historyDots.forEach((dot, dotIndex) => {
      dot.classList.toggle("active", dotIndex === index);
    });
  }

  function updateCarousel(direction) {
    const totalItems = historyDots.length;
    if (direction === "left") {
      currentIndex = currentIndex > 0 ? currentIndex - 1 : totalItems - 1;
    } else if (direction === "right") {
      currentIndex = currentIndex < totalItems - 1 ? currentIndex + 1 : 0;
    }
    navigateHistoryCarousel(currentIndex);
  }

  historyDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      navigateHistoryCarousel(index);
    });
  });

  leftArrow.addEventListener("click", () => updateCarousel("left"));
  rightArrow.addEventListener("click", () => updateCarousel("right"));

  navigateHistoryCarousel(0);

  const autoScrollInterval = setInterval(() => {
    updateCarousel("right");
  }, 3000);

  const historyCarousel = document.querySelector(".history-carousel");
  historyCarousel.addEventListener("mouseenter", () => {
    clearInterval(autoScrollInterval);
  });

  historyCarousel.addEventListener("mouseleave", () => {
    setInterval(() => {
      updateCarousel("right");
    }, 5000);
  });
});

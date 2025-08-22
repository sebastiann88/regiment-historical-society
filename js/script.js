const canvasScroll = document.querySelector("canvas.canvas");
const innerContentScroll = document.querySelector("div.inner-content");
const watercolourVideo = document.querySelector('.watercolour-video');

const triggerPoint = window.innerHeight * 3.2; // 320vh in px

window.addEventListener("scroll", () => {
  // ...existing code...

  // Fade out video as you scroll down the first viewport height
  if (watercolourVideo) {
    const fadeStart = 0; // px
    const fadeEnd = window.innerHeight; // px
    const scrollY = window.scrollY;
    let opacity = 1;

    if (scrollY > fadeStart) {
      opacity = 1 - Math.min((scrollY - fadeStart) / (fadeEnd - fadeStart), 1);
    }

    watercolourVideo.style.opacity = opacity;
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > triggerPoint) {
    canvasScroll.classList.add("scroll");
    innerContentScroll.classList.add("scroll");
  } else {
    canvasScroll.classList.remove("scroll");
    innerContentScroll.classList.remove("scroll");
  }
});

// An event listener that refreshes the page when the window resizes
function debounce(func, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

const handleResize = debounce(() => {
  location.reload();
}, 300); // Adjust delay as needed (300ms in this case)

window.addEventListener('resize', handleResize);
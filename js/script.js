const canvasScroll = document.querySelector("canvas.canvas");
const innerContentScroll = document.querySelector("div.inner-content");
const watercolourVideo = document.querySelector('.watercolour-video');
const scrollDown = document.querySelector('.scroll-down');

const triggerPoint = window.innerHeight * 3.2; // 320vh in px

window.addEventListener("scroll", () => {
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

    // Hide video after 320vh
    if (scrollY > triggerPoint) {
      watercolourVideo.style.display = "none";
    } else {
      watercolourVideo.style.display = "";
    }
  }

  // Hide .scroll-down as you scroll down the first viewport height
  if (scrollDown) {
    const fadeStart = 0;
    const fadeEnd = window.innerHeight;
    const scrollY = window.scrollY;
    let opacity = 1;

    if (scrollY > fadeStart) {
      opacity = 1 - Math.min((scrollY - fadeStart) / (fadeEnd - fadeStart), 1);
    }

    scrollDown.style.opacity = opacity;
    scrollDown.style.pointerEvents = opacity === 0 ? "none" : "auto";
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

// Function to detect desktop
function isDesktop() {
  return window.innerWidth >= 1400; // adjust breakpoint as needed
}

// Debounce function
function debounce(func, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

// Function to handle resize
const handleResize = debounce(() => {
  location.reload();
}, 300);

// Only attach the listener if it's desktop
if (isDesktop()) {
  window.addEventListener('resize', handleResize);
}
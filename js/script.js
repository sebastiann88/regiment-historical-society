const canvasScroll = document.querySelector("canvas.canvas");
const innerContentScroll = document.querySelector("div.inner-content");

const triggerPoint = window.innerHeight * 3.2; // 320vh in px

window.addEventListener("scroll", () => {
  if (window.scrollY > triggerPoint) {
    canvasScroll.classList.add("scroll");
    innerContentScroll.classList.add("scroll");
  } else {
    canvasScroll.classList.remove("scroll");
    innerContentScroll.classList.remove("scroll");
  }
});
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin, GSDevTools);

  gsap.defaults({ ease: "none" });

  const pulses = gsap.timeline({
    defaults: {
      scale: 1.5,
      autoAlpha: 1,
      transformOrigin: "center",
      ease: "elastic(2.5, 1)"
    }
  })
    .to(".ball01, .text01", {}, 0.10)
    .to(".ball02, .text02", {}, 0.17)
    .to(".ball03, .text03", {}, 0.25)
    .to(".ball04, .text04", {}, 0.32)
    .to(".ball05, .text05", {}, 0.58)
    .to(".ball06, .text06", {}, 0.66)
    .to(".ball07, .text07", {}, 0.75);

  const line = document.querySelector(".theLine");
  gsap.set(".mainball", { autoAlpha: 1 });
  gsap.set(line, { drawSVG: "0% 0%" });

  const main = gsap.timeline({
    scrollTrigger: {
      trigger: "#timeline",
      scrub: 1.5, // This makes the scroll-driven animation smooth over ~1.5s
      start: "top center",
      end: "bottom center",
      // markers: true
    }
  });

  main.to(".mainball", {
    motionPath: {
      path: ".theLine",
      align: ".theLine",
      alignOrigin: [0.5, 0.5],
      start: 0,
      end: 1
    },
    ease: "none",
    duration: 1, // duration is scroll-driven, so doesn’t matter much
    onUpdate: function () {
      const progress = this.progress();
      gsap.set(line, { drawSVG: `0% ${progress * 100}%` });
    }
  }, 0);

  main.add(pulses, 0);

  // GSDevTools.create({ animation: main, minimal: false });
});
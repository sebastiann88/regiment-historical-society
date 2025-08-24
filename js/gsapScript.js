$(window).on("load", function () {
    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin, GSDevTools);

    gsap.defaults({ ease: "none" });

    const pulsesBalls = gsap.timeline({
      defaults: {
        scale: 1.35,
        autoAlpha: 1,
        transformOrigin: "center",
        ease: "elastic(2.5, 1)"
      }
    })
    .to(".ball01", {}, 0.10)
    .to(".ball02", {}, 0.17)
    .to(".ball03", {}, 0.25)
    .to(".ball04", {}, 0.32)
    .to(".ball05", {}, 0.58)
    .to(".ball06", {}, 0.66)
    .to(".ball07", {}, 0.75);

    const pulsesDates = gsap.timeline({
      defaults: {
        scale: 1.125,
        autoAlpha: 1,
        transformOrigin: "center",
        ease: "elastic(2.5, 1)"
      }
    })
    .to(".date01", {}, 0.10)
    .to(".date02", {}, 0.17)
    .to(".date03", {}, 0.25)
    .to(".date04", {}, 0.32)
    .to(".date05", {}, 0.58)
    .to(".date06", {}, 0.66)
    .to(".date07", {}, 0.75);

    const pulsesEvents = gsap.timeline({
      defaults: {
        autoAlpha: 1,
        transformOrigin: "center",
        ease: "elastic(2.5, 1)"
      }
    })
    .to(".event01", {}, 0.10)
    .to(".event02", {}, 0.17)
    .to(".event03", {}, 0.25)
    .to(".event04", {}, 0.32)
    .to(".event05", {}, 0.58)
    .to(".event06", {}, 0.66)
    .to(".event07", {}, 0.75);

    const pulsesDescriptions = gsap.timeline({
      defaults: {
        autoAlpha: 1,
        transformOrigin: "center",
        ease: "elastic(2.5, 1)"
      }
    })
    .to(".description01", {}, 0.10)
    .to(".description02", {}, 0.17)
    .to(".description03", {}, 0.25)
    .to(".description04", {}, 0.32)
    .to(".description05", {}, 0.58)
    .to(".description06", {}, 0.66)
    .to(".description07", {}, 0.75);

    const line = document.querySelector(".theLine");
    gsap.set(".mainball", { autoAlpha: 1 });
    gsap.set(line, { drawSVG: "0% 0%" });

    const main = gsap.timeline({
      scrollTrigger: {
        trigger: "#timeline",
        scrub: 1.5, // smooth scrubbing
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
      duration: 1,
      onUpdate: function () {
        const progress = this.progress();
        gsap.set(line, { drawSVG: `0% ${progress * 100}%` });
      }
    }, 0);

    main.add(pulsesBalls, 0);
    main.add(pulsesDates, 0);
    main.add(pulsesEvents, 0);
    main.add(pulsesDescriptions, 0);

    ScrollTrigger.refresh();

    // GSDevTools.create({ animation: main, minimal: false });
  });
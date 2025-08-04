gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".lesson").forEach((lesson) => {
    lesson.addEventListener("click", () => {
      const content = lesson.querySelector(".lesson-content");
      content.classList.toggle("hidden");
    });
  });

  gsap.to("#nav", {
    background: "rgba(0, 0, 0)",
    duration: 0.8,
    height: "105px",
    scrollTrigger: {
      //   markers: true,
      trigger: "#nav",
      start: "top -30%",
      end: "bottom -20%",
      scrub: true,
    },
  });


});

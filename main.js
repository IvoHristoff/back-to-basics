window.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("main");
  const clock = document.getElementById("clock");

  setInterval(() => {
    const time = new Date();
    clock.innerHTML = time.toLocaleTimeString([], { hour12: true });
  }, 1000);
  main.style.height = `${screen.height}px`;
  window.addEventListener("resize", () => {
    main.style.height = `${screen.height}px`;
  });
});

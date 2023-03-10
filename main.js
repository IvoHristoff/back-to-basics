window.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("main");
  const clock = document.getElementById("clock");
  setInterval(() => {
    const seconds = new Date();
    clock.innerHTML = seconds.toLocaleString();
  }, 1000);
  main.style.height = `${screen.height}px`;
  window.addEventListener("resize", () => {
    main.style.height = `${screen.height}px`;
  });
});

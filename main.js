window.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("main");
  main.style.height = `${screen.height}px`;
  window.addEventListener("resize", () => {
    main.style.height = `${screen.height}px`;
  });
});

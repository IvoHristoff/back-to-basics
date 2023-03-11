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
const colorPicker = document.getElementById("color-picker");
const textToChange = document.getElementById("text-to-change");
colorPicker.addEventListener("input", () => {
  const color = colorPicker.value;
  textToChange.style.color = color;
});

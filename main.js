window.addEventListener("DOMContentLoaded", () => {
  // init
  const clock = document.getElementById("clock");
  const colorPicker = document.getElementById("color-picker");
  const textToChange = document.getElementById("text-to-change");
  const fontSizeInput = document.getElementById("font-size");

  clock.style.fontSize = fontSizeInput.value;

  const time = new Date();
  clock.innerHTML = time.toLocaleTimeString([], { hour12: true });

  // running logic
  setInterval(() => {
    const time = new Date();
    clock.innerHTML = time.toLocaleTimeString([], { hour12: true });
  }, 1000);

  // event handlers
  colorPicker.addEventListener("input", () => {
    const color = colorPicker.value;
    textToChange.style.color = color;
  });

  fontSizeInput.addEventListener("input", function () {
    clock.style.fontSize = fontSizeInput.value + "px";
  });
});

function switchColors() {
  const body = document.querySelector("body");
  body.classList.toggle("white");
}

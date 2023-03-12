window.addEventListener("DOMContentLoaded", () => {
  // init
  const clock = document.getElementById("clock");
  const colorPicker = document.getElementById("color-picker");
  const textToChange = document.getElementById("text-to-change");
  const fontSizeInput = document.getElementById("font-size");
  const footer = document.querySelector("footer");

  clock.style.fontSize = fontSizeInput.value + "px";

  const time = new Date();
  clock.innerHTML = time.toLocaleTimeString([], { hour12: true });

  const showMessage = document.querySelector(".instruction-message");

  // running logic
  setInterval(() => {
    const time = new Date();
    clock.innerHTML = time.toLocaleTimeString([], { hour12: true });
  }, 1000);

  // event handlers
  footer.addEventListener("mouseover", () => {
    footer.style.opacity = 1;
    showMessage.style.opacity = 0;
  });

  footer.addEventListener("mouseleave", () => {
    footer.style.opacity = 0;
  });

  colorPicker.addEventListener("input", () => {
    const color = colorPicker.value;
    textToChange.style.color = color;
  });

  fontSizeInput.addEventListener("input", () => {
    clock.style.fontSize = fontSizeInput.value + "px";
  });
});

function switchColors() {
  const body = document.querySelector("body");
  body.classList.toggle("white");
}

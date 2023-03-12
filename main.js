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

var fontSizeInput = document.getElementById("font-size");
var textElement = document.getElementById("text");
fontSizeInput.addEventListener("input", function () {
  textElement.style.fontSize = fontSizeInput.value + "px";
});

function switchColors() {
  var body = document.getElementsByTagName("body")[0];
  body.classList.toggle("white");
}

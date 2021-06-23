import "../css/style.scss";
import randomColor from "randomColor";

const rootRef = document.querySelector("#root");

rootRef.insertAdjacentHTML(
  "afterbegin",
  `<button id="button">click me</button><input id="input" type="text" placeholder="write 'NSFW' for fun...">`
);

const buttonRef = document.querySelector("#button");
const inputRef = document.querySelector("#input");
const colors = [];

const colorChange = () => {
  const color = randomColor();
  rootRef.style.backgroundColor = color;
  colors.push(color);
};
const showInput = () => {
  inputRef.style.display = "block";
  setTimeout(() => inputRef.classList.add("active"), 1);
  buttonRef.setAttribute("disabled", "disabled");
  buttonRef.textContent = "clicked";
};

const getValue = () => {
  setTimeout(() => {
    let value = inputRef.value.toUpperCase();
    if (value === "NSFW") {
      const party = setInterval(colorChange, 100);
      setTimeout(() => {
        clearInterval(party);
        rootRef.remove();
        console.log(colors);
      }, 5000);
    }
  }, 1);
};

buttonRef.addEventListener("mouseover", colorChange);
buttonRef.addEventListener("mouseout", colorChange);
buttonRef.addEventListener("click", showInput);
inputRef.addEventListener("keydown", getValue);

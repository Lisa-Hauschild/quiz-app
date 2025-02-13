//Toggledarkmode

//const ToggleButton = document.querySelector('[data-js="toggle-button"]');

//ToggleButton.addEventListener("click", () => {
// bodyElement.classList.toggle("dark");
//});

// change color of bookmark
const bookmarkButton = document.querySelector('["data-js-bookmark__icon"]');

bookmarkButton.addEventListener("click", () => {
  bodyElement.classList.toggle("clicked");
});

//const bookmarkButton = document.querySelector('[data-js-bookmark__icon__active"]');
//bookmarkButton.addEventListener("click", () => {
//   SVGElement.classList.add("dark");

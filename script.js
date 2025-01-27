let addBtn = document.querySelector(".add");

let digivolutions = ["agumon", "gommamon", "izzy", "Emma", "Veronica"];

let randomNumber = Math.floor(Math.random() * digivolutions.length);

let choice = digivolutions[randomNumber];

addBtn.addEventListener("click", function () {
  alert(choice);
});

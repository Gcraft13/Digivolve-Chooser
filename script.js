const addBtn = document.querySelector(".add");
const makeDigiBtn = document.querySelector(".makeDigimon");
const input = document.getElementById("addName");
const form = document.querySelector("form");
const newPartner = document.querySelector("#new-digimon");

let digivolutions = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let digiName = input.value;
  digivolutions.push(digiName);
  input.value = "";
  console.log(digivolutions);
});

makeDigiBtn.addEventListener("click", function () {
  let randomNumber = Math.floor(Math.random() * digivolutions.length);
  let choice = digivolutions[randomNumber];
  newPartner.innerHTML = choice;
});

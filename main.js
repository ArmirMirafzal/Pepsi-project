const bluePepsi = document.querySelector(".blue-pepsi");
const whitePepsi = document.querySelector(".white-pepsi");
const blackPepsi = document.querySelector(".black-pepsi");
const pepsi1 = document.querySelector("#pepsi-1");
const pepsi2 = document.querySelector("#pepsi-2");
const pepsi3 = document.querySelector("#pepsi-3");
const mainBtn = document.querySelector(".main-btn");

function addRemoveHidden(add1, add2, remove, color) {
  add1.classList.add("hidden");
  add2.classList.add("hidden");
  remove.classList.remove("hidden");
  document.body.style.background = color;
}

bluePepsi.addEventListener("click", () => {
  addRemoveHidden(pepsi2, pepsi3, pepsi1, "#0062be");
});

whitePepsi.addEventListener("click", () => {
  addRemoveHidden(pepsi1, pepsi3, pepsi2, "rgb(230,12,45)");
});

blackPepsi.addEventListener("click", () => {
  addRemoveHidden(pepsi1, pepsi2, pepsi3, "rgb(31,30,31)");
});

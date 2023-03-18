const bluePepsi = document.querySelector(".blue-pepsi");
const whitePepsi = document.querySelector(".white-pepsi");
const blackPepsi = document.querySelector(".black-pepsi");
const bluePepsi1 = document.querySelector(".footer .blue-pepsi");
const whitePepsi1 = document.querySelector(".footer .white-pepsi");
const blackPepsi1 = document.querySelector(".footer .black-pepsi");
const pepsi1 = document.querySelector("#pepsi-1");
const pepsi2 = document.querySelector("#pepsi-2");
const pepsi3 = document.querySelector("#pepsi-3");
const mainBtn = document.querySelector(".main-btn");
const bar = document.querySelector(".bar i");
const dropdown = document.querySelector(".dropdown");

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

bluePepsi1.addEventListener("click", () => {
  addRemoveHidden(pepsi2, pepsi3, pepsi1, "#0062be");
});

whitePepsi1.addEventListener("click", () => {
  addRemoveHidden(pepsi1, pepsi3, pepsi2, "rgb(230,12,45)");
});

blackPepsi1.addEventListener("click", () => {
  addRemoveHidden(pepsi1, pepsi2, pepsi3, "rgb(31,30,31)");
});

bar.addEventListener("click", () => {
  const isOpen = dropdown.classList.toggle("open");
  bar.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars-staggered";
});

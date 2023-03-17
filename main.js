const bluePepsi = document.querySelector(".blue-pepsi");
const whitePepsi = document.querySelector(".white-pepsi");
const blackPepsi = document.querySelector(".black-pepsi");
const pepsi1 = document.querySelector("#pepsi-1");
const pepsi2 = document.querySelector("#pepsi-2");
const pepsi3 = document.querySelector("#pepsi-3");

bluePepsi.addEventListener("click", () => {
  pepsi1.classList.remove("hidden");
  pepsi3.classList.add("hidden");
  pepsi2.classList.add("hidden");
  document.body.style.background = "#0062be";
});

whitePepsi.addEventListener("click", () => {
  pepsi1.classList.add("hidden");
  pepsi3.classList.add("hidden");
  pepsi2.classList.remove("hidden");
  document.body.style.background = "rgb(230,12,45)";
});

blackPepsi.addEventListener("click", () => {
  pepsi1.classList.add("hidden");
  pepsi2.classList.add("hidden");
  pepsi3.classList.remove("hidden");
  document.body.style.background = "rgb(31,30,31)";
});

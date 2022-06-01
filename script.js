"use strict";

let btnChange = document.querySelector("#btn-change");
let rotate = false;

btnChange.addEventListener("click", function () {
  console.log("click");
  if (!rotate) {
    btnChange.style.transform = "rotateZ(360deg)";
    rotate = !rotate;
    document.querySelector(".card-body").classList.add("vertical");
    document.querySelector(".card-body").classList.remove("horizontal");
    document.querySelector(".card-container").classList.remove("max-w-sm");
    document.querySelector(".card-container").classList.add("max-w-vertical");
  } else {
    btnChange.style.transform = "rotateZ(0deg)";
    rotate = !rotate;
    document.querySelector(".card-body").classList.add("horizontal");
    document.querySelector(".card-body").classList.remove("vertical");
    document.querySelector(".card-container").classList.add("max-w-sm");
    document
      .querySelector(".card-container")
      .classList.remove("max-w-vertical");
  }
});

"use strict";

const counter = document.querySelector(".counter");
const final = document.querySelector(".final");
const replay = document.getElementById("replay");

const counterNums = document.querySelectorAll(".nums span");


function playAnimation() {

  counterNums.forEach((num, i) => {

    const numAnim = setInterval(() => {
      num.classList.add("in");

      num.addEventListener("animationend", () => {
        num.classList.remove("in");
        num.classList.add("out");
      });

      clearInterval(numAnim);

    }, 1000 * i);

    num.addEventListener("animationend", () => {
      if (num.textContent == 0) {
        final.classList.add("show");
        counter.classList.add("hide");
      }
    });

  });

}

replay.addEventListener("click", () => {

  counterNums.forEach(num => {
    num.classList.value = "";
  });
  final.classList.remove("show");
  counter.classList.remove("hide");

  playAnimation();

});
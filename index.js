"use strict";

const form = document.querySelector(".form");
const ratingInputs = document.querySelectorAll('.form input[type="radio"]');
const ratingSection = document.querySelector(".rating-section");
const thankYouSection = document.querySelector(".thank-you-section");
const selectedSpan = document.querySelector(".selected-rating span");

let currentRating;

const ifSelected = (event) => {
  ratingInputs.forEach((input) => {
    input.classList.remove("selected");
  });

  const radio = event.target;

  if (radio.checked) {
    radio.parentElement.classList.add("selected");
    currentRating = radio.value;
  }
};

const updateForm = (event) => {
  event.preventDefault();

  if (currentRating) {
    selectedSpan.textContent = currentRating;
    ratingSection.classList.add("hidden");
    thankYouSection.classList.remove("hidden");
  } else {
    alert("Option required.");
  }
};

ratingInputs.forEach((radio) => radio.addEventListener("change", ifSelected));
form.addEventListener("submit", updateForm);

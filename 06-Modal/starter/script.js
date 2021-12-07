"use strict";

const modals = document.querySelectorAll(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelectorAll(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

const closeModal = function (e) {
    for (let i = 0; i < modals.length; i++) {
        modals[i].classList.add("hidden");
        overlay.classList.add("hidden");
    }
};

for (let i = 0; i < btnOpenModal.length; i++) {
    btnOpenModal[i].addEventListener("click", function () {
        modals[i].classList.remove("hidden");
        overlay.classList.remove("hidden");
    });
    btnCloseModal[i].addEventListener("click", closeModal);
}

overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeModal();
});

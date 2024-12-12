import { topTexts, bottomTexts } from "./constants.js";
// Carusel
const items = document.querySelectorAll(".carusel-item");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const topTextElement = document.getElementById("text-top");
const bottomTextElement = document.getElementById("text-bottom");

let currentIndex = 0;

arrowRight.addEventListener("click", () => {
  if (currentIndex >= 2) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  topTextElement.textContent = topTexts[currentIndex];
  bottomTextElement.textContent = bottomTexts[currentIndex];
  items.forEach((item) => {
    if (item.classList.contains("carusel-item-center")) {
      item.classList.remove("carusel-item-center");
      item.classList.add("carusel-item-right");
    } else if (item.classList.contains("carusel-item-left")) {
      item.classList.remove("carusel-item-left");
      item.classList.add("carusel-item-center");
    } else if (item.classList.contains("carusel-item-right")) {
      item.classList.remove("carusel-item-right");
      item.classList.add("carusel-item-left");
    }
  });
});
arrowLeft.addEventListener("click", () => {
  if (currentIndex <= 0) {
    currentIndex = 2;
  } else {
    currentIndex--;
  }
  topTextElement.textContent = topTexts[currentIndex];
  bottomTextElement.textContent = bottomTexts[currentIndex];
  items.forEach((item) => {
    if (item.classList.contains("carusel-item-center")) {
      item.classList.remove("carusel-item-center");
      item.classList.add("carusel-item-left");
    } else if (item.classList.contains("carusel-item-left")) {
      item.classList.remove("carusel-item-left");
      item.classList.add("carusel-item-right");
    } else if (item.classList.contains("carusel-item-right")) {
      item.classList.remove("carusel-item-right");
      item.classList.add("carusel-item-center");
    }
  });
});

// Circle focused
const leftSigment = document.querySelector(".left-sigment");
const rightSigment = document.querySelector(".right-sigment");
const topSigment = document.querySelector(".top-sigment");
const bottomSigment = document.querySelector(".bottom-sigment");
const center = document.querySelector(".center");

const topText = document.querySelector(".top-text");
const rightText = document.querySelector(".right-text");
const bottomText = document.querySelector(".bottom-text");
const leftText = document.querySelector(".left-text");

const selectedText = (position) => {
  if (position === "top") return topText;

  if (position === "right") return rightText;

  if (position === "bottom") return bottomText;

  if (position === "left") return leftText;
};

const addHoverEffectSigment = (sigment, coordinates, axis, position) => {
  sigment.addEventListener("mouseover", () => {
    sigment.style.transform = `translate${axis}(${coordinates}px)`;
    selectedText(
      position
    ).style.transform = `translate${axis}(${coordinates}px)`;
  });

  sigment.addEventListener("mouseleave", () => {
    sigment.style.transform = `translate${axis}(0px)`;
    selectedText(position).style.transform = `translate${axis}(0px)`;
  });
};

addHoverEffectSigment(leftSigment, -10, "X", "left");
addHoverEffectSigment(rightSigment, 10, "X", "right");
addHoverEffectSigment(topSigment, -10, "Y", "top");
addHoverEffectSigment(bottomSigment, 10, "Y", "bottom");

center.addEventListener("mouseover", () => {
  leftSigment.style.transform = `translateX(-10px)`;
  rightSigment.style.transform = `translateX(10px)`;
  topSigment.style.transform = `translateY(-10px)`;
  bottomSigment.style.transform = `translateY(10px)`;
  leftText.style.transform = `translateX(-10px)`;
  rightText.style.transform = `translateX(10px)`;
  topText.style.transform = `translateY(-10px)`;
  bottomText.style.transform = `translateY(10px)`;
});

center.addEventListener("mouseleave", () => {
  leftSigment.style.transform = `translateX(0px)`;
  rightSigment.style.transform = `translateX(0px)`;
  topSigment.style.transform = `translateY(0px)`;
  bottomSigment.style.transform = `translateY(0px)`;
  leftText.style.transform = `translateX(0px)`;
  rightText.style.transform = `translateX(0px)`;
  topText.style.transform = `translateY(0px)`;
  bottomText.style.transform = `translateY(0px)`;
});

// Show messages when scrolling
const messages = document.querySelectorAll(".message-wrapper");

function checkBlocksVisibility() {
  const windowHeight = window.innerHeight;

  messages.forEach((message) => {
    const blockPosition = message.getBoundingClientRect().top;

    if (blockPosition < windowHeight - 200) {
      message.style.opacity = "1";
      message.style.transform = "translateX(0)";
    }
  });
}

checkBlocksVisibility();

window.addEventListener("scroll", function () {
  checkBlocksVisibility();
});

// Disable button if required form fields are empty
const form = document.getElementById("contactForm");
const button = document.querySelector(".btn-coop");

function toggleButtonState() {
  const isFormValid = form.checkValidity();
  button.disabled = !isFormValid;

  if (button.disabled) {
    button.classList.add("btn-coop-disabled");
  } else {
    button.classList.remove("btn-coop-disabled");
  }
}

form.addEventListener("input", toggleButtonState);
form.addEventListener("change", toggleButtonState);

document.addEventListener("DOMContentLoaded", function () {
  const phoneInput = document.getElementById("phone");

  let oldValue = "";

  phoneInput.addEventListener("input", function () {
    maskPhone(this, oldValue); // Передаем старое значение
    oldValue = this.value; // Обновляем старое значение
  });

  function maskPhone(input, oldValue) {
    // Удаляем все символы, кроме цифр
    let value = input.value.replace(/\D/g, "");
    const formattedOldValue = oldValue.replace(/\D/g, "");

    // Ограничиваем длину до 11 цифр (включая код страны)
    if (value.length > 11) {
      value = value.slice(0, 11);
    }

    let formattedValue = "+7";

    if (formattedOldValue.length < value.length) {
      if (value.length > 1) {
        formattedValue += " (" + value.substring(1, 4);
      }
      if (value.length >= 4) {
        formattedValue += ") " + value.substring(4, 7);
      }
      if (value.length >= 7) {
        formattedValue += "-" + value.substring(7, 9);
      }
      if (value.length >= 9) {
        formattedValue += "-" + value.substring(9, 11);
      }
    }

    // Обновляем значение поля ввода
    input.value = formattedValue !== "+7" ? formattedValue : input.value;
  }
});

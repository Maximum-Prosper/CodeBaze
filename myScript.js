let radioBtns = document.querySelectorAll(".radioBtn");
let containers = document.querySelectorAll(".container");
let textInputs = document.querySelectorAll("input[type='text']");
let emailInput = document.querySelector("input[type='email']");
let checkBox = document.getElementById("checkbox");
let formField = document.getElementById("form");
let messageInput = document.getElementById("textarea");
let submitBtn = document.getElementById("sBtn");

radioBtns.forEach(radioBtn => {
    radioBtn.addEventListener('change', () => {
      // Reset background color for all divs
     containers.forEach(container => container.style.backgroundColor = '');

      radioBtn.closest('.container').style.backgroundColor = 'rgb(153, 71, 230)';
    });
  });
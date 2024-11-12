let controls = document.querySelectorAll(".controlIcons");
let answers = document.querySelectorAll(".answers");
let questions = document.querySelectorAll(".FAQs");

// Initially hide all answers
answers.forEach((answer) => {
  answer.classList.add("hidden");
});

function render(index) {
  // Check if the selected answer is currently visible
  if (!answers[index].classList.contains("hidden")) {
    // If it is visible, hide it and reset the control icon to the plus symbol
    answers[index].classList.add("hidden");
    controls[index].src = "images/icon-plus.svg";
  } else {
    // If it is hidden, hide all answers first
    answers.forEach((answer) => {
      answer.classList.add("hidden");
    });

    // Reset all control icons to the plus symbol
    controls.forEach((control) => {
      control.src = "images/icon-plus.svg";
    });

    // Show the selected answer and change the icon to the minus symbol
    answers[index].classList.remove("hidden");
    controls[index].src = "images/icon-minus.svg";
  }
}

controls.forEach((control, index) => {
  control.addEventListener("click", () => {
    render(index);
  });
});

questions.forEach((question, index) => {
  question.addEventListener("click", () => render(index));
});

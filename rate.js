let card = document.getElementById("rateCard");
let getImage = document.getElementById("star");
let getHeading = document.getElementById("intro");
let getDemo = document.getElementById("demo");
let getParagraph = document.getElementById("pgh");
let getRates = document.querySelectorAll(".rates");
let submitBtn = document.getElementById("submitBtn");
let successImage = document.getElementById("success_img");
let rateSpace = document.getElementById("rateContainer");
let errorMsg = document.getElementById("retry");
let myDiv =  document.querySelectorAll('.div');

let isClicked = false;
let selectedRateIndex = null;

function getRate(index) {
  getRates.forEach((rate) => {
    rate.classList.remove("bg-color");
  });
  getRates[index].classList.add("bg-color");
  selectedRateIndex = index;
  isClicked = true;
}

getRates.forEach((rate, index) => {
  rate.addEventListener("click", () => {
    getRate(index);
  });
});

function getFeedBack() {
  card.classList.add("checkCard");
  getImage.style.display = "none";
  successImage.style.display = "block";
  getDemo.style.display = "block";
  getDemo.innerHTML = `You selected ${selectedRateIndex + 1} out of 5`;
  getHeading.innerHTML = "Thank You!";
  getParagraph.textContent =
    " We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!";
  submitBtn.style.display = "none";
  rateSpace.style.display = "none";
  errorMsg.style.display = "none";
}

submitBtn.addEventListener("click", () => {
  if (isClicked) {
    getFeedBack();
  } else {
    errorMsg.style.display = "block";
  }
});


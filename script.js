const submitBtn = document.querySelector("#submit-btn");
const userInput = document.querySelector("#email");
const errorIcon = document.querySelector(".error-icon");
const errorMsg = document.querySelector(".error-msg");

function signUp(event) {
  if (!userInput.value.includes("@")) {
    event.preventDefault();
    errorMsg.removeAttribute("class", "hidden");
    errorIcon.removeAttribute("class", "hidden");
    errorMsg.setAttribute("class", "error-msg");
    errorIcon.setAttribute("class", "error-icon");
    //errorIcon.style.display = "block";
    //errorMsg.style.display = "block";
  }
}

submitBtn.addEventListener("click", signUp);

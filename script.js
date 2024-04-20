const submitBtn = document.querySelector("#submit-btn");
const userInput = document.querySelector("#email");
const errorIcon = document.querySelector(".error-icon");
const errorMsg = document.querySelector(".error-msg")

function signUp(event) {
if (!userInput.value.includes("@")) {
// errorMsg.removeAttribute("class", "hidden");
//errorIcon.removeAttribute("class", "hidden");
errorIcon.style.display = "block";
errorMsg.style.display = "block";
} 
}

submitBtn.addEventListener("click", signUp);
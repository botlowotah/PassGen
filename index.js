const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const btnEl = document.querySelector(".btn");
const alertContainerEl = document.querySelector(".alert-container");

btnEl.addEventListener("click", () => {
  createPassword();
});

copyIconEl.addEventListener("click", () => {
  copyPassword();
  if (inputEl.value) { 
    alertContainerEl.classList.remove("active");
    setTimeout(() => {
      alertContainerEl.classList.add("active");
    }, 2000);
  }
});

function createPassword() {
  const simboliai =
    "0123456789abcdefghijklmnopqrstuvwzyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLength = 14; 
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomNum = Math.floor(Math.random() * simboliai.length);
    password += simboliai.substring(randomNum, randomNum + 1);
  }
  inputEl.value = password;
}

function copyPassword() {
  inputEl.select();
  navigator.clipboard.writeText(inputEl.value);
}
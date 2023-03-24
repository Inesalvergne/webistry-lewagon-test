const valid = (email) => {
  const regex = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);
  return regex.test(email);
};

const inputEmail = document.querySelector("#inputEmail");
const emailValidation = document.querySelector("#emailValidation");
const inputName = document.querySelector("#inputName");
const nameValidation = document.querySelector("#nameValidation");
const checkAccuracy = document.querySelector("#checkAccuracy");
const checkboxValidation = document.querySelector("#checkboxValidation");

const validation = () => {
  if (inputName.value === "" && valid(inputEmail.value) === false && checkAccuracy.checked === false) {
    emailValidation.classList.remove("d-none");
    inputEmail.classList.add("not-valid");
    nameValidation.classList.remove("d-none");
    inputName.classList.add("not-valid");
    checkboxValidation.classList.remove("d-none");
  } else if (valid(inputEmail.value) === false) {
    emailValidation.classList.remove("d-none");
    inputEmail.classList.add("not-valid");
  } else if (inputName.value === "") {
    nameValidation.classList.remove("d-none");
    inputName.classList.add("not-valid");
  } else if (checkAccuracy.checked === false) {
    checkboxValidation.classList.remove("d-none");
  }
  return true;
};

const welcomeForm = document.querySelector("#welcome-form");
const formTitle = document.querySelector("#form-title");
const successTag = `<p> <span> Success!</span> You're all set. </p>`;
const container = document.querySelector(".container");
welcomeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(checkAccuracy.checked);
  // validation();
  if (validation()) {
    welcomeForm.remove();
    formTitle.remove();
    container.insertAdjacentHTML("afterbegin", successTag);
  }
});

const valid = (email) => {
  const regex = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);
  return regex.test(email);
};

const welcomeForm = document.querySelector("#welcome-form");
welcomeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputEmail = document.querySelector("#inputEmail");
  const emailValidation = document.querySelector("#emailValidation");
  const inputName = document.querySelector("#inputName");
  const nameValidation = document.querySelector("#nameValidation");
  if (inputName.value === "" && valid(inputEmail.value) === false) {
    emailValidation.classList.remove("d-none");
    inputEmail.classList.add("not-valid");
    nameValidation.classList.remove("d-none");
    inputName.classList.add("not-valid");
  } else if (valid(inputEmail.value) === false) {
    emailValidation.classList.remove("d-none");
    inputEmail.classList.add("not-valid");
  } else if (inputName.value === "") {
    nameValidation.classList.remove("d-none");
    inputName.classList.add("not-valid");
  }
});

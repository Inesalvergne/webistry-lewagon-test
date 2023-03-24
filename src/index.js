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
  } else {
    return true;
  }
};

const sendMessage = (message) => {
  fetch("https://portal.webistry.com/lewagon-challenge", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ full_name: message.name, coding_language: "Ruby" })
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data);
    });
};

// const welcomeForm = document.querySelector("#welcome-form");
const welcomeForm = document.getElementById("welcome-form");
const submitBtn = document.querySelector(".btn");
const formTitle = document.querySelector("#form-title");
const container = document.querySelector(".container");
welcomeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (validation()) {
    welcomeForm.remove();
    formTitle.remove();
    const formData = new FormData(welcomeForm);
    const message = Object.fromEntries(formData);
    const dropdown = document.getElementById("programmingLanguage");
    console.log(dropdown);
    console.log(message);
    // sendMessage(message);
    const successTag = `<p id="success-message"><span class="green-text">Success, ${message.name}!</span> You're all set.</p>`;
    container.insertAdjacentHTML("afterbegin", successTag);
  }
});

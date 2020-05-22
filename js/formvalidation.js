/* FORM VALIDATION */

const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();
  console.log("Submitted");

  const firstName = document.querySelector("#firstname");
  const firstNameError = document.querySelector("#firstname-error");
  const firstNameValue = firstName.value;

  const lastName = document.querySelector("#lastname");
  const lastNameError = document.querySelector("#lastname-error");
  const lastNameValue = lastName.value;

  const email = document.querySelector("#email");
  const emailError = document.querySelector("#email-error");
  const invalideEmailError = document.querySelector("#invalide-email-error");
  const emailValue = email.value;

  const message = document.querySelector("#message");
  const messageError = document.querySelector("#message-error");
  const messageValue = message.value;

  const errorContactForm = document.querySelector(".contact-form-error");
  const correctContactForm = document.querySelector(".contact-form-correct");

  if (checkInputLength(firstNameValue) === true) {
    firstName.style.border = "2px solid #9BF09D";
  } else {
    firstName.style.border = "2px solid #ffcccb";
  }

  if (checkInputLength(lastNameValue) === true) {
    lastName.style.border = "2px solid #9BF09D";
  } else {
    lastName.style.border = "2px solid #ffcccb";
  }

  if (validateEmail(emailValue) === true) {
    email.style.border = "2px solid #9BF09D";
  } else {
    email.style.border = "2px solid #ffcccb";
  }

  if (checkInputLength(messageValue) === true) {
    message.style.border = "2px solid #9BF09D";
  } else {
    message.style.border = "2px solid #ffcccb";
  }

  if (
    checkInputLength(firstNameValue) &&
    checkInputLength(lastNameValue) &&
    checkInputLength(emailValue) &&
    validateEmail(emailValue) &&
    checkInputLength(messageValue)
  ) {
    correctContactForm.style.cssText = "display: block";
    errorContactForm.style.display = "none";
  } else {
    correctContactForm.style.cssText = "display: none";
    errorContactForm.style.display = "block";
  }
}

function checkInputLength(value) {
  const trimmedValue = value.trim();

  if (trimmedValue.length > 0) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  return regEx.test(email);
}

const submitBtn = document.querySelector(".form-submit");
const email = document.querySelector(".form-email");
const ErrorMsg = document.querySelector(".form-errortext");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const emailValue = email.value.trim();

  if (emailValue === "") showError();
  else removeError();

  if (!isValidEmail(emailValue)) {
    showError();
    showEmailError();
  } else {
    removeError();
    email.value = "";
    document.querySelector(".form-email").placeholder = "Your email address...";
  }
});

//===================== show error=======================
const showError = () => {
  ErrorMsg.classList.add("show");
  email.classList.add("inputBox-error");
};

//===================== show email error=======================
const showEmailError = () => {
  let emailValue = email.value;
  if (emailValue) email.placeholder = emailValue;
  email.value = "";
};

//===================== email validate=======================
const isValidEmail = (email) => {
  const regx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regx.test(String(email).toLowerCase());
};

//===================== remove error=======================
const removeError = () => {
  ErrorMsg.classList.remove("show");
  email.classList.remove("inputBox-error");
};

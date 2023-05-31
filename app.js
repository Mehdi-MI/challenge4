const submit = document.querySelector(".submit");
const userinput = document.querySelector(".input");
const error = document.querySelector(".error");
const gg = document.querySelector(".gg");
const getback = document.querySelector(".getback");
const Subscribe = document.querySelector(".Subscribe");
const message = document.querySelector(".message");

const regex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

submit.addEventListener("click", () => {
  if (userinput.value === "" || !regex.test(userinput.value)) {
    error.style.display = "block";
    userinput.classList.add("error-input");
    userinput.style.color = "hsl(4, 100%, 67%)";
  } else {
    Subscribe.style.display = "none";
    gg.style.display = "block";
    message.innerHTML = userinput.value;
  }
});

getback.addEventListener("click", () => {
  Subscribe.style.display = "block";
  gg.style.display = "none";
  userinput.value = "";
});

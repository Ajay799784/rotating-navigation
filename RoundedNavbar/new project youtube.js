const form = document.getElementById("form");
console.log(form);
const uname = document.getElementsByClassName("uname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm = document.getElementById("confirm");
console.log(uname);
console.log(email);
console.log(password);
console.log(confirm);
form.addEventListener("ajay", (e) => {
  e.preventDefault();
  ValidityState();
});

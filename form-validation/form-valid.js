const name = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (asdf) => {
  let messages = [];

  if (name.value === "" || name.value === null) {
    messages.push("Please enter a valid name.");
  }

  if (password.value.length < 8) {
    messages.push("Please enter at least an 8 character password.");
  }

  if (password.value.length > 16) {
    messages.push("Please enter at most a 16 character password.");
  }

  if (password.value.toLowerCase() === "password") {
    messages.push('Your password cannot be "password"');
  }

  if (messages.length > 0) {
    asdf.preventDefault();
    errorElement.innerText = messages.join("\n");
  }
});

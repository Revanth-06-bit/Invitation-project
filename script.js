function checkPassword() {
  const password = document.getElementById("passwordInput").value;
  const correctPassword = "1050002526"; // Change this to your password
  const content = document.getElementById("invitationContent");
  const error = document.getElementById("errorMessage");

  if (password === correctPassword) {
    content.classList.remove("hidden");
    document.querySelector(".container").style.display = "none";
  } else {
    error.textContent = "Incorrect password. Try again.";
  }
}


const contactForm  = document.getElementById("contactForm")
const footerForm = document.getElementById("footerForm");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm()
});

footerForm.addEventListener("submit", (e) => {
    e.preventDefault()
    validateForm()
})

function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const textArea = document.getElementById("textArea").value;

  if (!name || !email || !subject || !textArea) {
    alert("Please fill all fields");
    return false;
  }

  return true
}

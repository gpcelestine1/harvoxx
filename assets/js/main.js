const contactForm = document.getElementById("contactForm");
const footerForm = document.getElementById("footerForm");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
});

footerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
});

function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const textArea = document.getElementById("textArea").value;

  if (!name || !email || !subject || !textArea) {
    alert("Please fill all fields");
    return false;
  }

  return true;
}

// const openBtn = document.getElementById("open");
// const closeBtn = document.getElementById("close");

// openBtn.addEventListener("click", () => {
//   menu.style.display = "block";
// });

// closeBtn.addEventListener("click", () => {
//   menu.style.display = "none";
// })

// method to control the menu
// testMenu.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const current = e.currentTarget.classList;
//     if (current.contains("fa-bars")) {
//       menu.style.display = "block";
//     } else {
//       menu.style.display = "none";
//     }
//   });
// });

// menu variables
const testMenu = document.querySelectorAll(".menu");
const menu = document.getElementById("navListMenu");
const closeIcon = document.getElementById("close");
const openIcon = document.getElementById("open");

// method to control the menu / open and close icon
testMenu.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const current = e.currentTarget.classList;

    // menu control structure
    if (current.contains("fa-bars")) {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }

    // menu buttion control structure section
    // to close the open button
    if (current.contains("fa-bars")) {
      openIcon.style.display = "none";
    }

    // removing the close buttion from the initial display of none
    if (current.contains("fa-bars")) {
      closeIcon.style.display = "block";
    }

    // to close the close button
    if (current.contains("fa-xmark")) {
      closeIcon.style.display = "none";
    }

    // to open the open button
    if (current.contains("fa-xmark")) {
      openIcon.style.display = "block";
    }
  });
});

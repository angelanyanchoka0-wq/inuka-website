// Console log
console.log("Inuka Self Help Group website loaded");

function openImage(src) {
  document.getElementById("imageModal").style.display = "flex";
  document.getElementById("modalImg").src = src;
}

function closeImage() {
  document.getElementById("imageModal").style.display = "none";
}


document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registerForm");
  const message = document.getElementById("message");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        gender: document.getElementById("gender").value,
        reason: document.getElementById("reason").value
      };

      fetch("https://script.google.com/macros/s/AKfycbz68BY7J0-mkVFTn_Wibl80XmtMeeYufCCosWhLRC332IvAJ918KlXuOZ1wb4zT5rKO/exec", {
        method: "POST",
        body: JSON.stringify(data),
      })
      .then(() => {
        message.textContent = "Registration successful!";
        message.style.color = "green";
        form.reset();
      })
      .catch(() => {
        message.textContent = "Error submitting form";
        message.style.color = "red";
      });
    });
  }

  
  const adminForm = document.getElementById("adminForm");
  const adminMessage = document.getElementById("adminMessage");
  const ADMIN_PASSWORD = "steward"; 

  if (adminForm) {
    adminForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const pass = document.getElementById("adminPass").value;
      if (pass === ADMIN_PASSWORD) {
        window.location.href =
          "https://docs.google.com/spreadsheets/d/1MBtz-CjccuNK76ZuKpv6v9XmoEuzConZuzqt8OTYTKs/edit?gid=0#gid=0";
      } else {
        adminMessage.textContent = "Incorrect password";
        adminMessage.style.color = "red";
      }
    });
  }
});
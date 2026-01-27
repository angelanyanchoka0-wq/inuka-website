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
      fetch( "<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf4nPuOg6N4zjJEYFkwlYBLgthN-vmrqKvb9yFZ1xeBXIAVfQ/viewform?embedded=true" width="640" height="1022" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>", {
  method: "POST",
  mode: "no-cors", 
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
})
.then(() => {
  message.textContent = "✅ Registration successful!";
  message.style.color = "green";
  form.reset();
})
.catch(() => {
  message.textContent = "❌ Error submitting form";
  message.style.color = "red";
});

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



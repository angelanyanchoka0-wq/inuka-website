console.log("Inuka website loaded");
 IMAGE GALLERY
function openImage(src) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");

  if (modal && modalImg) {
    modal.style.display = "flex";
    modalImg.src = src;
  }
}

function closeImage() {
  const modal = document.getElementById("imageModal");
  if (modal) {
    modal.style.display = "none";
  }
}
   ADMIN LOGIN
function checkPassword() {
  const password = document.getElementById("adminPass").value;
  const message = document.getElementById("adminMessage");

  const ADMIN_PASSWORD = "inuka123";
  const SHEET_URL =
    "https://docs.google.com/spreadsheets/d/1aeEjnQnApOtfHoTY4SDsosp8_ZWEmGMtGzFaRBArMLU/edit?resourcekey=&gid=1289998505#gid=1289998505";

  if (password === ADMIN_PASSWORD) {
    message.textContent = "Login successful";
    message.style.color = "green";
    window.open(SHEET_URL, "_blank");
  } else {
    message.textContent = "Wrong password";
    message.style.color = "red";
  }
}



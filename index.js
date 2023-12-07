let isDarkMode = false;
const darkModeBtn = document.getElementById("darkBtn");

darkModeBtn.addEventListener("click", toggleDarkMode);

function toggleDarkMode() {
  const items = document.querySelectorAll(".light, .dark");

  items.forEach((item) => {
    item.classList.toggle("dark", !isDarkMode);
    item.classList.toggle("light", isDarkMode);
  });

  isDarkMode = !isDarkMode;
}
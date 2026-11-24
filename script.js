// Mobile navigation menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the mobile menu after choosing a section
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Dark mode with saved preference
const themeToggle = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeToggle.textContent = "☀";
  themeToggle.setAttribute("aria-label", "Switch to light mode");
}

themeToggle.addEventListener("click", () => {
  const darkModeOn = document.body.classList.toggle("dark");
  localStorage.setItem("portfolio-theme", darkModeOn ? "dark" : "light");
  themeToggle.textContent = darkModeOn ? "☀" : "☾";
  themeToggle.setAttribute("aria-label", darkModeOn ? "Switch to light mode" : "Switch to dark mode");
});

// Contact form opens WhatsApp with a prepared message.
// Replace the placeholder below with your own WhatsApp number, including country code,
// using digits only. Do not include +, spaces or dashes.
const whatsappNumber = "REPLACE_WITH_NUMBER";

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (whatsappNumber === "REPLACE_WITH_NUMBER") {
    formStatus.textContent = "Contact setup pending: add your WhatsApp number in script.js first.";
    return;
  }

  const name = document.getElementById("contact-name").value.trim();
  const email = document.getElementById("contact-email").value.trim();
  const message = document.getElementById("contact-message").value.trim();

  const text = `Hello, I'm ${name}.${email ? ` My email is ${email}.` : ""}\n\n${message}`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  formStatus.textContent = "WhatsApp opened. Please review your message and press Send there.";
});

// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

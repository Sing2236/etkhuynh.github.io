// Get the element you want to add margin/padding to
const terminalContainer = document.querySelector(".terminal-container");

// Set the margin and padding values
const marginValue = "0px";
const paddingValue = "0px";

// Apply margin and padding to the element
terminalContainer.style.margin = marginValue;
terminalContainer.style.padding = paddingValue;

// Rest of your script code
const terminalText = `
        Ethan.origin 
    => "Tyler, TX"
        Ethan.education 
    => "University of Texas at Tyler"
        Ethan.major 
    => "Computer Information Systems"
        Ethan.expectedGraduation 
    => "May 2024"
`;

let index = 0;
const terminalPre = document.querySelector(".terminal-container pre");

function typeTerminalText() {
  terminalPre.innerHTML += terminalText[index];
  index++;

  // Scroll within the .terminal-container element
  terminalPre.scrollTop = terminalPre.scrollHeight;

  if (index >= terminalText.length) {
    clearInterval(typingInterval);
  }
}

const typingInterval = setInterval(typeTerminalText, 50);

// Underline sections
// Add an 'active' class to the navigation link of the current section
function setActiveSection() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".top-bar nav ul li a");

  sections.forEach((section) => {
    const topOffset = section.offsetTop;
    const bottomOffset = topOffset + section.offsetHeight;

    if (window.pageYOffset >= topOffset && window.pageYOffset < bottomOffset) {
      const targetLink = document.querySelector(`a[href="#${section.id}"]`);
      navLinks.forEach((link) => link.classList.remove("active"));
      targetLink.classList.add("active");
    }
  });
}

// Listen for scroll events and update the active section accordingly
window.addEventListener("scroll", setActiveSection);

// Smooth scrolling
function scrollToSection(sectionId, offset) {
  const section = document.getElementById(sectionId);
  const navBarHeight = document.querySelector(".top-bar").offsetHeight;

  const sectionTop = section.offsetTop - navBarHeight - offset;

  window.scrollTo({
    top: sectionTop,
    behavior: "revert",
  });
}

// Call scrollToSection function when a navigation link is clicked
const navLinks = document.querySelectorAll(".top-bar nav ul li a");
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const sectionId = link.getAttribute("href").substring(1);
    scrollToSection(sectionId);
  });
});

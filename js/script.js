console.log("Hello");

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((item) => {
    let screenTop = item.offsetTop - 90;
    if (scrollY >= screenTop) {
      current = item.getAttribute("id");
      console.log(item.getAttribute("id"));
    }
  });
  navLinks.forEach((link) => {
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("bg-hoverBg", "text-blue-600", "rounded-[3px]");
      link.classList.remove("text-white");
    } else {
      link.classList.remove("bg-hoverBg", "text-blue-600", "rounded-[3px]");
      link.classList.add("text-white");
    }
  });
});


var typed = new Typed("#element", {
  strings: [
    "HTML Developer.",
    "CSS Expert.",
    "Bootstrap Designer.",
    "JavaScript Developer.",
    "Tailwind Expert.",
    "React Developer.",
  ],
  typeSpeed: 30,
  backSpeed: 30,
  backDelay: 1500,
  loop: true,
});

const cursor = document.querySelector(".typed-cursor");
cursor.classList.add("text-heading");



let backToTop = document.getElementById("back-to-top")

window.addEventListener("scroll", () => {
  if (scrollY > 200) {
    backToTop.style.display = "block"
  }
  else{
    backToTop.style.display = "none"
  }
})



let header = document.getElementById("stickyHeader")

let animationTriggered = false;

window.addEventListener("scroll", () => {
  if (window.scrollY < 200) {
    animationTriggered = false;
  }
  if (window.scrollY >= 200 && !animationTriggered) {
    animationTriggered = true;

    
    header.classList.add("-top-200");
    header.classList.remove("top-0");
    header.classList.add("transition-all", "duration-200");

    setTimeout(() => {
      header.classList.remove("-top-200");
      header.classList.add("top-0");
    }, 300); 
  }
});

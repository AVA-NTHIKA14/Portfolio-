const links = document.querySelectorAll("nav a");

links.forEach(link => {
  link.addEventListener("click", () => {
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

const skillSection = document.querySelector(".skills");
const fills = document.querySelectorAll(".fill");

window.addEventListener("scroll", () => {
  const sectionTop = skillSection.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight / 1.3;

  if (sectionTop < triggerPoint) {
    fills.forEach(fill => fill.classList.add("show"));
  }
});

const openModal = document.getElementById("openModal");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close");

openModal.addEventListener("click", () => {
  modal.classList.add("active");
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});

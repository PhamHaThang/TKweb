const backToTopButton = document.querySelector(".back-to-top");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}
backToTopButton.addEventListener("click", backToTop);
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
const eventButtons = document.querySelectorAll(".event-button");
eventButtons.forEach((button) => {
  button.addEventListener("click", toggleEventButton);
});

function toggleEventButton() {
  const button = event.target;
  button.classList.toggle("interested");
  if (button.classList.contains("interested")) {
    button.textContent = "Hủy quan tâm";
  } else {
    button.textContent = "Quan tâm";
  }
}

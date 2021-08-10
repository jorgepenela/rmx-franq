const dragH = document.querySelector(".dragH");
let isDown = false;
let startX;
let scrollLeft;

dragH.addEventListener("mousedown", e => {
  isDown = true;
  dragH.classList.add("active");
  startX = e.pageX - dragH.offsetLeft;
  scrollLeft = dragH.scrollLeft;
});
dragH.addEventListener("mouseleave", () => {
  isDown = false;
  dragH.classList.remove("active");
});
dragH.addEventListener("mouseup", () => {
  isDown = false;
  dragH.classList.remove("active");
});
dragH.addEventListener("mousemove", e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - dragH.offsetLeft;
  const walk = x - startX;
  dragH.scrollLeft = scrollLeft - walk;
});
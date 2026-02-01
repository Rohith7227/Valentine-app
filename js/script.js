const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

yesBtn.addEventListener("mouseenter", () => {
  yesBtn.style.transform = "scale(3)";
});

yesBtn.addEventListener("mouseleave", () => {
  yesBtn.style.transform = "scale(1)";
});

noBtn.addEventListener("mouseenter", () => {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.position = "fixed";
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
});

yesBtn.addEventListener("click", () => {
  alert("Yayyy 💖 Let’s go on a date Tonight.");
});


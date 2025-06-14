function stars() {
  let e = document.createElement("div");
  e.setAttribute("class", "star");
  document.body.appendChild(e);

  e.style.left = Math.random() * window.innerWidth + "px";

  let size = Math.random() * 12 + 6;
  let duration = Math.random() * 3 + 2;

  e.style.fontSize = size + "px";
  e.style.animationDuration = duration + "s";

  setTimeout(() => {
    e.remove();
  }, duration * 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  const landingPage = document.getElementById("landing-page");
  const mainContent = document.getElementById("main-content");
  const audio = document.getElementById("audio");
  let starsInterval;

  landingPage.addEventListener("click", () => {
    landingPage.classList.add("hidden");
    mainContent.classList.remove("hidden");
    audio.load();
    audio.play();
    
    // Start generating stars after entering
    starsInterval = setInterval(stars, 50);
  });
});
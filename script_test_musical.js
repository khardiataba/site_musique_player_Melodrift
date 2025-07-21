const audio = document.getElementById("audio");
const fileInput = document.getElementById("fileInput");
const playBtn = document.getElementById("playBtn");
const playerTitle = document.getElementById("playerTitle");
const toggleMode = document.getElementById("toggleMode");

// Lecture/Pause
playBtn.addEventListener("click", () => {
  if (audio.src) {
    if (audio.paused) {
      audio.play();
      playBtn.textContent = "⏸ Pause";
    } else {
      audio.pause();
      playBtn.textContent = "▶️ Lecture";
    }
  } else {
    alert("Veuillez d'abord choisir une chanson !");
  }
});

// Choix du fichier audio
fileInput.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    audio.src = url;
    audio.hidden = false;
    playerTitle.textContent = `🎶 ${file.name}`;
    audio.play();
    playBtn.textContent = "⏸ Pause";
  }
});

// Mode sombre / clair
toggleMode.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleMode.textContent = document.body.classList.contains("dark")
    ? "☀️ Mode clair"
    : "🌙 Mode sombre";
});

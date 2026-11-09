const audio = document.getElementById("instrumentAudio");
const playBtn = document.getElementById("playBtn");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");

const currentTime = document.getElementById("currentTime");
const duration = document.getElementById("duration");

function formatTime(time) {
  if (!Number.isFinite(time)) return "00:00";

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

// پخش و توقف
playBtn.addEventListener("click", async () => {
  if (audio.paused) {
    try {
      await audio.play();
      playBtn.textContent = "Ⅱ";
    } catch (error) {
      console.error("خطا در پخش فایل صوتی:", error);
    }
  } else {
    audio.pause();
    playBtn.textContent = "▶";
  }
});

// نمایش مدت زمان
audio.addEventListener("loadedmetadata", () => {
  duration.textContent = formatTime(audio.duration);
});

// به‌روزرسانی زمان پخش
audio.addEventListener("timeupdate", () => {
  currentTime.textContent = formatTime(audio.currentTime);

  if (Number.isFinite(audio.duration) && audio.duration > 0) {
    progress.value = (audio.currentTime / audio.duration) * 100;
  }
});

// جلو و عقب بردن صدا
progress.addEventListener("input", () => {
  if (Number.isFinite(audio.duration)) {
    audio.currentTime = (progress.value / 100) * audio.duration;
  }
});

// تنظیم صدا
volume.addEventListener("input", () => {
  audio.volume = volume.value;
});

// پایان فایل صوتی
audio.addEventListener("ended", () => {
  playBtn.textContent = "▶";
  progress.value = 0;
  currentTime.textContent = "00:00";
});

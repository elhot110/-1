const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const playPauseButton = document.querySelector(".play-pause-btn");
const forwardButton = document.querySelector(".controls button.forward");
const backwardButton = document.querySelector(".controls button.backward");
const songName = document.querySelector(".music-player h1");
const artistName = document.querySelector(".music-player p");

const songs = [
  {
    title: "مشاري بن راشد العفاسي",
    name: "سوره يس",
    source:
      "https://server8.mp3quran.net/afs/036.mp3",
  },
  {
    title: "نصر الدين طوبار",
    name: "وليل طويل🥰✨",
    source:
      "https://serv100.albumaty.com/songs_2020/Albumaty.Com_nsr_aldyn_twbar_sal_dmay_ya_elhy.mp3  ",
  },
  {
    title: "ناصر السالمي",
    name: "سوره البقره ",
    source:
      "https://server14.mp3quran.net/mansor/002.mp3",
  },
  {
    title: "اسلام صبحي ",
    name: "سوره النور",
    source:
      "https://ia801406.us.archive.org/12/items/002_20221103_202211/024.mp3",
  },
  {
    title: "د:حازم شومان",
    name: "bodcast اي المشكله لو مش ملتزم",
    source:
      "https://way2allah.com/khotab-mirror-225529-361747.htm",
  },

  {
    title: "حازم سيف",
    name: "التوبه",
    source:
      "https://ia801501.us.archive.org/3/items/012_20221105/009.mp3",
  },
  {
    title: "قبل الغروب",
    name: "اعظم بودكاست للرجوع الي الله",
    source:
      "https://injector.simplecastaudio.com/ce12e3b1-308d-4e75-acd5-f016313674ed/episodes/edf7092e-e6f1-4289-ab4c-6fba86a6bde6/audio/128/default.mp3",
  },
];

let currentSongIndex = 3;

function updateSongInfo() {
  songName.textContent = songs[currentSongIndex].title;
  artistName.textContent = songs[currentSongIndex].name;
  song.src = songs[currentSongIndex].source;

  song.addEventListener("loadeddata", function () {});
}

song.addEventListener("timeupdate", function () {
  if (!song.paused) {
    progress.value = song.currentTime;
  }
});

song.addEventListener("loadedmetadata", function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

function pauseSong() {
  song.pause();
  controlIcon.classList.remove("fa-pause");
  controlIcon.classList.add("fa-play");
}

function playSong() {
  song.play();
  controlIcon.classList.add("fa-pause");
  controlIcon.classList.remove("fa-play");
}

function playPause() {
  if (song.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

playPauseButton.addEventListener("click", playPause);

progress.addEventListener("input", function () {
  song.currentTime = progress.value;
});

progress.addEventListener("change", function () {
  playSong();
});

forwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSongInfo();
  playPause();
});

backwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateSongInfo();
  playPause();
});

updateSongInfo();

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  centeredSlides: true,
  initialSlide: 3,
  slidesPerView: "auto",
  allowTouchMove: false,
  spaceBetween: 40,
  coverflowEffect: {
    rotate: 25,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".forward",
    prevEl: ".backward",
  },
});

// Inspiration: https://dribbble.com/shots/5455156-Car-HMI-assistant-Album-switching

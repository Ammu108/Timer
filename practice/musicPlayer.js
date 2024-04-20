const playbtn = document.getElementById("play-btn");
var progress = document.getElementById("progress");
var audio = document.getElementById("audio");
var timechanging = document.getElementById('currentChanger');

playbtn.addEventListener('click', function() {
  if (playbtn.classList.contains('fa-play')) {
    playbtn.classList.remove('fa-play');
    playbtn.classList.add('fa-pause');
    audio.play();
  } else {
    playbtn.classList.remove('fa-pause');
    playbtn.classList.add('fa-play')
    audio.pause();
  }
})

audio.addEventListener('canplay', function() {
  const durationTime = audio.duration;
  const minutes = Math.floor(durationTime / 60);
  const seconds = Math.floor(durationTime % 60);

  // const formattedTime = `${minutes}:${seconds}`;

  const formattedTime = (minutes < 10 ? "0" : '') + minutes + ':' + (seconds < 10 ? "0" : '') + seconds;
  const timeSpan = document.getElementById('current');
  timeSpan.innerHTML = formattedTime;
});

audio.addEventListener('timeupdate', function() {
  const currentTime = audio.currentTime;
  const duration = audio.duration;
  const minutes = Math.floor(currentTime / 60);
  const seconds = Math.floor(currentTime % 60);

  const formattedTime = (minutes < 10 ? "0" : '') + minutes + ':' + (seconds < 10 ? "0" : '') + seconds;

  const percentagePlayed = (currentTime / duration) * 100;
  progress.value = percentagePlayed;
  timechanging.innerHTML = formattedTime;
});

progress.addEventListener('input', function() {
  const seekTo = (progress.value / 100) * audio.duration;
  audio.currentTime = seekTo;
});

progress.addEventListener('input', function() {
  audio.currentTime = (progress.value / 100) * audio.duration;
  audio.play();
  playbtn.classList.remove('fa-play');
  playbtn.classList.add('fa-pause');
});

const nextSong = document.getElementById("forward");
const prevSong = document.getElementById("backward");

nextSong.addEventListener('click', function(){
  const image1 = document.getElementById("song-img-2")
  const newImage = "https://yt3.googleusercontent.com/LHN1JD4o4uJMLGj4_o3K-FpwEVPT0EGo5NnD3RKMVIoD8KRSScJy49FgFJRCBX0Rcx9Q_N_r0A=s900-c-k-c0x00ffffff-no-rj";
  const imageContentH1 = document.getElementById("audio-content-1-h1")
  const imageContentp = document.getElementById("audio-content-1-p")
  
  audio.src = "Yaar Mere (Official Video) - Parmish Verma x @raftaarmusic   Y Hate EP.mp3";
  imageContentH1.textContent = "Yaar Mere";
  imageContentp.textContent = "Parmish Verma Ft. raftaarmusic";
  image1.src = newImage;

  timechanging.textContent = "00:00";
  progress.value = 0;
  playbtn.classList.remove('fa-pause');
  playbtn.classList.add('fa-play')

  audio.play()
  if (playbtn.classList.contains('fa-play')) {
    playbtn.classList.remove('fa-play');
    playbtn.classList.add('fa-pause');
  }
})

prevSong.addEventListener('click', function(){
  const image1 = document.getElementById("song-img-2")
  const newImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp3276z558YDa7QfmVS2wS5ZRXIYj8DQ5t4Xl4YpSx_w&s";
  const imageContentH1 = document.getElementById("audio-content-1-h1")
  const imageContentp = document.getElementById("audio-content-1-p")
  
  audio.src = "Block  Dhanda Nyoliwala (Music Video)  Deepesh Goyal  VYRL Haryanvi.mp3";
  imageContentH1.textContent = "Block";
  imageContentp.textContent = "Dhanda Nyoliwala";
  image1.src = newImage;

  timechanging.textContent = "00:00";
  progress.value = 0;
  playbtn.classList.remove('fa-pause');
  playbtn.classList.add('fa-play')

  audio.play()
  if (playbtn.classList.contains('fa-play')) {
    playbtn.classList.remove('fa-play');
    playbtn.classList.add('fa-pause');
  }
})
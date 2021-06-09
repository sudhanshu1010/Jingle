const likeUnlikeBtn = document.querySelector("#liked-songs");
const previousBtn = document.querySelector("#previous");
const playPauseBtn = document.querySelector("#play-pause");
const nextBtn = document.querySelector("#next");
const volumeBtn = document.querySelector("#volume");
const audioEle = document.querySelector("#audio");
const progress = document.querySelector(".progress-bar-line");
const progressContainer = document.querySelector(".progress-bar")
const songDuration = document.querySelector(".end-time");
const songLength = document.querySelector(".start-time");


// function to like unlike songs
likeUnlikeBtn.addEventListener("click", function(){
    if(likeUnlikeBtn.classList.contains("liked")){
        likeUnlikeBtn.classList.remove("liked")
    } else {
        likeUnlikeBtn.classList.add("liked")
    }
})

// function to play pause songs
playPauseBtn.addEventListener("click", function(){
    if(playPauseBtn.textContent == "play_circle_filled"){
        audioEle.play();
        playPauseBtn.textContent = "pause_circle_filled"
    } else {
        audioEle.pause();
        playPauseBtn.textContent = "play_circle_filled"
    }
})

volumeBtn.addEventListener("click", function(){
    const volume = audio.volume;
    if(volume == 1) {
        volumeBtn.innerHTML = "volume_off"
        audio.volume = 0;
    }
    else {
        volumeBtn.innerHTML = "volume_up"
        audio.volume = 1; 
    }
})

audio.addEventListener("timeupdate", function(e){
    let {duration, currentTime} = e.srcElement;
    let progressTime = (currentTime / duration) * 100;
    progress.style.width = `${progressTime}%`;

    // -----------
    let totalTimeMin = Math.floor(duration / 60);
    let totalTimeSec = Math.floor(duration % 60);

    if (totalTimeSec < 10) {
        totalTimeSec = "0" + totalTimeSec;
    }
    let totalTimeDuration = totalTimeMin + ":" + totalTimeSec;
    if (duration) {
        songDuration.textContent = totalTimeDuration;
    }

    let currentTimeMin = Math.floor(currentTime / 60);
    let currentTimeSec = Math.floor(currentTime % 60);

    if (currentTimeSec < 10) {
        currentTimeSec = "0" + currentTimeSec;
    }
    let currentTimeDuration = currentTimeMin + ":" + currentTimeSec;
    songLength.textContent = (currentTimeDuration);
}) 

progressContainer.addEventListener("click", function (e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audioEle.currentTime = (clickX / width) * duration;
})


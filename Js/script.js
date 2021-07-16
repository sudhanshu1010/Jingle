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
const volumeBar = document.querySelector("#volume-bar");
const controls = document.querySelector(".controls-container")
const soundBarContainer = document.querySelector(".volume-bar-container")
const searchDetail = document.querySelector(".searched-items-container")
const searchCard = document.querySelectorAll(".search-card")
const modalClose = document.querySelectorAll(".modal-cut");

let isVolumeClicked = false;

let songs = [{ "pop": [] }, { "folk": [01, 02, 03, 04, 05, 06, 07, 08, 09] }, { "concerts": [] }, { "indie": [] }, { "bollywood": [] }, { "punjabi": [] }];
// function to like unlike songs
likeUnlikeBtn.addEventListener("click", function () {
    if (likeUnlikeBtn.classList.contains("liked")) {
        likeUnlikeBtn.classList.remove("liked")
    } else {
        likeUnlikeBtn.classList.add("liked")
    }
})

// function to play pause songs
playPauseBtn.addEventListener("click", function () {
    if (playPauseBtn.textContent == "play_circle_filled") {
        audioEle.play();
        playPauseBtn.textContent = "pause_circle_filled"
    } else {
        audioEle.pause();
        playPauseBtn.textContent = "play_circle_filled"
    }
})

function controlVolume() {
    if (!isVolumeClicked) {
        isVolumeClicked = true;
        let volDiv = document.createElement("input");
        volDiv.setAttribute("id", "volume-bar");
        volDiv.setAttribute("type", "range");
        volDiv.setAttribute("min", "0");
        volDiv.setAttribute("max", "100");
        volDiv.setAttribute("value", "100");
        soundBarContainer.appendChild(volDiv);
        console.log(volDiv.value);
        volDiv.addEventListener("click",function(){
            document.querySelector("#audio").volume = volDiv.value * 0.01;
        })
    } else {
        isVolumeClicked = false;
        document.querySelector("#volume-bar").remove();
    }
}

audio.addEventListener("timeupdate", function (e) {
    let { duration, currentTime } = e.srcElement;
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

document.querySelector(".search-card-world-hits-one").addEventListener("click", function(){
    let modalPop = document.createElement("div");
    modalPop.classList.add("modal", "modal-pop");
    modalPop.innerHTML = `<div class="modal-cut material-icons">west</div>`;
    searchDetail.appendChild(modalPop);

    document.querySelector(".modal-cut").addEventListener("click", function(){
        modalPop.remove()
    })
})

document.querySelector(".search-card-world-hits-two").addEventListener("click", function(){
    let modalFolk = document.createElement("div");
    modalFolk.classList.add("modal", "modal-folk");
    modalFolk.innerHTML = `<div class="modal-cut material-icons">west</div>`;
    searchDetail.appendChild(modalFolk);

    document.querySelector(".modal-cut").addEventListener("click", function(){
        modalFolk.remove()
    })
})

document.querySelector(".search-card-top-trending-one").addEventListener("click", function(){
    let modalConcerts = document.createElement("div");
    modalConcerts.classList.add("modal", "modal-concerts");
    modalConcerts.innerHTML = `<div class="modal-cut modal-cut-concert material-icons">west</div>`;
    searchDetail.appendChild(modalConcerts);

    document.querySelector(".modal-cut-concert").addEventListener("click", function(){
        modalConcerts.remove()
    })
})

document.querySelector(".search-card-top-trending-two").addEventListener("click", function(){
    let modalIndie = document.createElement("div");
    modalIndie.classList.add("modal", "modal-indie");
    modalIndie.innerHTML = `<div class="modal-cut material-icons">west</div>`;
    searchDetail.appendChild(modalIndie);

    document.querySelector(".modal-cut").addEventListener("click", function(){
        modalIndie.remove()
    })
})

document.querySelector(".search-card-local-love-one").addEventListener("click", function(){
    let modalBollywood = document.createElement("div");
    modalBollywood.classList.add("modal", "modal-bollywood");
    modalBollywood.innerHTML = `<div class="modal-cut material-icons">west</div>`;
    searchDetail.appendChild(modalBollywood);

    document.querySelector(".modal-cut").addEventListener("click", function(){
        modalBollywood.remove()
    })
})

document.querySelector(".search-card-local-love-two").addEventListener("click", function(){
    let modalPunjabi = document.createElement("div");
    modalPunjabi.classList.add("modal", "modal-punjabi");
    modalPunjabi.innerHTML = `<div class="modal-cut material-icons">west</div>`;
    searchDetail.appendChild(modalPunjabi);

    document.querySelector(".modal-cut").addEventListener("click", function(){
        modalPunjabi.remove()
    })
})


volumeBtn.addEventListener("click", controlVolume)
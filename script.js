const likeUnlikeBtn = document.querySelector("#liked-songs");
const previousBtn = document.querySelector("#previous");
const playPauseBtn = document.querySelector("#play-pause");
const nextBtn = document.querySelector("#next");
const volumeBtn = document.querySelector("volume");


// function to like unlike songs
likeUnlikeBtn.addEventListener("click", function(){
    if(likeUnlikeBtn.textContent == "favorite_border"){
        
        likeUnlikeBtn.textContent = "favorite"
    } else {
        likeUnlikeBtn.textContent = "favorite_border"
    }
})

// function to play pause songs
playPauseBtn.addEventListener("click", function(){
    if(playPauseBtn.textContent == "play_circle_filled"){
        playPauseBtn.textContent = "pause_circle_filled"
    } else {
        playPauseBtn.textContent = "play_circle_filled"
    }
})
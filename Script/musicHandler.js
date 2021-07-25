let songs = [{
    song: "Bheegi Bheegi Raaton Mein",
    type: "Bollywood",
    artist: "Sanam",
},
{
    song: "Ik Mulaqaat",
    type: "Bollywood",
    artist: "Ayushmann Khurana",
},
{
    song: "Ikk Kudi",
    type: "Bollywood",
    artist: "Diljit Dosanjh",
},
{
    song: "Main Rahoon Ya Na Rahoon",
    type: "Bollywood",
    artist: "Armaan Malik",
},
{
    song: "Shayad",
    type: "Bollywood",
    artist: "Arijit Singh",
},

{
    song: "Believer",
    type: "Concerts",
    artist: "Imagine Dragons",
},
{
    song: "I Fell It Coming",
    type: "Concerts",
    artist: "The Weeknd",
},
{
    song: "M83 'Midnight City'",
    type: "Concerts",
    artist: "Alex",
},
{
    song: "Circles",
    type: "Concerts",
    artist: "Post Malone",
},

{
    song: "Aisa Des Hai Mera",
    type: "Folk",
    artist: "Udit Narayan",
},
{
    song: "Albela Sajan",
    type: "Folk",
    artist: "Shashi Suman",
},
{
    song: "Gallan Goodiyan",
    type: "Folk",
    artist: "Farhan Akhtar",
},
{
    song: "Genda Phool",
    type: "Folk",
    artist: "AR Rehman",
},
{
    song: "Ghoomar",
    type: "Folk",
    artist: "Shreya Ghosal",
},

{
    song: "Aane Ko Hai Khaab",
    type: "Indie",
    artist: "Kanishk Seth",
},
{
    song: "Boondein",
    type: "Indie",
    artist: "Silk Route",
}, {
    song: "Main Sharabi",
    type: "Indie",
    artist: "Ajay Jaswal",
}, {
    song: "Marz",
    type: "Indie",
    artist: "The Yellow Diary",
}, {
    song: "Pachtaoge",
    type: "Indie",
    artist: "Arijit Singh",
},

{
    song: "Big Red Machine",
    type: "Pop",
    artist: "Renegade",
},
{
    song: "Diamonds",
    type: "Pop",
    artist: "Sam Smith",
},
{
    song: "Fly Away",
    type: "Pop",
    artist: "Renegade",
},
{
    song: "Katy Perry",
    type: "Pop",
    artist: "Kety Perry",
},
{
    song: "Shotgun",
    type: "Pop",
    artist: "George Ezra",
},

{
    song: "Blue Eyes",
    type: "Punjabi",
    artist: "Honey Singh",
},
{
    song: "Kale Je Libaas",
    type: "Punjabi",
    artist: "Kaka",
},
{
    song: "Viah Di Khabar",
    type: "Punjabi",
    artist: "Kaka",
},
{
    song: "Waalian",
    type: "Punjabi",
    artist: "Harnoor",
},
]

let likedSongs = []

let likeButton = document.querySelector("#liked-songs")
likeButton.addEventListener("click", function () {
    if (getComputedStyle(likeButton).color == "rgb(255, 255, 255)") {
        likeButton.innerHTML = "favorite"
        likeButton.style.color = "rgb(247, 132, 132)"
    } else {
        likeButton.innerHTML = "favorite_border"
        likeButton.style.color = "white"
    }
})

function addRemoveSong(data) {
    if (likedSongs.includes(data)) {
        likedSongs.pop(data)
    } else {
        likedSongs.push(data)
    }
    console.log(likedSongs)
}

function getFilteredData(type) {
    let songsList = songs.filter(ele => ele.type == `${type}`);
    return songsList;
}

function isLikedSong(data) {
    for (let i = 0; i < likedSongs.length; i++) {
        if (JSON.stringify(likedSongs[i]) === JSON.stringify(data)) return true;
    }
    return false;
}

let recentlyPlayed = []
console.log(recentlyPlayed.length)

let myAudio = document.querySelector("#audio")

// function to create music divs
function songDiv(j, type) {
    let songModal = document.createElement("div");
    songModal.classList.add("modal", `modal-${type}`)
    songModal.innerHTML = `<div class="modal-cut material-icons">west</div>`;

    let data = getFilteredData(type);
    for (let i = 0; i < data.length; i++) {
        songModal.appendChild(createSingleSongDiv(data[i].song, data[i].artist, data[i].type))
    }

    document.querySelector(".searched-items-container").append(songModal);

    let numberOfSongs = document.querySelectorAll(".song-play-pause")
    for (let i = 0; i < numberOfSongs.length; i++) {
        numberOfSongs[i].addEventListener("click", function () {

            document.querySelector(".container-image").setAttribute("src", `./Cover/${data[i].type}/${data[i].song}.jpg`)
            document.querySelector(".song-details-container").innerHTML = `${data[i].song} - ${data[i].artist}`;

            myAudio.setAttribute("src", `./Music/${data[i].type}/${data[i].song}.mp3`)

            console.log(myAudio.duration)

            if (numberOfSongs[i].innerHTML === "play_circle_filled") {
                for (let i = 0; i < numberOfSongs.length; i++) {
                    numberOfSongs[i].innerHTML = "play_circle_filled"
                }
                document.querySelector("#play-pause").innerHTML = numberOfSongs[i].innerHTML = "pause_circle_filled"
                myAudio.play();

            } else {
                document.querySelector("#play-pause").innerHTML = numberOfSongs[i].innerHTML = "play_circle_filled"
                myAudio.pause();
            }

        })
    }

    document.querySelector(".modal-cut").addEventListener("click", function () {
        songModal.remove()
    })
}

let playPauseGlobal = document.querySelector("#play-pause")
playPauseGlobal.addEventListener("click", function () {
    playPauseGlobal.innerHTML == "play_circle_filled" ? playSong() : pauseSong();
    document.querySelector(".container-image").setAttribute("src", "./Cover/Bollywood/Bheegi Bheegi Raaton Mein.jpg")
    document.querySelector(".song-details-container").innerHTML = "Bheegi Bheegi Raaton Mein - Sanam"
})

let audio = document.querySelector("#audio")
function pauseSong() {
    audio.pause();
    playPauseGlobal.innerHTML = "play_circle_filled"
}

function playSong() {
    audio.play();
    playPauseGlobal.innerHTML = "pause_circle_filled"
}

// fuction to load songs list into songDiv 
function createSingleSongDiv(songName, artist, type) {
    let singleSong = document.createElement("div");
    let imageSource = "./Cover/" + type + "/" + songName + ".jpg";

    singleSong.innerHTML = `
        <div class="song">
           <div class="song-image-container"><img src="${imageSource}" object-fit="contain"></div>
             <div class="track-details-container">
                 <div class="song-name"><h5 style="margin: 1rem 0 0 0;">${songName}</h5></div>
                 <div class="song-name"><h6 style="margin: 0 0 1rem 0;">${artist}</h6></div>
             </div>
             <div class="material-icons song-play-pause" style="margin: 0;">play_circle_filled</div>
        </div>`;
    return singleSong;
}

let modalCreate = false;

// function to know which card i've clicked on
let playCards = document.querySelectorAll(".search-card");
if (!modalCreate) {
    for (let i = 0; i < playCards.length; i++) {
        playCards[i].addEventListener("click", function () {
            modalCreate = true;
            switch (i) {
                case 0: {
                    songDiv(i, "Pop");
                    break;
                }
                case 1: {
                    songDiv(i, "Folk");
                    break;
                }
                case 2: {
                    songDiv(i, "Concerts");
                    break;
                }
                case 3: {
                    songDiv(i, "Indie");
                    break;
                }
                case 4: {
                    songDiv(i, "Bollywood");
                    break;
                }
                case 5: {
                    songDiv(i, "Punjabi");
                    break;
                }
            }
        })
    }
}

// browse option 
let browse = document.querySelector(".web")
browse.addEventListener("click", function(){
    let browseModal = document.createElement("div")
    browseModal.classList.add("browse-modal")
    browseModal.innerHTML = `<div class="modal">
    <div class="modal-cut material-icons">west</div></div>`
    document.querySelector(".home-container").append(browseModal)
})
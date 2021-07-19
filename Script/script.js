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

// function to like unlike songs
// likeUnlikeBtn.addEventListener("click", function () {
//     if (likeUnlikeBtn.classList.contains("liked")) {
//         likeUnlikeBtn.classList.remove("liked")
//     } else {
//         likeUnlikeBtn.classList.add("liked")
//     }
// })

// function to play pause songs
// playPauseBtn.addEventListener("click", function () {
//     if (playPauseBtn.textContent == "play_circle_filled") {
//         audioEle.play();
//         playPauseBtn.textContent = "pause_circle_filled"
//     } else {
//         audioEle.pause();
//         playPauseBtn.textContent = "play_circle_filled"
//     }
// })

function controlVolume() {
    if (!isVolumeClicked) {
        isVolumeClicked = true;
        let volDiv = document.createElement("input");
        volDiv.setAttribute("id", "volume-bar");
        volDiv.setAttribute("type", "range");
        volDiv.setAttribute("min", "0");
        volDiv.setAttribute("max", "100");
        volDiv.setAttribute("value", `{volDiv.value}`);
        soundBarContainer.appendChild(volDiv);
        volDiv.addEventListener("click", function () {
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

volumeBtn.addEventListener("click", controlVolume)

// function to add remove selected classes 
let links = document.querySelectorAll("li");
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
        document.querySelector(".selected").classList.remove("selected")
        links[i].classList.add("selected");
    })
}

document.querySelector("#login").addEventListener("click", function(){
    let contactUs = document.createElement("div")
    contactUs.innerHTML = `<div class="contact-us-modal">
        <div class="contact-us-form">
            <div class="material-icons contact-us-remove" style="margin-left: 95%">highlight_off</div>
            <div>Contact Us</div>
            <input placeholder="Your Email" class="contact-us-email" type="text">
            <textarea class="contact-us-message" placeholder="Write your message here"></textarea>
            <div class="contact-us-buttons-container">
                <button class="contact-us-discard">Discard</button>
                <button class="contact-us-send">Send</button>
            </div>
        </div>
    </div>`
    document.querySelector("body").appendChild(contactUs);

    document.querySelector(".contact-us-remove").addEventListener("click", function(){
        contactUs.remove()
    })

    let discard = document.querySelector(".contact-us-discard");
    let send = document.querySelector(".contact-us-send");

    discard.addEventListener("click", function(){
        contactUs.remove()
    })

    send.addEventListener("click", function(){
        let email = document.querySelector(".contact-us-email");
        let message = document.querySelector(".contact-us-message");

        if(email.value === ""){
            alert("Please enter your email address!");
        } else if(message.value === ""){
            alert("Please enter your message!")
        } else {
            contactUs.remove();
            setTimeout(() => {
                alert("Message Sent Successfully!")
            }, 100);
        }
    })
})

// document.querySelector(".search-card-world-hits-one").addEventListener("click", function () {
//     let modalPop = document.createElement("div");
//     modalPop.classList.add("modal", "modal-pop");
//     modalPop.innerHTML = `<div class="modal-cut material-icons">west</div>
//     <div class="song">
//         <div class="song-image-container"><img src="coverImage.jpg"></div>
//         <div class="track-details-container">
//             <div class="song-name"><h5 style="margin: 1rem 0 0 0;">Song Name</h5></div>
//             <div class="song-name"><h6 style="margin: 0 0 1rem 0;;">Song Name</h6></div>
//         </div>
//         <div class="material-icons song-play-pause" style="margin: 0;">play_circle_filled</div>
//     </div>
//     <div class="song">
//         <div class="song-image-container"><img src="coverImage.jpg"></div>
//         <div class="track-details-container">
//             <div class="song-name"><h5 style="margin: 1rem 0 0 0;">Song Name</h5></div>
//             <div class="song-name"><h6 style="margin: 0 0 1rem 0;;">Song Name</h6></div>
//         </div>
//         <div class="material-icons song-play-pause" style="margin: 0;">play_circle_filled</div>
//     </div>
//     <div class="song">
//         <div class="song-image-container"><img src="coverImage.jpg"></div>
//         <div class="track-details-container">
//             <div class="song-name"><h5 style="margin: 1rem 0 0 0;">Song Name</h5></div>
//             <div class="song-name"><h6 style="margin: 0 0 1rem 0;;">Song Name</h6></div>
//         </div>
//         <div class="material-icons song-play-pause" style="margin: 0;">play_circle_filled</div>
//     </div>
//     <div class="song">
//         <div class="song-image-container"><img src="coverImage.jpg"></div>
//         <div class="track-details-container">
//             <div class="song-name"><h5 style="margin: 1rem 0 0 0;">Song Name</h5></div>
//             <div class="song-name"><h6 style="margin: 0 0 1rem 0;;">Song Name</h6></div>
//         </div>
//         <div class="material-icons song-play-pause" style="margin: 0;">play_circle_filled</div>
//     </div>
//     <div class="song">
//         <div class="song-image-container"><img src="coverImage.jpg"></div>
//         <div class="track-details-container">
//             <div class="song-name"><h5 style="margin: 1rem 0 0 0;">Song Name</h5></div>
//             <div class="song-name"><h6 style="margin: 0 0 1rem 0;;">Song Name</h6></div>
//         </div>
//         <div class="material-icons song-play-pause" style="margin: 0;">play_circle_filled</div>
//     </div>
    
//     `;
//     searchDetail.appendChild(modalPop);

//     document.querySelector(".modal-cut").addEventListener("click", function () {
//         modalPop.remove()
//     })
// })

// let folk = ["01.mp3", "02.mp3", "03.mp3", "04.mp3", "05.mp3"]

// document.querySelector(".search-card-world-hits-two").addEventListener("click", function () {
//     let modalFolk = document.createElement("div");
//     modalFolk.classList.add("modal", "modal-folk");
//     modalFolk.innerHTML = `<div class="modal-cut material-icons">west</div>
//     <div class="song">
//         <div class="song-image-container"><img src="coverImage.jpg"></div>
//         <div class="track-details-container">
//             <div class="song-name"><h5 style="margin: 1rem 0 0 0;">Aisa Des Hai Mera</h5></div>
//             <div class="song-name"><h6 style="margin: 0 0 1rem 0;">Udit Narayan</h6></div>
//         </div>
//         <div class="material-icons song-play-pause" style="margin: 0;">play_circle_filled</div>
//     </div>
//     <div class="song">
//         <div class="song-image-container"><img src="coverImage.jpg"></div>
//         <div class="track-details-container">
//             <div class="song-name"><h5 style="margin: 1rem 0 0 0;">Albela Sajan</h5></div>
//             <div class="song-name"><h6 style="margin: 0 0 1rem 0;">Sultan Khan</h6></div>
//         </div>
//         <div class="material-icons song-play-pause" style="margin: 0;">play_circle_filled</div>
//     </div>
//     <div class="song">
//         <div class="song-image-container"><img src="coverImage.jpg"></div>
//         <div class="track-details-container">
//             <div class="song-name"><h5 style="margin: 1rem 0 0 0;">Gallan Goodiyan</h5></div>
//             <div class="song-name"><h6 style="margin: 0 0 1rem 0;">Shankar Mahadevan</h6></div>
//         </div>
//         <div class="material-icons song-play-pause" style="margin: 0;">play_circle_filled</div>
//     </div>
//     <div class="song">
//         <div class="song-image-container"><img src="coverImage.jpg"></div>
//         <div class="track-details-container">
//             <div class="song-name"><h5 style="margin: 1rem 0 0 0;">Genda Phool</h5></div>
//             <div class="song-name"><h6 style="margin: 0 0 1rem 0;">Badshah</h6></div>
//         </div>
//         <div class="material-icons song-play-pause" style="margin: 0;">play_circle_filled</div>
//     </div>
//     <div class="song">
//         <div class="song-image-container"><img src="coverImage.jpg"></div>
//         <div class="track-details-container">
//             <div class="song-name"><h5 style="margin: 1rem 0 0 0;">Ghoomar</h5></div>
//             <div class="song-name"><h6 style="margin: 0 0 1rem 0;">Shreya Ghosal</h6></div>
//         </div>
//         <div class="material-icons song-play-pause" style="margin: 0;">play_circle_filled</div>
//     </div>`;
//     searchDetail.appendChild(modalFolk);

//     document.querySelector(".modal-cut").addEventListener("click", function () {
//         modalFolk.remove()
//     })

//     let playButton = document.querySelectorAll(".song-play-pause");
//     for (let i = 0; i < playButton.length; i++) {
//         playButton[i].addEventListener("click", function (e) {
//             loadSong(i, e);
//         })
//     }
// })

// document.querySelector(".search-card-top-trending-one").addEventListener("click", function () {
//     let modalConcerts = document.createElement("div");
//     modalConcerts.classList.add("modal", "modal-concerts");
//     modalConcerts.innerHTML = `<div class="modal-cut modal-cut-concert material-icons">west</div>
//     <div class="song">
//         <div class="song-image-container"><img src="coverImage.jpg"></div>
//         <div class="track-details-container">
//             <div class="song-name"><h5 style="margin: 1rem 0 0 0;">Song Name</h5></div>
//             <div class="song-name"><h6 style="margin: 0 0 1rem 0;;">Song Name</h6></div>
//         </div>
//         <div class="material-icons song-play-pause" style="margin: 0;">play_circle_filled</div>
//     </div>
//     <div class="song">
//         <div class="song-image-container"><img src="coverImage.jpg"></div>
//         <div class="track-details-container">
//             <div class="song-name"><h5 style="margin: 1rem 0 0 0;">Song Name</h5></div>
//             <div class="song-name"><h6 style="margin: 0 0 1rem 0;;">Song Name</h6></div>
//         </div>
//         <div class="material-icons song-play-pause" style="margin: 0;">play_circle_filled</div>
//     </div>
//     <div class="song">
//         <div class="song-image-container"><img src="coverImage.jpg"></div>
//         <div class="track-details-container">
//             <div class="song-name"><h5 style="margin: 1rem 0 0 0;">Song Name</h5></div>
//             <div class="song-name"><h6 style="margin: 0 0 1rem 0;;">Song Name</h6></div>
//         </div>
//         <div class="material-icons song-play-pause" style="margin: 0;">play_circle_filled</div>
//     </div>
//     <div class="song">
//         <div class="song-image-container"><img src="coverImage.jpg"></div>
//         <div class="track-details-container">
//             <div class="song-name"><h5 style="margin: 1rem 0 0 0;">Song Name</h5></div>
//             <div class="song-name"><h6 style="margin: 0 0 1rem 0;;">Song Name</h6></div>
//         </div>
//         <div class="material-icons song-play-pause" style="margin: 0;">play_circle_filled</div>
//     </div>
//     <div class="song">
//         <div class="song-image-container"><img src="coverImage.jpg"></div>
//         <div class="track-details-container">
//             <div class="song-name"><h5 style="margin: 1rem 0 0 0;">Song Name</h5></div>
//             <div class="song-name"><h6 style="margin: 0 0 1rem 0;;">Song Name</h6></div>
//         </div>
//         <div class="material-icons song-play-pause" style="margin: 0;">play_circle_filled</div>
//     </div>`;
//     searchDetail.appendChild(modalConcerts);

//     document.querySelector(".modal-cut-concert").addEventListener("click", function () {
//         modalConcerts.remove()
//     })
// })

// document.querySelector(".search-card-top-trending-two").addEventListener("click", function () {
//     let modalIndie = document.createElement("div");
//     modalIndie.classList.add("modal", "modal-indie");
//     modalIndie.innerHTML = `<div class="modal-cut material-icons">west</div>
//     <div class="song">
//         <div class="song-image-container"><img src="coverImage.jpg"></div>
//         <div class="track-details-container">
//             <div class="song-name"><h5 style="margin: 1rem 0 0 0;">Song Name</h5></div>
//             <div class="song-name"><h6 style="margin: 0 0 1rem 0;;">Song Name</h6></div>
//         </div>
//         <div class="material-icons song-play-pause" style="margin: 0;">play_circle_filled</div>
//     </div>
//     <div class="song">
//         <div class="song-image-container"><img src="coverImage.jpg"></div>
//         <div class="track-details-container">
//             <div class="song-name"><h5 style="margin: 1rem 0 0 0;">Song Name</h5></div>
//             <div class="song-name"><h6 style="margin: 0 0 1rem 0;;">Song Name</h6></div>
//         </div>
//         <div class="material-icons song-play-pause" style="margin: 0;">play_circle_filled</div>
//     </div>
//     <div class="song">
//         <div class="song-image-container"><img src="coverImage.jpg"></div>
//         <div class="track-details-container">
//             <div class="song-name"><h5 style="margin: 1rem 0 0 0;">Song Name</h5></div>
//             <div class="song-name"><h6 style="margin: 0 0 1rem 0;;">Song Name</h6></div>
//         </div>
//         <div class="material-icons song-play-pause" style="margin: 0;">play_circle_filled</div>
//     </div>
//     <div class="song">
//         <div class="song-image-container"><img src="coverImage.jpg"></div>
//         <div class="track-details-container">
//             <div class="song-name"><h5 style="margin: 1rem 0 0 0;">Song Name</h5></div>
//             <div class="song-name"><h6 style="margin: 0 0 1rem 0;;">Song Name</h6></div>
//         </div>
//         <div class="material-icons song-play-pause" style="margin: 0;">play_circle_filled</div>
//     </div>
//     <div class="song">
//         <div class="song-image-container"><img src="coverImage.jpg"></div>
//         <div class="track-details-container">
//             <div class="song-name"><h5 style="margin: 1rem 0 0 0;">Song Name</h5></div>
//             <div class="song-name"><h6 style="margin: 0 0 1rem 0;;">Song Name</h6></div>
//         </div>
//         <div class="material-icons song-play-pause" style="margin: 0;">play_circle_filled</div>
//     </div>`;
//     searchDetail.appendChild(modalIndie);

//     document.querySelector(".modal-cut").addEventListener("click", function () {
//         modalIndie.remove()
//     })
// })

// document.querySelector(".search-card-local-love-one").addEventListener("click", function () {
//     let modalBollywood = document.createElement("div");
//     modalBollywood.classList.add("modal", "modal-bollywood");
//     modalBollywood.innerHTML = `<div class="modal-cut material-icons">west</div>
//     <div class="song">
//         <div class="song-image-container"><img src="coverImage.jpg"></div>
//         <div class="track-details-container">
//             <div class="song-name"><h5 style="margin: 1rem 0 0 0;">Song Name</h5></div>
//             <div class="song-name"><h6 style="margin: 0 0 1rem 0;;">Song Name</h6></div>
//         </div>
//         <div class="material-icons song-play-pause" style="margin: 0;">play_circle_filled</div>
//     </div>
//     <div class="song">
//         <div class="song-image-container"><img src="coverImage.jpg"></div>
//         <div class="track-details-container">
//             <div class="song-name"><h5 style="margin: 1rem 0 0 0;">Song Name</h5></div>
//             <div class="song-name"><h6 style="margin: 0 0 1rem 0;;">Song Name</h6></div>
//         </div>
//         <div class="material-icons song-play-pause" style="margin: 0;">play_circle_filled</div>
//     </div>
//     <div class="song">
//         <div class="song-image-container"><img src="coverImage.jpg"></div>
//         <div class="track-details-container">
//             <div class="song-name"><h5 style="margin: 1rem 0 0 0;">Song Name</h5></div>
//             <div class="song-name"><h6 style="margin: 0 0 1rem 0;;">Song Name</h6></div>
//         </div>
//         <div class="material-icons song-play-pause" style="margin: 0;">play_circle_filled</div>
//     </div>
//     <div class="song">
//         <div class="song-image-container"><img src="coverImage.jpg"></div>
//         <div class="track-details-container">
//             <div class="song-name"><h5 style="margin: 1rem 0 0 0;">Song Name</h5></div>
//             <div class="song-name"><h6 style="margin: 0 0 1rem 0;;">Song Name</h6></div>
//         </div>
//         <div class="material-icons song-play-pause" style="margin: 0;">play_circle_filled</div>
//     </div>
//     <div class="song">
//         <div class="song-image-container"><img src="coverImage.jpg"></div>
//         <div class="track-details-container">
//             <div class="song-name"><h5 style="margin: 1rem 0 0 0;">Song Name</h5></div>
//             <div class="song-name"><h6 style="margin: 0 0 1rem 0;;">Song Name</h6></div>
//         </div>
//         <div class="material-icons song-play-pause" style="margin: 0;">play_circle_filled</div>
//     </div>`;
//     searchDetail.appendChild(modalBollywood);

//     document.querySelector(".modal-cut").addEventListener("click", function () {
//         modalBollywood.remove()
//     })
// })

// document.querySelector(".search-card-local-love-two").addEventListener("click", function () {
//     let modalPunjabi = document.createElement("div");
//     modalPunjabi.classList.add("modal", "modal-punjabi");
//     modalPunjabi.innerHTML = `<div class="modal-cut material-icons">west</div>
//     <div class="song">
//         <div class="song-image-container"><img src="coverImage.jpg"></div>
//         <div class="track-details-container">
//             <div class="song-name"><h5 style="margin: 1rem 0 0 0;">Song Name</h5></div>
//             <div class="song-name"><h6 style="margin: 0 0 1rem 0;;">Song Name</h6></div>
//         </div>
//         <div class="material-icons song-play-pause" style="margin: 0;">play_circle_filled</div>
//     </div>
//     <div class="song">
//         <div class="song-image-container"><img src="coverImage.jpg"></div>
//         <div class="track-details-container">
//             <div class="song-name"><h5 style="margin: 1rem 0 0 0;">Song Name</h5></div>
//             <div class="song-name"><h6 style="margin: 0 0 1rem 0;;">Song Name</h6></div>
//         </div>
//         <div class="material-icons song-play-pause" style="margin: 0;">play_circle_filled</div>
//     </div>
//     <div class="song">
//         <div class="song-image-container"><img src="coverImage.jpg"></div>
//         <div class="track-details-container">
//             <div class="song-name"><h5 style="margin: 1rem 0 0 0;">Song Name</h5></div>
//             <div class="song-name"><h6 style="margin: 0 0 1rem 0;;">Song Name</h6></div>
//         </div>
//         <div class="material-icons song-play-pause" style="margin: 0;">play_circle_filled</div>
//     </div>
//     <div class="song">
//         <div class="song-image-container"><img src="coverImage.jpg"></div>
//         <div class="track-details-container">
//             <div class="song-name"><h5 style="margin: 1rem 0 0 0;">Song Name</h5></div>
//             <div class="song-name"><h6 style="margin: 0 0 1rem 0;;">Song Name</h6></div>
//         </div>
//         <div class="material-icons song-play-pause" style="margin: 0;">play_circle_filled</div>
//     </div>
//     <div class="song">
//         <div class="song-image-container"><img src="coverImage.jpg"></div>
//         <div class="track-details-container">
//             <div class="song-name"><h5 style="margin: 1rem 0 0 0;">Song Name</h5></div>
//             <div class="song-name"><h6 style="margin: 0 0 1rem 0;;">Song Name</h6></div>
//         </div>
//         <div class="material-icons song-play-pause" style="margin: 0;">play_circle_filled</div>
//     </div>`;
//     searchDetail.appendChild(modalPunjabi);

//     document.querySelector(".modal-cut").addEventListener("click", function () {
//         modalPunjabi.remove()
//     })
// })

// function loadSong(i, e) {
//     if (e.currentTarget.textContent == "play_circle_filled") {
//         e.currentTarget.textContent = "pause_circle_filled"
//         playPauseBtn.textContent = "pause_circle_filled";
//         audioEle.setAttribute("src", `./music/Folk/${folk[i]}`);
//         audioEle.play();
//     } else {
//         e.currentTarget.textContent = "play_circle_filled"
//         playPauseBtn.textContent = "play_circle_filled";
//         audioEle.pause();
//     }
// }
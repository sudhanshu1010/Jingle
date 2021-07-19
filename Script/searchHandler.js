function searchSongs(songName) {
    let songsList = songs.filter(ele => ele.song.toLowerCase() === songName.toLowerCase());
    return songsList;
}

// fuction to load songs list into songDiv 
function createSingleSongDiv(songName, artist, type){
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

let searchBar = document.querySelector(".search-song");
searchBar.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
        let searchBarModal = document.createElement("div")
        searchBarModal.classList.add("search-details")
        searchBarModal.innerHTML = `<div class="modal-cut material-icons">west</div>`;
        document.querySelector(".searched-items-container").append(searchBarModal)
        
        let songList = searchSongs(searchBar.value);
        searchBar.value = ""
        if(songList.length != 0){
            for(let i = 0; i< songList.length; i++){
                searchBarModal.appendChild(createSingleSongDiv(songList[i].song, songList[i].artist, songList[i].type))
            }
        } else {
            searchBarModal.innerHTML = `
            <div class="modal-cut material-icons"">west</div>
            <div class="nothing-found">
                <img class="nothing-found" src="./Images/nothing-found.png" alt="">
                <h5>Oops!</h5>
            </div>`
        }

        document.querySelectorAll(".modal-cut").addEventListener("click", function () {
            searchBarModal.remove()
        })
    } 
})

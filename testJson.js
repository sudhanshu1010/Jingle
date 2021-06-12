// const fetch = require("node-fetch");
// fetch("https://raw.githubusercontent.com/sudhanshu1010/testJson/main/test.json")
//   .then(response => response.json())
//   .then(function(data){
//     var jsonData = JSON.parse(JSON.stringify(data));
//     // console.log(jsonData)
//     for (var i = 0; i < jsonData.songs.length; i++) {
//         var counter = jsonData.songs[i];
//         playSound(counter.songUrl);
//     }
// });

function playSound() {
  var a = new Audio("https://jatt.download/dren/music/data/Punjabi/202106/Supna_A_Melodious_Journey/48/Supna.mp3/Supna.mp3");
  a.volume = .5
a.play();
}



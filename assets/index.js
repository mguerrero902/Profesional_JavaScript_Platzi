import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "../plugins/AutoPlay.js";

const video = document.querySelector("video");
const button = document.querySelector("#playButton");
const mute = document.querySelector("#muteButton");

const player = new MediaPlayer({
  el: video,
  plugins: [
    //    new AutoPlay()
  ],
});

button.onclick = () => player.togglePlay();
mute.onclick = () => player.toggleMute();

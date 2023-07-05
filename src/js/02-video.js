import Player from "@vimeo/player";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

let currentTime = localStorage.getItem('videoplayer-current-time');

const onPlay = function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
};
player.on('timeupdate', throttle(onPlay, 1000));

if (currentTime) {
    player.setCurrentTime(currentTime);
}
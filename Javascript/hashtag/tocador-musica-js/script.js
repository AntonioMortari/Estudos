const name = document.getElementById('music-name');
const bname = document.getElementById('band-name');
const cover = document.getElementById('cover')
const song = document.getElementById('audio');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const next = document.getElementById('skip')
const previous = document.getElementById('return')
const currentProgress = document.getElementById('current-progress')

const asYouWere = {
    songName : 'As You Were',
    artist : 'TrackTribe',
    file : 'as_you_were'
}


const boomBapflick = {
    songName : 'Boom Bap Flick',
    artist : 'Quincas Moreira',
    file : 'boom_bap_flick'
}


const cantHide = {
    songName : "Can't Hide",
    artist : 'Otis Mcdonald',
    file : 'cant_hide'
}

const playlist = [asYouWere, boomBapflick, cantHide];
let index = 0

let isPlayng = false

function playSong(){
    song.play();
    play.style.display = 'none';
    pause.style.display ='block';
    isPlayng = true;
}

function pauseSong(){
    song.pause();
    play.style.display = 'block';
    pause.style.display = 'none';
    isPlayng = false;
}

function playDecider(){
    if(isPlayng == false){
        playSong();
    }else{
        pauseSong();
    };
}

function initializaSong(){
    cover.src = `imgs/${playlist[index].file}.webp`;
    name.innerText = playlist[index].songName;
    bname.innerText = playlist[index].artist;
    song.src = `songs/${playlist[index].file}.mp3`;
}

initializaSong();

function nextSong(){
    if (index == playlist.lenght){
        index = 0
    }else{
        index = index + 1
    }
    initializaSong()
    playSong()
}

function previousSong(){
    if (index == 0){
        index = playlist.length
    }else{
        index = index - 1;
    }
    initializaSong()
    playSong()
}

function updateProgressBar(){

}



play.addEventListener('click' , playDecider)
pause.addEventListener('click' , playDecider)
previous.addEventListener('click' , previousSong)
next.addEventListener('click', nextSong)
song.addEventListener('timeupdate' , updateProgressBar)



const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const currTime = document.querySelector('#currTime');
const durTime = document.querySelector('#durTime');

//songs
 const songs =  ['caravan' , 'electric-feel', 'cut-your-teeth', 'i-see-fire', 'sexual-healing' ,'sorry'];

//songs index
let songsIndex = 0;

//load songs on dom

loadSongs(songs[songsIndex]);

function loadSongs(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
}
//play song
function playSong(){
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    audio.play();

}

//plause song
function pauseSong(){
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    audio.pause();

}

//prev song

function prevSong(){
     songsIndex --;
    if(songsIndex < 0)
    {
        songsIndex = songs.length -1;
    }
    loadSongs(songs[songsIndex]);
    playSong();
}

//next song
function nextSong(){
     songsIndex ++;
    if(songsIndex > songs.length -1)
    {
        songsIndex = 0;
    }
    loadSongs(songs[songsIndex]);
    playSong();
}
//event listners
playBtn.addEventListener('click', (e)=>{

    const isPlaying = musicContainer.classList.contains('play');
    if(isPlaying){
        pauseSong();
    }
    else{
        playSong();
        }
})

//progress bar
 function progressBar(e){

  const {duration, currentTime} = e.srcElement;
  const progressPer =  (currentTime / duration) * 100 ;
  progress.style.width = `${progressPer}%`;
  
 }
 // Set progress bar
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  console.log(width, clickX, duration);

  audio.currentTime = (clickX / width) * duration;
}
// Click on progress bar
progressContainer.addEventListener('click', setProgress);

// Song ends
audio.addEventListener('ended', nextSong);

//prevoious song 
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

//progress
audio.addEventListener('timeupdate', progressBar);


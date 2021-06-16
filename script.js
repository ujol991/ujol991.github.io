// const musicContainer = document.getElementById('music-container');
// const playBtn = document.getElementById('play');
// const prevBtn = document.getElementById('prev');
// const nextBtn = document.getElementById('next');

// const audio = document.getElementById('audio');
// const progress = document.getElementById('progress');
// const progressContainer = document.getElementById('progress-container');
// const title = document.getElementById('title');
// const cover = document.getElementById('cover');
// const currTime = document.querySelector('#currTime');
// const durTime = document.querySelector('#durTime');

// //songs
//  const songs =  ['caravan' , 'electric-feel', 'cut-your-teeth', 'i-see-fire', 'sexual-healing' ,'sorry'];

// //songs index
// let songsIndex = 0;

// //load songs on dom

// loadSongsongs([songsIndex]);

// function loadSongs(song) {
//     title.innerText = song;
//     audio.src = `music/${song}.mp3`;
//     cover.src = `images/${song}.jpg`;
// }
// //play song
// function playSong(){
//     musicContainer.classList.add('play');
//     playBtn.querySelector('i.fas').classList.remove('fa-play');
//     playBtn.querySelector('i.fas').classList.add('fa-pause');
//     audio.play();

// }

// //plause song
// function pauseSong(){
//     musicContainer.classList.remove('play');
//     playBtn.querySelector('i.fas').classList.add('fa-play');
//     playBtn.querySelector('i.fas').classList.remove('fa-pause');
//     audio.pause();

// }

// //prev song

// function prevSong(){
//      songsIndex --;
//     if(songsIndex < 0)
//     {
//         songsIndex = songs.length -1;
//     }
//     loadSongs(songs[songsIndex]);
//     playSong();
// }

// //next song
// function nextSong(){
//      songsIndex ++;
//     if(songsIndex > songs.length -1)
//     {
//         songsIndex = 0;
//     }
//     loadSongs(songs[songsIndex]);
//     playSong();
// }
// //event listners
// playBtn.addEventListener('click', (e)=>{

//     const isPlaying = musicContainer.classList.contains('play');
//     if(isPlaying){
//         pauseSong();
//     }
//     else{
//         playSong();
//         }
// })

// //progress bar
//  function progressBar(e){

//   const {duration, currentTime} = e.srcElement;
//   const progressPer =  (currentTime / duration) * 100 ;
//   progress.style.width = `${progressPer}%`;
  
//  }
//  // Set progress bar
// function setProgress(e) {
//   const width = this.clientWidth;
//   const clickX = e.offsetX;
//   const duration = audio.duration;
//   console.log(width, clickX, duration);

//   audio.currentTime = (clickX / width) * duration;
// }
// // Click on progress bar
// progressContainer.addEventListener('click', setProgress);

// // Song ends
// audio.addEventListener('ended', nextSong);

// //prevoious song 
// prevBtn.addEventListener('click', prevSong);
// nextBtn.addEventListener('click', nextSong);

// //progress
// audio.addEventListener('timeupdate', progressBar);
 
//---------------------------Music app----------------------------------->

// const form = document.getElementById('form');
// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const password2 = document.getElementById('password2');


// // Check email is valid
// function checkEmail(input) {
//   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   if (re.test(input.value.trim())) {
//     showSuccess(input);
//   } else {
//     showError(input, 'Email is not valid');
//   }
// }

// //showError

// function showError(input,message){
//     const formControl = input.parentElement;
//     formControl.className= 'form-control error';
//     const small = formControl.querySelector('small');
//     small.textContent = message;
// }

// //show successs

// function showSuccess(input){
//     const formControl = input.parentElement;
//     formControl.className = 'form-control success' ;
// }


// //checkRequired Functions
// function checkRequired(inputs){
//     inputs.forEach(input => {
//         if(input.value.trim() === ''){
//                 showError(input, `${getfieldInput(input)} is required.`)
//         }
//         else{
//             showSuccess(input);
//         }
//     })
// }


// //getfielsinput to uppercase

// function getfieldInput(input){

//     return input.id.charAt(0).toUpperCase() + input.id.slice(1);
// }

// // Check input length
// function checkLength(input, min, max) {
//   if (input.value.length < min) {
//     showError(
//       input,
//       `${getfieldInput(input)} must be at least ${min} characters`
//     );
//   } else if (input.value.length > max) {
//     showError(
//       input,
//       `${getfieldInput(input)} must be less than ${max} characters`
//     );
//   } else {
//     showSuccess(input);
//   }
// }



// //check password 

// function checkPasswords(input1, input2){
//       if (input1.value !== input2.value) {
//     showError(input2, 'Passwords do not match');
//   }
// }
// //event listner form

// form.addEventListener('submit', (e) =>{
//     e.preventDefault();
//     // checkRequired
//     checkRequired([username,email,password, password2]);
//     //check email is valid or  not
//     checkEmail(email);
//     //check length 
//     checkLength(username, 3, 15);
//     checkLength(password, 3,15);
//     //password match
//     checkPasswords(password, password2);


// })

//Form Validation ----------------------------------------------------------------------------------->

// const seatsContainer = document.querySelector('.container');
// const seats = document.querySelectorAll('.row .seat:not(.occupied)');
// const count = document.getElementById('count');
// const total = document.getElementById('total');
// const movieSelect = document.getElementById('movie');

// const ticket = document.getElementById('movie');
// let ticketValue = +ticket.value;

// populateUI();

// //update movie data

// function updateMovieData(selectedMovieIndex, selectedMovieValue){
//         localStorage.setItem('selectedMovieIndex', selectedMovieIndex);
//         localStorage.setItem('selectedMovieValue', selectedMovieValue);
// }

// //update count and total
//  function updateSelectedCount(){
//    const selectedSeats = document.querySelectorAll('.row .selected');
//    count.innerText = selectedSeats.length;
//    total.innerText = selectedSeats.length * ticketValue;
//     const seatsIndex = [...selectedSeats].map(seat =>{
//             return [...seats].indexOf(seat);
//     } );
//     localStorage.setItem('selectedIndex', JSON.stringify(seatsIndex));
//  }




// //poulate ui from getting data froom local staorage

// function populateUI(){
//  const selectedSeats = JSON.parse(localStorage.getItem('selectedIndex'));
//  if(selectedSeats !== null && selectedSeats.length > 0){
//     seats.forEach((seat, index) =>{
//         if(selectedSeats.indexOf(index) > -1){
//             seat.classList.add('selected');
//         }
//     })
//  } 

// const movieIndex = localStorage.getItem('selectedMovieIndex');

//  if(movieIndex !== null){

//     movieSelect.selectedIndex = movieIndex;
// }
// }
// //Seat click Event

// movieSelect.addEventListener('change', (e) =>{
//     updateMovieData(e.target.selectedIndex, e.target.value);
//     ticketValue = +e.target.value;
//     updateSelectedCount();
// })


// //event listners
//     seatsContainer.addEventListener('click', (e) =>{
//         if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){ //if not =! does not have class of occupied
//         e.target.classList.toggle('selected');
//         updateSelectedCount();
//     }
// })

// //initial count adn total set

// updateSelectedCount();
 //END OF MOVIES SEAT ___-------------------------------------------------------------------------------------------------------->

// const addUser = document.getElementById('add-user');       
// const doubleBtn = document.getElementById('double');       
// const showMill = document.getElementById('show-millionaires');       
// const sort = document.getElementById('sort');       
// const calWealth = document.getElementById('calculate-wealth');       
// const main = document.getElementById('main');    
// let data = [];   
        

// getRandomUser();
// getRandomUser();






// //get random user fetech api

// async function getRandomUser() {
//     const res = await fetch('https://randomuser.me/api/');
//     const data = await res.json();
//     const user = data.results[0];
//     const newUser = {
//       name : `${user.name.first} ${user.name.last}`,
//       money: Math.floor(Math.random() * 1000000)
//     }
//     addData(newUser);
    
// }

// //Add New  User

// function addData(obj){
//     data.push(obj);
//    updateDOM();
// }
// //calcultae total wealth
// function getWealth(){
//   totalmoney = data.reduce((acc,cur) =>{
//     return acc+= cur.money;
//   },0)
//   let div = document.createElement('tot');
//   div.classList.add('person');

//   div.innerHTML = 
//    `<h2><strong>total</strong>${totalmoney}</h2>`;
//    main.appendChild(div);
// }

// // Double eveyones money
// function doubleMoney() {
//   data = data.map(user => {
//     return { ...user, money: user.money * 2};
//   });

//   updateDOM();
// }

// //Sort the richest
// function sortByRich(){
//   data.sort((a,b) => b.money -a.money);
//   updateDOM();

// }

// function showMillionaires(){
//  data = data.filter(item =>{
//           return item.money > 1000000
//   })

//   updateDOM();
// }


// //Update DOM
// function updateDOM(providedData = data){
//     // Clear main div
//   main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';
  
//     providedData.forEach(item => {
//     const element = document.createElement('div');
//     element.classList.add('person');
//     element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(
//       item.money
//     )}`;
//     main.appendChild(element);
//   });
// }


// // Format number as money - https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
// function formatMoney(number) {
//   return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
// }

// //event listner

// addUser.addEventListener('click', getRandomUser);
// doubleBtn.addEventListener('click', doubleMoney);
// sort.addEventListener('click', sortByRich);
// showMill.addEventListener('click', showMillionaires);
// console.log(calWealth);
// calWealth.addEventListener('click', getWealth);



//END of array methods----------------------------->

const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

//toggle Video status

function toggleVideoStatus(){
    if(video.paused){
        video.play();
    }
    else{
        video.pause();
    }
}

//update Icon play/pause

function updatePlayIcon(){
  if(video.paused){
      play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
  }
  else{
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'    
  }
}

//stop video
function stopVideo(){
     video.currentTime = 0;
  video.pause();
}

//updateProgress
function updateProgress() {

    
    progress.value = (video.currentTime / video.duration) * 100;
      // Get minutes
  let mins = Math.floor(video.currentTime / 60);
      if (mins < 10) {
            mins = '0' + String(mins);
    }

  // Get seconds
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = '0' + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
}

//
function setVideoProgress(){
    video.currentTime = (+progress.value * video.duration) / 100;
}

//Event Listners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('play', updatePlayIcon)
video.addEventListener('pause', updatePlayIcon);
play.addEventListener('click',  toggleVideoStatus);
stop.addEventListener('click', stopVideo);

video.addEventListener('timeupdate', updateProgress);

progress.addEventListener('change', setVideoProgress);
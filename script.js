const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

// List of words for game
const words = [
  'sigh',
  'tense',
  'airplane',
  'ball',
  'pies',
  'juice',
  'warlike',
  'bad',
  'north',
  'dependent',
  'steer',
  'silver',
  'highfalutin',
  'superficial',
  'quince',
  'eight',
  'feeble',
  'admit',
  'drag',
  'loving',
  'chelsea',
  'madrid',
  'nepal',
  'kendra',
  'jennifer',
  'chandler',
  'berlin',
  'suck',
  'iphone',
  'apple',
  'gukha',
  'mug'
];
//init difficulty
let defficulty = localStorage.getItem('difficulty') !== null ? 
                     localStorage.getItem('difficulty') : 'medium';

//show selected difficulty in Dom

difficultySelect.value = localStorage.getItem('difficulty') !== null ? 
                     localStorage.getItem('difficulty') : 'medium';

// Focus on text on start
text.focus();

//init
let radnomWord 

//init sccore
let score = 0;

//init time
let time = 10;

//Generate random word 
function randomGeneratorWord(){
  return words[Math.floor(Math.random() * words.length)];
}

//show Random word to Dom
function showWordToDom(){
  randomWord = randomGeneratorWord();
  word.innerHTML = randomWord;
}

//update score and show to dom
function updateScore(){
  score++;
  scoreEl.innerHTML = score;
}

//update time 
const timeInterval = setInterval(updateTime, 1000)
function updateTime(){
    time--;
    timeEl.innerHTML = `${time} s`;
    if(time === 0){    
        gameOver();
    }



}

//game over
function gameOver(){
      clearInterval(timeInterval);
       endgameEl.innerHTML = `
          <h1>Time ran out</h1>
          <p>Your final score is ${score}</p>
          <button onclick="location.reload()">Reload</button>
  `;
      endgameEl.style.display = 'flex';
}


 //add event Listners
 text.addEventListener('input', (e) =>{
    let term = e.target.value;
    
    //check for match 
    if(randomWord === term){
      updateScore();
      showWordToDom();

      //clear
      e.target.value = '';


      //add seconds
      if(difficulty.value === 'hard'){
          time += 2 ;
      }
      else if(difficulty.value === 'medium'){
          time +=3 ;
      }
      else{
        time +=5;
      }

      updateTime();
    }
 })

 //toggle difficulty
 settingsBtn.addEventListener('click', () =>{
   settings.classList.toggle('hide');
 })

 //selected difficulty
 difficultySelect.addEventListener('change', (e)=>{
    difficulty = e.target.value;
   localStorage.setItem('difficulty', difficulty);
 })

showWordToDom();



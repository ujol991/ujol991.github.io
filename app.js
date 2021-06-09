const img = document.querySelector('.img');
const btn = document.querySelector('.torpay-btn');
btn.addEventListener('click', () =>{
    if(img.classList.contains('show')){
        img.classList.remove('show')
    }
    else{
    img.classList.add('show');
    }
})
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  
  const giveaway = document.querySelector('.giveaway');
  const deadline  = document.querySelector('.deadline');
  const items = document.querySelectorAll('.deadline-format h4');
  
  
  
  const futureDates = new Date(2021, 5, 11, 24, 45, 0);
  const year = futureDates.getFullYear();
  const month = months[futureDates.getMonth()];
  const date = futureDates.getDate();
  const day =  weekdays[futureDates.getDay()];
  const hour = format(futureDates.getHours());
  const min = format(futureDates.getMinutes());
  
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }
  
  
  giveaway.textContent = `EURO CUP STARTS ON ${day}, ${date} ${month} ${year}, ${hour}:${min}am  `
  
  const futureTime = futureDates.getTime();
  
     
  
  
  function getRemaindingTime(){
    const today = new Date().getTime();
    let t = futureTime - today;
  
  // 1s = 1000ms
  //  1min  = 60s;
    //  1 hour =  60 min;
      //1 day = 24 hours;
  //Values in ms
   const  oneDay = 24*60*60*1000;
   const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    
  //calculate all values
  
  let days = (t/oneDay );
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay )/ oneHour);
  let minutes = Math.floor((t % oneHour ) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);
  
  //set values array
  
  const values =  [days, hours, minutes, seconds];
  
  
  items.forEach((item, index)=>{
    item.innerHTML = format(values[index]);
  })
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">Fuck YEAH EURO CUP STARTS</h4>`;
  }
  
  
  }
  
  //set countdown
   let countdown = setInterval(getRemaindingTime ,1000);
  
  //set initial values
  getRemaindingTime();
  
  
  
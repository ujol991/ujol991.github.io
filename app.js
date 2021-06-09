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
const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

const msTolerance = 800;
let clickTime = 0;
let likes = 0;

loveMe.addEventListener('click', (e)=> {
  if (clickTime === 0 ) {
    clickTime = new Date().getTime()
  }else {
    if((new Date().getTime() - clickTime) < msTolerance) {
      // double clicked within the ms tolerance
      createHeart(e);
      times.innerHTML = ++likes;
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
})

const createHeart = (e) => {
  const heart = document.createElement('i');
  heart.classList.add('fas');
  heart.classList.add('fa-heart');

  const x = e.clientX;
  const y = e.clientY;

  const leftO = e.target.offsetLeft;
  const topO = e.target.offsetTop;
  
  heart.style.top = `${y- topO}px`;
  heart.style.left = `${x- leftO}px`;
  loveMe.appendChild(heart);

  setTimeout(()=>heart.remove(), 1000);
}
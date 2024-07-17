const images = [
  '/Images/Slides/1.jpg',
  '/Images/Slides/2.png',
  '/Images/Slides/3.png',
  '/Images/Slides/4.png',
  '/Images/Slides/5.png',
  '/Images/Slides/6.jpg',
  '/Images/Slides/7.png',
  '/Images/Slides/8.png',
  '/Images/Slides/9.jpg',
  '/Images/Slides/10.png',
  '/Images/Slides/11.jpg',
];

let currentIndex = 0;
const sliderImg = document.getElementById('slider-img');

function showImage() {
  sliderImg.src = images[currentIndex];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
}


setInterval(nextImage, 3000);

// Show the first image initially
showImage();



const modebtn = document.createElement('button');
modebtn.innerHTML = 'Change Mode';

const contai = document.getElementById("test9");
contai.appendChild(modebtn);

let darkmode = false;

function darkymode() {
if(!darkmode) {
  document.body.style.backgroundColor = 'red';
} else {
document.body.style.backgroundColor = 'blue';
}
darkmode = !darkmode;
}

modebtn.addEventListener("click", darkymode);


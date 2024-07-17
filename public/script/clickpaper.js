// const wallpapers = [         
//     "Images/1.jpg",
//     "Images/2.png",
//     "Images/3.jpg",    
//  ]

//  let currentIndex = 0;
//  const imes = document.getElementById("hero-section");
//  const btn = document.getElementById("clicky");

//  btn.style.backgroundImage = "url('Images/1.jpg')";


// function shwImage() {
//     imes.src = wallpapers[currentIndex];
//   }

//   function netImg() {
//     currentIndex = (currentIndex + 1) % wallpapers.length;
//     shwImage()
//   }

// //   setInterval(netImg, 3000);

// let left = false;

//   btn.addEventListener("click", netImg);
//   btn.addEventListener("click", function() {
//     if(!left) {
//         btn.style.transform = "rotate(-2deg)";
//     } else {
//         btn.style.transform = "rotate(2deg)";
//     } 
//     left = !left
//   })

//   shwImage();
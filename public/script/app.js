const navbar = document.querySelector(".navbar");
const menuIcon = document.querySelector(".fa-bars");
const closeIcon = document.querySelector(".fa-xmark");

function showMenu() {
   navbar.style.right = "0px";
}

function hideMenu() {
   navbar.style.right = "-200px";
}

const exploreobj = [
   'public/Images/Slides/1.jpg',
   'public/Images/Slides/2.png',
   'public/Images/Slides/3.png',
   'public/Images/Slides/4.png',
]


 const product = [
       {
           id: 0,
           img: 'Images/Slides/1.jpg',
       },
       {
           id: 1,
           img: 'Images/Slides/2.png',
       },
       {
           id: 2,
           img: 'Images/Slides/3.png',
       },
       {
           id: 3,
           img: 'Images/Slides/4.png',
       },
   ];



//    document.addEventListener('DOMContentLoaded', function() {
//     const exploreContainer = document.querySelector('.explore-section');


//                 const exploreCard = document.createElement('div');
//                 exploreCard.classList.add('explore-card');
//                 exploreCard.innerHTML = `
//                     <img src="Images/Wallpapers/Wallpaper 2.jpg" alt="Explore Image" width="100%">
//                     <div class="download-btn-section">
//                         <h5 class="download-btn" data-src="/uploads/${imageFile}">Download <i class="fa-solid fa-download"></i></h5>
//                     </div>
//                 `;
//                 exploreContainer.appendChild(exploreCard);
//             });
    
    

//     exploreContainer.addEventListener('click', function(event) {
//         if (event.target.classList.contains('download-btn')) {
//             const imageSrc = event.target.getAttribute('data-src');
//             if (imageSrc) {
//                 const link = document.createElement('a');
//                 link.href = imageSrc;
//                 link.download = imageSrc.split('/').pop();
//                 document.body.appendChild(link);
//                 link.click();
//                 document.body.removeChild(link);
//             } else {
//                 console.error('Image source is null or undefined.');
//             }
//         }
//     });



document.addEventListener("DOMContentLoaded", () => {
    const placeholders = document.querySelectorAll('.placeholder');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const placeholder = entry.target;
                loadContent(placeholder);
                observer.unobserve(placeholder);
            }
        });
    });

    placeholders.forEach(placeholder => {
        observer.observe(placeholder);
    });

    function loadContent(placeholder) {
        const contentSrc = placeholder.getAttribute('data-src');
       
        setTimeout(() => {
            placeholder.textContent = `Loaded ${contentSrc}`;
            placeholder.classList.add('content');
        }, 1000);
    }
});
  
var video = document.getElementById('myVideo');

function addControls() {
    video.setAttribute('controls', 'controls');
}




video.addEventListener('click', addControls, function() {
  
    if (video.paused) {
        video.play();
    } else {
       
        video.pause();
    }
});

function fetchImagesFromFolder(folderPath) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', folderPath);

        xhr.onload = function() {
            if (xhr.status === 200) {
                const images = JSON.parse(xhr.responseText);
                resolve(images);
            } else {
                reject('Failed to fetch images');
            }
        };

        xhr.send();
    });
}



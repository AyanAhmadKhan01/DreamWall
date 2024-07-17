document.getElementById('fullscreen-btn').addEventListener('click', function() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen()
        .catch(err => {
            alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
    } else {
        document.exitFullscreen();
    }
});


let cardExp = false;

function expand() {
    const pageCard = document.querySelector('.team-page-section');
    const tags = document.getElementById('team-page-tags');
    const icons = document.getElementById('team-page-icons');
    const ownerName = document.getElementById('team-owner-name');

    if (cardExp) { 
        pageCard.style.width = '475px';
        pageCard.style.height = '100%';
        tags.style.display = 'none'
        icons.style.display = 'none'
        ownerName.style.letterSpacing = '0px'
    }
    else {
        pageCard.style.width = '1500px';
        pageCard.style.height = '100%';
        tags.style.display = 'block'
        icons.style.display  = 'block'
         ownerName.style.letterSpacing = '12px'
    }
    cardExp = !cardExp;
}
document.getElementById('expand-btn').addEventListener('click', expand);


function openLink(element) {
    const url = element.getAttribute('data-url');
    const target = element.getAttribute('data-target');
    const link = document.createElement('a');
    link.href = url;
    
    if (target) {
      link.target = target;
    }
    
    link.click();
  }
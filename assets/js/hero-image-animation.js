let heroText1 = document.querySelector('#text-scroll-text-1');
let heroText2 = document.querySelector('#text-scroll-text-2');

heroText1.classList.add('text-animation')
heroText1.addEventListener('animationstart', activateAnimation)
console.log(heroText1)

function activateAnimation() {
    
    heroText2.style.animationDelay = '0ms'; 
    heroText2.classList.add('text-animation');

}
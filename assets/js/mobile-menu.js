let mobileMenuBtn = document.querySelector('#mobile-menu-btn');
let mainContainet = document.querySelector('main');
let hambugerMenu = document.querySelector('#hamburger-menu');
let hambugerMenuCloseBtn = document.querySelector('#menu-close-btn');

mobileMenuBtn.addEventListener('click',mobileMenuOpen);
hambugerMenuCloseBtn.addEventListener('click',mobileMenuClose);



function mobileMenuOpen(){
    hambugerMenu.style.animation = 'menu-fade-open 2s ease-in-out';
    hambugerMenu.classList.add('hamburger-menu-visible');
    hambugerMenu.classList.remove('hamburger-menu-hidden');
    mainContainet.classList.add('opacity-control');
}

function mobileMenuClose(){
    hambugerMenu.style.animation = 'menu-fade-close 2s ease-in-out';
    hambugerMenu.addEventListener('animationend', hideMenu);
    
}

function hideMenu(){

    if (hambugerMenu.style.animation === '2s ease-in-out 0s 1 normal none running menu-fade-close') {
        
        hambugerMenu.classList.remove('hamburger-menu-visible');
        mainContainet.classList.remove('opacity-control');
        hambugerMenu.classList.add('hamburger-menu-hidden');

    }
}
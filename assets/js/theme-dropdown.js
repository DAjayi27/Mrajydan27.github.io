// Variables

// desktop variables
let themeChangerBtnDesktop = document.querySelectorAll('#theme-changer-btn')[0];
let themeChangerMenuDesktop = document.querySelectorAll('#theme-changer-menu')[0];
let themeMenuDesktop = document.querySelector('#header-item-4');
let themeBtn1Desktop = document.querySelectorAll('#theme-btn-1')[0];
let themeBtn2Desktop = document.querySelectorAll('#theme-btn-2')[0];
let themeBtn3Desktop = document.querySelectorAll('#theme-btn-3')[0];

// mobile variables
let themeChangerMenuMobile = document.querySelectorAll('#theme-changer-menu')[1];
let themeMenuMobile = document.querySelector('#theme-changer-menu');
let themeBtn1Mobile = document.querySelectorAll('#theme-btn-1')[1];
let themeBtn2Mobile = document.querySelectorAll('#theme-btn-2')[1];
let themeBtn3Mobile = document.querySelectorAll('#theme-btn-3')[1];

// Event listners
// desktop 
themeChangerBtnDesktop.addEventListener("mouseover",showMenu);
themeChangerBtnDesktop.addEventListener("mouseleave",hideMenu);
themeMenuDesktop.addEventListener("mouseover",showMenu);
themeMenuDesktop.addEventListener("mouseout",hideMenu);
themeChangerMenuDesktop.addEventListener("mouseover",showMenu);
// mobile


// functions

// desktop

function showMenu(){
    themeChangerMenuDesktop.classList.add('show');
    themeChangerMenuMobile.classList.add('show');
}
function hideMenu(){
    themeChangerMenuDesktop.classList.remove('show');
    themeChangerMenuMobile.classList.remove('show');
}

// mobile






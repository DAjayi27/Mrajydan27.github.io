// Variables
let rootVariables  = document.querySelector(':root');
let emailIcon = document.querySelector('#email-icon');
let instagramIcon = document.querySelector('#instagram-icon');
let discordIcon = document.querySelector('#discord-icon');
let twitterIcon = document.querySelector('#twitter-icon');

// Functions
// desktop
themeBtn1Desktop.addEventListener('click', changeToDarkTheme);
themeBtn2Desktop.addEventListener('click', changeToLightTheme);
themeBtn3Desktop.addEventListener('click',changeToSpringTheme);

// mobile
themeBtn1Mobile.addEventListener('click', changeToDarkTheme);
themeBtn2Mobile.addEventListener('click', changeToLightTheme);
themeBtn3Mobile.addEventListener('click', changeToSpringTheme);

function changeToDarkTheme() {
    rootVariables.style.setProperty('--bgcolor-1', '#080808');
    rootVariables.style.setProperty('--bgcolor-2', '#101011');
    rootVariables.style.setProperty('--fontcolor', '#f9f8f6');
    rootVariables.style.setProperty('--headcolor', '#070807');
    rootVariables.style.setProperty('--headerfontcolor', '#B8C3B4');
    rootVariables.style.setProperty('--fonthover', '#FFF9E8');
    rootVariables.style.setProperty('--footercolor','#070807');
    rootVariables.style.setProperty('--header-down-color','#080808');
    emailIcon.setAttribute('src','assets/images/footer/email-icon-dark.png');
    instagramIcon.setAttribute('src','assets/images/footer/instagram-icon-dark.png');
    discordIcon.setAttribute('src','assets/images/footer/discord-icon-dark.png');
    twitterIcon.setAttribute('src','assets/images/footer/twitter-icon-dark.png');
    themeChangerBtnDesktop.setAttribute('src','assets/images/header/theme-btn-dark-2.png');
    hambugerMenuCloseBtn.setAttribute('src','assets/images/header/hamburger-close-dark.png');
    mobileMenuBtn.setAttribute('src','assets/images/header/hamburger-menu-dark.png');
    themeBtn1Mobile.setAttribute('src','assets/images/header/theme-btn-dark.png');
    themeBtn1Desktop.setAttribute('src','assets/images/header/theme-btn-dark.png');
    themeBtn2Mobile.setAttribute('src','assets/images/header/theme-btn-dark-2.png');
    themeBtn2Desktop.setAttribute('src','assets/images/header/theme-btn-dark-2.png');
}

function changeToLightTheme() {
    rootVariables.style.setProperty('--bgcolor-1', '#FEFEFE');
    rootVariables.style.setProperty('--bgcolor-2', '#83A9FD');
    rootVariables.style.setProperty('--fontcolor', '#00000D');
    rootVariables.style.setProperty('--headcolor', '#f4f3eb');
    rootVariables.style.setProperty('--headerfontcolor', '#021124');
    rootVariables.style.setProperty('--fonthover', '#105C53');
    rootVariables.style.setProperty('--footercolor','#f4f3eb');
    rootVariables.style.setProperty('--header-down-color','#f4f3eb');
    emailIcon.setAttribute('src','assets/images/footer/email-icon-light.png');
    instagramIcon.setAttribute('src','assets/images/footer/instagram-icon-light.png');
    discordIcon.setAttribute('src','assets/images/footer/discord-icon-light.png');
    twitterIcon.setAttribute('src','assets/images/footer/twitter-icon-light.png');
    themeChangerBtnDesktop.setAttribute('src','assets/images/header/theme-btn-light.png');
    hambugerMenuCloseBtn.setAttribute('src','assets/images/header/hamburger-close-light.png');
    mobileMenuBtn.setAttribute('src','assets/images/header/hamburger-menu-light.png');
    themeBtn1Mobile.setAttribute('src','assets/images/header/theme-btn-light.png');
    themeBtn1Desktop.setAttribute('src','assets/images/header/theme-btn-light.png');
    themeBtn2Mobile.setAttribute('src','assets/images/header/theme-btn-light-1.png');
    themeBtn2Desktop.setAttribute('src','assets/images/header/theme-btn-light-1.png');
}

function changeToSpringTheme() {
    rootVariables.style.setProperty('--bgcolor-1', '#283618');
    rootVariables.style.setProperty('--bgcolor-2', '#3B5549');
    rootVariables.style.setProperty('--fontcolor', '#FDFEF6');
    rootVariables.style.setProperty('--headcolor', '#F4F3EB');
    rootVariables.style.setProperty('--headerfontcolor', '#021124');
    rootVariables.style.setProperty('--fonthover', '#105C53');
    rootVariables.style.setProperty('--footercolor','#C8CDA9');
    rootVariables.style.setProperty('--header-down-color','#F4F3EB');
    emailIcon.setAttribute('src','assets/images/footer/email-icon-light.png');
    instagramIcon.setAttribute('src','assets/images/footer/instagram-icon-light.png');
    discordIcon.setAttribute('src','assets/images/footer/discord-icon-light.png');
    twitterIcon.setAttribute('src','assets/images/footer/twitter-icon-light.png');
    themeChangerBtnDesktop.setAttribute('src','assets/images/header/theme-btn-2.png');
    hambugerMenuCloseBtn.setAttribute('src','assets/images/header/hamburger-close-light.png');
    mobileMenuBtn.setAttribute('src','assets/images/header/hamburger-menu-light.png');
    themeBtn1Mobile.setAttribute('src','assets/images/header/theme-btn-light.png');
    themeBtn1Desktop.setAttribute('src','assets/images/header/theme-btn-light.png');
    themeBtn2Mobile.setAttribute('src','assets/images/header/theme-btn-light-1.png');
    themeBtn2Desktop.setAttribute('src','assets/images/header/theme-btn-light-1.png');
    themeBtn3Mobile.setAttribute('src','assets/images/header/theme-btn-2.png');
    themeBtn3Desktop.setAttribute('src','assets/images/header/theme-btn-2.png');    
}
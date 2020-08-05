
const main = document.querySelector('main')
const hamburger = document.querySelector('#nav-link');
const mobileLink = document.querySelector('#mobile-link');

const dimmedBg = document.querySelector('#dimmed-bg');

const closeNav1 = document.querySelector('#close-nav-1');
const closeNav2 = document.querySelector('#close-nav-2');

function sideNavBar() {
    var w = window.innerWidth;

    if(w > 750){
        main.style.transform = 'translateX(40vw)'
        dimmedBg.style.visibility = 'visible';
        setTimeout(function(){
            mobileLink.style.display = 'block'
            mobileLink.style.transform = 'translateX(0vw)'
        }, 300);
    } else if (w<750 && w > 450){
        main.style.transform = 'translateX(60vw)'
        dimmedBg.style.visibility = 'visible';
        setTimeout(function(){
            mobileLink.style.display = 'block'
            mobileLink.style.transform = 'translateX(0vw)'
            
        }, 300);
    }else if(w <= 450){
        main.style.transform = 'translateX(80vw)'
        dimmedBg.style.visibility = 'visible';
        setTimeout(function(){
            mobileLink.style.display = 'block'
            mobileLink.style.transform = 'translateX(0vw)'
        }, 300);
    }

}

closeNav = () => {
    main.style.transform = 'translateX(0vw)'
    mobileLink.style.display = 'none'
    mobileLink.style.transform = 'trasnslateX(-40vw)'
    dimmedBg.style.visibility = 'hidden';
}

hamburger.addEventListener('click', sideNavBar);

closeNav1.addEventListener('click', closeNav);
closeNav2.addEventListener('click', closeNav);

window.addEventListener('resize', ()=>{
    var w = window.innerWidth;

    if (w > 1175){
        closeNav();
    }
})
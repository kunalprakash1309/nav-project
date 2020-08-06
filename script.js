
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

// javascript for hovering over nav options
const nav = document.querySelector('nav');


const items = document.querySelectorAll('.nav-li-a');



items.forEach((item) => {
    listNumber = item.dataset.number;

    option = document.querySelector(`div[data-option="${listNumber}"]`);
    option.style.opacity = '0';
    option.style.height = '0';
})


let hideOption = () => {
    option.style.opacity = '1';
    option.style.height = 'fit-content';
    option.style.animationDelay = '50ms';
    option.style.animationIterationCount = 'infinite';
    option.style.animationName = 'hide';
}


items.forEach( (item) => {
    item.addEventListener('mouseenter', () => {
        listNumber = item.dataset.number;

        option = document.querySelector(`div[data-option="${listNumber}"]`);
        
        option.style.opacity = '0';
        option.style.height = '0%';
        option.style.animationDelay = '300ms'
        option.style.animationName = 'show'
        

        item.addEventListener('mouseout', () => {
            hideOption();
        })

        option.addEventListener('mouseenter', () => {
            option.style.animationDelay = '300ms'
            option.style.animationName = 'show';
        })

        option.addEventListener('mouseleave', () => {
            hideOption();
        })

    })
});


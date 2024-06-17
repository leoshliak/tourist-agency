const tLinks = document.querySelectorAll('.t-link');
const tGrids = document.querySelectorAll('.testimonials-grid');
const animItems = document.querySelectorAll('.anim-items');
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-link')
const tesContainer = document.querySelector('.testimonials-container');

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('t-link')) {
        if (e.target.classList.contains('active')) return;
        tLinks.forEach((link) => {
            link.classList.remove('active');
        })
        e.target.classList.add('active');
    }
});

tLinks[0].addEventListener('click', () =>{
    if(!tGrids[0].classList.contains('ignore'))return;
    tGrids[0].classList.remove('ignore');
    tGrids[1].classList.remove('left');
    tGrids[1].classList.add('ignore');
    tGrids[2].classList.add('ignore');
    tGrids[1].classList.remove('show');
    tGrids[2].classList.remove('show');
});

tLinks[1].addEventListener('click', () =>{
    if(!tGrids[1].classList.contains('ignore'))return;
    tGrids[1].classList.remove('ignore');
    tGrids[1].classList.remove('left');
    tGrids[0].classList.add('ignore');
    tGrids[2].classList.add('ignore');
    tGrids[2].classList.remove('show');
    tGrids[1].classList.add('show');
    
});

tLinks[2].addEventListener('click', () =>{
    if(!tGrids[2].classList.contains('ignore'))return;
    tGrids[2].classList.remove('ignore');
    tGrids[0].classList.add('ignore');
    tGrids[1].classList.add('ignore');
    tGrids[1].classList.add('left');
    tGrids[1].classList.remove('show');
    tGrids[2].classList.add('show');
})

if (animItems.length > 0) {
    window.addEventListener('scroll', animScroll);
   tesContainer.addEventListener('scroll', animScroll);
    function animScroll() {
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('s-active');
            } else {
                if(!animItem.classList.contains('anim-no-hide')) {
                    animItem.classList.remove('s-active');
                }
                
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }
    setTimeout(() =>{
       animScroll();
    }, 300);
    
}

menuIcon.addEventListener('click', () =>{
   menuIcon.classList.toggle('active');
   nav.classList.toggle('active');
   document.body.classList.toggle('lock');
});

if(navLinks.length > 0){
    navLinks.forEach(navLink =>{
        navLink.addEventListener('click', onMenuLinkClick)
    });
};

function onMenuLinkClick(e){
    const navLink = e.target;
    if(menuIcon.classList.contains('active')){
        document.body.classList.remove('lock');
        menuIcon.classList.remove('active');
        nav.classList.remove('active');
      }
      
      }
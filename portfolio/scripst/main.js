const nav = document.querySelector('.navigation');
const burger = nav.querySelector('.burger');
const navLinks = nav.querySelector('.nav-links')
document.body.addEventListener('mouseup', function(event) {
    if (event.target !== navLinks || event.target !== navLinks) {
        nav.classList.remove('clicked');
        burger.classList.remove('clicked');
    };
});

burger.addEventListener('click', () => {
    if (burger.classList.contains('clicked')) {
        burger.classList.remove('clicked');
        nav.classList.remove('clicked')
    } else {
        burger.classList.add('clicked');
        nav.classList.add('clicked')
    }
});


const hiddenContent = document.querySelectorAll('.project-container');
hiddenContent.forEach(element => {
    function elementAppear() {
        const introPosition = element.getBoundingClientRect().top;

        const screenPosition = window.innerHeight / 1;
        if (introPosition < screenPosition) {
            element.classList.add('show');
        } else {
            element.classList.remove('show');

        }
    };
    window.addEventListener('scroll', elementAppear);
});
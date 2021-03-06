const bxImg = [...(document.querySelectorAll('.bx-pic'))];

window.addEventListener('scroll', () => {
    const yAxis = (window.scrollY / window.innerHeight) * 2 - 1;
    const speed = 10;
    for (let i = 0; i < bxImg.length; i++) {
        if (i % 2 == 0) {
            bxImg[i].style.transform = `scale(1.2) translate3D(${-yAxis * speed}px, ${0}px, ${0})`;
        } else {
            bxImg[i].style.transform = `scale(1.2) translate3D(${yAxis * speed}px, ${0}px, ${0})`;
        }
    }
})

let btn = document.querySelector('.btn');
let btnTwo = document.querySelector('.btn2');
let menuOverlay = document.querySelector('.m-overlay')
let links = Array.from(document.querySelectorAll('.li'));
let outLinks = Array.from(document.querySelectorAll('out-l'));

function openMenu() {
    menuOverlay.classList.toggle('active');
    links.forEach((link, idx) => {
        setTimeout(() => {
            link.classList.add('active');
        }, idx * 100)
    })
}

function closeMenu() {
    menuOverlay.classList.remove('active');
    setTimeout(() => {
        links.forEach((link) => {
            link.classList.remove('active')
        }, 100)
    })
}

btn.addEventListener('click', openMenu);
btnTwo.addEventListener('click', closeMenu);
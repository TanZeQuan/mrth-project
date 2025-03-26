let text = document.getElementById("text");
let music1 = document.getElementById("music1");

window.addEventListener('scroll', () => {
    Let value = window.scrollY;

    text.style.marginTop = value * 2.5 +'px';
})
const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky",this.window.scrollY > 120);
})
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}

window.onscroll = () =>{
    menu.remove.toggle('bx-x');
    navlist.remove.toggle('active');
}
function downloadCV() {
    const link = document.createElement('a');
    link.href = 'cv.pdf';
    link.download = 'cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function downloadSOLVERSE() {
    const link = document.createElement('a');
    link.href = 'Projects_Data\SOLVERSE.rar';
    link.download = 'Projects_Data\SOLVERSE.rar';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
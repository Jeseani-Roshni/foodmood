const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY > 0)
})
// let menu = document.querySelector(".menu");

// let navmenu = document.querySelector(".navmenu");

// menu.onclick = () => {
//     menu.classList.toggle('open')
// }

// function myFunction(){
//     var ele=document.querySelector('.menu');
//     ele.classList.toggle("navmenu.open")}

function respnav() {
    var navmenu = document.querySelector(".navmenu")
    if(navmenu.className === "navmenu"){
       navmenu.className += " responsive";
    } else{
       navmenu.className = "navmenu";
    }
 }
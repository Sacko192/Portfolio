/***********SCROLL SECTION */

window.onscroll = () =>{
    var header = document.querySelector("header");

    header.classList.toggle("sticky", window.scrollY > 100)
}

var menu = document.querySelector("#menu");
var navbar = document.querySelector(".navbar");

menu.addEventListener("click", ()=> {
    navbar.classList.add("menu-show")
})

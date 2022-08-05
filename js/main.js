var menu_btn = document.getElementById("button");
var menu_bar = document.getElementById("menu");

menu_btn.addEventListener('click' , function(){
    menu_btn.classList.toggle('is-active');
    menu_bar.classList.toggle('came');
})
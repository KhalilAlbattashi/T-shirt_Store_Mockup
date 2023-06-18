const exit_btn = document.querySelector(".icon");
const menu = document.querySelector(".customize_window");
const customize_btn = document.querySelector(".customize_btn");

customize_btn.addEventListener("click", open);
exit_btn.addEventListener("click", closeNav);


function open(){
    menu.style.display = "block";
}

function closeNav() {
    menu.style.display = "none";
}

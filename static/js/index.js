const body = document.querySelector(".page_body");
const exit_btn = document.querySelector(".icon");
const menu = document.querySelector(".customize_window");
const customize_btn = document.querySelector(".customize_btn");

// color buttons
const default_color =  document.querySelector(".default_color_btn");
const color1 =  document.querySelector(".color_btn_1");
const color2 =  document.querySelector(".color_btn_2");
const color3 =  document.querySelector(".color_btn_3");
const color4 =  document.querySelector(".color_btn_4");
const color5 =  document.querySelector(".color_btn_5");
const color6 =  document.querySelector(".color_btn_6");
const color7 =  document.querySelector(".color_btn_7");
const color8 =  document.querySelector(".color_btn_8");
// font buttons
const default_font = document.querySelector(".default_font_button");
const font1 = document.querySelector(".font_button1");
const font2 = document.querySelector(".font_button2");
const font3 = document.querySelector(".font_button3");
const font4 = document.querySelector(".font_button4");
const font5 = document.querySelector(".font_button5");
const font6 = document.querySelector(".font_button6");
const font7 = document.querySelector(".font_button7");
const font8 = document.querySelector(".font_button8");



//elements to change 
const main = document.querySelector(".main");
const subscribtion = document.querySelector(".subscribtion_container");
const footer = document.querySelector("footer");


// Event Listeners
//opening and closing the menu
customize_btn.addEventListener("click", open);
exit_btn.addEventListener("click", closeNav);
//changing colors
default_color.addEventListener("click", defaultcolor);
color1.addEventListener("click", changeColor_1);
color2.addEventListener("click" , changeColor_2);
color3.addEventListener("click", changeColor_3);
color4.addEventListener("click", changeColor_4);
color5.addEventListener("click", changeColor_5);
color6.addEventListener("click", changeColor_6);
color7.addEventListener("click", changeColor_7);
color8.addEventListener("click", changeColor_8);
// changing fonts
default_font.addEventListener("click", defaultfont);
font1.addEventListener("click", change_font_1);

// Functions
function open(){
    menu.style.display = "block";
}

function closeNav() {
    menu.style.display = "none";
}


function defaultcolor(){
    main.style.background = "linear-gradient(-90deg, #fce7f6 0%, #e3eaf8 100%)";
    subscribtion.style.background = "#faedeb";
    footer.style.background = "black";
}


function changeColor_1(){
    main.style.background = "linear-gradient(135deg,violet 0%,red 100%)";
    subscribtion.style.background = "linear-gradient(135deg,violet 0%,red 100%)";
    footer.style.background = "black";
}

function changeColor_2(){
    // main.style.background = "linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)";
    // subscribtion.style.background = "linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)";
    main.style.background = "linear-gradient(135deg,tomato 0%,violet 100%)";
    subscribtion.style.background = "linear-gradient(135deg,tomato 0%,violet 100%)";
    footer.style.background = "black";
}

function changeColor_3(){
    main.style.background = "linear-gradient(135deg,gray 0%,greenyellow 100%)";
    subscribtion.style.background = "linear-gradient(135deg,gray 0%,greenyellow 100%)";
    footer.style.background = "black";
}
function changeColor_4(){
    main.style.background = "linear-gradient(135deg,gray 0%,burlywood 100%)";
    subscribtion.style.background = "linear-gradient(135deg,gray 0%,burlywood 100%)";
    footer.style.background = "black";
}
function changeColor_5(){
    main.style.background = "linear-gradient(135deg,blanchedalmond 0%,yellowgreen 100%)";
    subscribtion.style.background = "linear-gradient(135deg,blanchedalmond 0%,yellowgreen 100%)";
    footer.style.background = "black";
}
function changeColor_6(){
    main.style.background = "linear-gradient(135deg,burlywood 0%,pink 100%)";
    subscribtion.style.background = "linear-gradient(135deg,burlywood 0%,pink 100%)";
    footer.style.background = "black";
}
function changeColor_7(){
    main.style.background = "linear-gradient(135deg,beige 0%,yellow 100%)";
    subscribtion.style.background = "linear-gradient(135deg,beige 0%,yellow 100%)";
    footer.style.background = "black";
}
function changeColor_8(){
    main.style.background = "linear-gradient(135deg,beige 0%,blueviolet 100%)";
    subscribtion.style.background = "linear-gradient(135deg,beige 0%,blueviolet 100%)";
    footer.style.background = "black";
}

//fonts functions

function defaultfont(){
    body.style.fontFamily = 'Poppins';
}

// function change_font_1(){
//     body.style.fontFamily =  "Times New Roman', Times, serif";
// }
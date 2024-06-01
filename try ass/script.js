
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");

let icon = document.querySelector("#icon");
let modal = document.querySelector("#modal");
let child = document.querySelector("#child");
btn1.onclick= function (){
   modal.classList.remove('hide');
}
btn2.onclick= function (){
   modal.classList.remove('hide');
}
btn3.onclick= function (){
   modal.classList.remove('hide');
}
icon.onclick= function(){
   modal.classList.add('hide');
}

modal.onclick=function(){
   modal.classList.add('hide');}

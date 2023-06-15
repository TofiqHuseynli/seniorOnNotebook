let container = document.querySelector(".container");
let navBar = document.querySelector(".navbar");
let toggle = document.querySelector(".toggle");
let dash = document.querySelectorAll(".div");
let icon = document.querySelectorAll(".icon");
let i = document.querySelector(".fa-angle-left");
let mode = document.querySelector(".reto");
let point = document.querySelector(".point");
let header =document.querySelector(".header");

toggle.addEventListener('click',()=>{
    navBar.classList.toggle("min");
    i.classList.toggle("fa-angle-left");
    i.classList.toggle("fa-angle-right");

});

mode.addEventListener('click',()=>{
    point.classList.toggle("pointe")

    if(point.classList.contains("pointe")){
        navBar.style.backgroundColor = "gray"
        navBar.style.color = "white"
        dash.forEach(function(e){
            e.style.color = "white"
        })
        icon.forEach(function(e){
            e.style.color = "white"
        })
        header.style.color = "white"
        container.style.backgroundColor = "black"
    }else{
        navBar.style.backgroundColor = "white"
        dash.forEach(function(e){
            e.style.color = "black"
        })
        icon.forEach(function(e){
            e.style.color = "black"
        })
        header.style.color = "black"
        container.style.backgroundColor = " rgb(190, 248, 248)"
    }
})
   
    

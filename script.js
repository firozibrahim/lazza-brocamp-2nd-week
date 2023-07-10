let menuButton=document.querySelector('#menu_btn');
let links=document.querySelector("#links");
menuButton.addEventListener("click",()=>{
    links.classList.toggle("active")
})
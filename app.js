// navbar scroll function
window.onscroll = function(){scroll()}
function scroll(){
    let navbar = document.querySelector(".nav")
if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
    navbar.classList.add("nav-scroll")
}

else{
    navbar.classList.remove("nav-scroll")
}

}

// image click

let images = document.querySelectorAll(".image")
let modal = document.querySelector(".modal-window")

function onClick(element) {
   
   modal.classList.add("modal-open")
   document.getElementById("img01").src = element.src;
   let captionText = document.querySelector("#caption");
    captionText.innerHTML = element.alt;
  }

  let close = document.querySelector(".xbtn")

  close.addEventListener("click",function(){

    modal.classList.remove("modal-open")


  })


  let burger = document.querySelector(".burger")
let burgerdiv = document.querySelector(".burgerdiv")
  burger.addEventListener("click",function(){

    burgerdiv.classList.toggle("burgerdisplay")

  })
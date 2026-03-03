//selecting the variables
let closeText=document.getElementById("close-text")
let menubar=document.getElementById("menu__bar")
let menuList=document.querySelector(".menu-container")
let closemenu=document.querySelector(".close__menu")

let sliderleft = document.getElementById("slider_left")
let sliderright = document.getElementById("slider_right")
let sliderimg=document.querySelector(".slider-img")

let blackheart = document.querySelectorAll(".blackheart")



//closing and menu elements
closeText.addEventListener("click", function(){
    closeText.parentElement.remove()
})
menubar.addEventListener("click", function(){
   menuList.style.left=0
})
closemenu.addEventListener("click",function(){
    menuList.style.left="-50%"
})

//slider image
let sliderIndex = 0;

sliderright.addEventListener("click", function(){
    sliderIndex = sliderIndex+100
    if(sliderIndex>200){
        sliderIndex = 0
        sliderimg.style.marginLeft = 0;
    }
    else{
        sliderimg.style.marginLeft="-"+sliderIndex+"vw"
    }
})
sliderleft.addEventListener("click", function(){
    if(sliderIndex==0){
        sliderIndex = 200
        sliderimg.style.marginLeft="-"+sliderIndex+"vw"
    }
    else{
        sliderIndex=sliderIndex-100
        sliderimg.style.marginLeft="-"+sliderIndex+"vw"
    }
})

blackheart.forEach((btn)=>{
    btn.addEventListener("click",function(e){
        
        
        if(e.target.src.indexOf("blackheart")>0)//checks the blackheart are in name
        {
            e.target.src="image/redheart.png"
        }
        else{
            e.target.src="image/blackheart.png"
        }
    })
})



// Scroll animation
window.addEventListener("scroll", function () {
  var elements = document.querySelectorAll(".initial-scroll-animate");
  elements.forEach((el) => {
    let windowHeight = window.innerHeight;
    var elbound = el.getBoundingClientRect();

    if (windowHeight > elbound.top - 100) {
      el.classList.remove("reveal-scroll-animate");
    }
  });
});

// Horizontal scroll with arrow keys
const wantedCards = document.querySelector(".Wanted__cards");

// Listen for key press
window.addEventListener("keydown", function (event) {
  // Right arrow → scroll forward
  if (event.key === "ArrowRight") {
    wantedCards.scrollBy({
      left: 300, // amount to move
      behavior: "smooth",
    });
  }
  // Left arrow → scroll backward
  else if (event.key === "ArrowLeft") {
    wantedCards.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  }
});
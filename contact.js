//selecting the variables
let closeText=document.getElementById("close-text")
let menubar=document.getElementById("menu__bar")
let menuList=document.querySelector(".menu-container")
let closemenu=document.querySelector(".close__menu")

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


//contact us

let submit=document.getElementById("submit")
submit.addEventListener("click", function(e){
    e.preventDefault()
    let exceptedname = /^[a-zA-Z]+$/
    let exceptedemail = /^[a-zA-Z0-9]+@gmail\.com$/

    let inputname=document.getElementById("inputname")
    let inputemail=document.getElementById("inputemail")
    let inputtext=document.getElementById("inputtext")
    let textResult=document.getElementById("textResult")

    let validate= true

    if(exceptedname.test(inputname.value)== false){
        document.querySelector(".nameError").style.display = "inline"
        validate= false
    }
    else{
       document.querySelector(".nameError").style.display = "none"
    }
    if(exceptedemail.test(inputemail.value) == false){
        document.querySelector(".emailError").style.display = "inline"
        validate= false
    }
    else{
        document.querySelector(".emailError").style.display = "none"
    }
    let maxChars = 100;


    inputtext.addEventListener("input", function () {
       let currentLength = inputtext.value.length;


     if (currentLength > maxChars) {

    inputtext.value = inputtext.value.substring(0, maxChars);
    currentLength = maxChars;

    textResult.textContent = "You reached the 100 character limit";
    textResult.style.color = "red";
    } else {
    textResult.textContent = `${currentLength}/${maxChars} characters`;
    textResult.style.color = "white";
    }
    });
    if(validate == true){
        alert("submitted Successfully")
    }
})
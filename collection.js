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

//Product search functionality 
var productContainer=document.querySelector(".product__cards")

var search= document.getElementById("search")
var productList = productContainer.querySelectorAll("div")
search.addEventListener("keyup", function(){
    var enteredValue = event.target.value.toUpperCase()

        for(count=0; count<productList.length; count = count+1){
            var productname= productList[count].querySelector("h3").textContent

            if(productname.toUpperCase().indexOf(enteredValue)<0){

                productList[count].style.display="none"
            }
            else{
                productList[count].style.display="block"
            }
        }
    
})




// Checkbox Filter Functionality
var checkboxes = document.getElementsByName("tags");
var productCards = document.querySelectorAll(".product__card");

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    // Get all checked values
    let checkedValues = Array.from(checkboxes)
      .filter((chk) => chk.checked)
      .map((chk) => chk.value.toLowerCase());

    // Loop through all products
    productCards.forEach((card) => {
      let name = card.querySelector("h3").textContent.toLowerCase();

      // Show card if it matches any checked value, or show all if none checked
      if (
        checkedValues.length === 0 ||
        checkedValues.some((val) => name.includes(val))
      ) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
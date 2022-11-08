let panier = document.querySelector(".panier");
let nouveauproduit = document.querySelector(".add-ur-product");
let detailduproduit = document.querySelectorAll(".product");
let products =document.querySelector(".products");
function np(){
nouveauproduit.addEventListener("click",function(){
        setTimeout(()=>{
            window.location = "nouveauproduit.html";
        },200)
    
})
}
function p (){
panier.addEventListener("click",function(){
    setTimeout(()=>{
        window.location = "panier.html";
    },200)

})
}

function dp(){
 detailduproduit.forEach(function(item){
    item.addEventListener("click",function(e){
        setTimeout(()=>{
            window.location = "detailduproduit.html";
        },200)
        let imageofproduct = item.e.target.className;
        console.log(imageofproduct)
    })
})
}
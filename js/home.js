let textTitle1 = document.getElementById("txt1");
let text1 = "amine market place enjoy                 ";
let i = 0;

    setInterval(function(){
        textTitle1.innerHTML += text1[i];
        i+=1;
        if(i>text1.length){
           textTitle1.innerHTML = '';
           i = 0;
        }
        },200)

        let landingpage = document.querySelector(".home");

//get array of images
let imgofarray = ["background1.jpeg","background2.jpeg","background3.jpeg","background-home.jpeg","bg-2.jpeg"];
let randomImages;
    
    randomImages = setInterval(()=>{
    //get random number betwen 0 - 4
let randomnumber = Math.floor(Math.random()*imgofarray.length);
//change background image url
landingpage.style.backgroundImage = 'url("images/'+imgofarray[randomnumber]+'")';

},9000)

let zonofproduct = document.querySelector(".my-products");

 const allproduct = `
 <div class="container">
 <div class="products" onclick={dp()}>
     <div class="product">
         <div class="img-product">
             <img src="images/product1.jpg" alt="product1">
         </div>
         <div class="info-product">
             <h4>Manette</h4>
             <span>prix: <span class="prix">2200DA</span></span>
             <span>disponibilite: <span class="disp">disponible</span></span>
         </div>
     </div>
     <div class="product">
         <div class="img-product">
             <img src="images/product2.jpg" alt="product1">
         </div>
         <div class="info-product">
             <h4>Manette</h4>
             <span>prix: <span class="prix">2200DA</span></span>
             <span>disponibilite: <span class="disp">disponible</span></span>
         </div>
     </div>
     <div class="product">
         <div class="img-product">
             <img src="images/product3.jpg" alt="product1">
         </div>
         <div class="info-product">
             <h4>Manette</h4>
             <span>prix: <span class="prix">2200DA</span></span>
             <span>disponibilite: <span class="disp">disponible</span></span>
         </div>
     </div>
     <div class="product">
         <div class="img-product">
             <img src="images/product4.jpg" alt="product1">
         </div>
         <div class="info-product">
             <h4>Manette</h4>
             <span>prix: <span class="prix">2200DA</span></span>
             <span>disponibilite: <span class="disp">disponible</span></span>
         </div>
     </div>
     <div class="product">
         <div class="img-product">
             <img src="images/product5.jpg" alt="product1">
         </div>
         <div class="info-product">
             <h4>Manette</h4>
             <span>prix: <span class="prix">2200DA</span></span>
             <span>disponibilite: <span class="disp">disponible</span></span>
         </div>
     </div>
     <div class="product">
         <div class="img-product">
             <img src="images/product6.jpg" alt="product1">
         </div>
         <div class="info-product">
             <h4>Manette</h4>
             <span>prix: <span class="prix">2200DA</span></span>
             <span>disponibilite: <span class="disp">disponible</span></span>
         </div>
     </div>
     <div class="product">
         <div class="img-product">
             <img src="images/product7.jpg" alt="product1">
         </div>
         <div class="info-product">
             <h4>Manette</h4>
             <span>prix: <span class="prix">2200DA</span></span>
             <span>disponibilite: <span class="disp">disponible</span></span>
         </div>
     </div>
     <div class="product">
         <div class="img-product">
             <img src="images/product8.jpg" alt="product1">
         </div>
         <div class="info-product">
             <h4>Manette</h4>
             <span>prix: <span class="prix">2200DA</span></span>
             <span>disponibilite: <span class="disp">disponible</span></span>
         </div>
     </div>
 </div>
</div>
 `
zonofproduct.innerHTML = allproduct;

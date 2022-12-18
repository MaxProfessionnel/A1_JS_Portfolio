
//v--------queryselector-------v


const btn = document.getElementById("btn");
const h1 = document.querySelectorAll("h1");
const labelQcm = document.querySelectorAll("#qcm label");
const avatar = document.getElementById("me")
const prenom = document.querySelector("#preNom");
const body =document.querySelector('body');
const input= document.querySelectorAll('input')
//v----------Evenement----------v
btn.addEventListener("click", function() {

    for (let i = 0; i < 3; i++) {
        h1[i].classList.toggle("blue");//met tous les titres h1 en bleu lorsqu'on clique sur le bouton
      }  
    for (let i = 0; i < 3; i++) {
        labelQcm[i].classList.toggle("red");//met tous les label des inputs du formulaire en rouge lorsqu'on clique sur le bouton
    }  
    for(let j=0; j<3; j++){
        input[j].style.backgroundColor="pink";//change la couleur de fond des 3 premiers inputs en rose
    }

})

avatar.addEventListener("click", function(){
    prenom.classList.toggle("animatedPrenom");//fait bouger le prenom et le nom quand on clique sur l'avatar grace à la classe animatedPrenom
    body.classList.toggle("nightMode");//transforme le body en noir ainsi que les h1 et p en blanc en cliquant sur l'avatar
    
})






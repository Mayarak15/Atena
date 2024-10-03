function entrar(){
    window.location.href = "paginainicial.html";
}
menuimg = document.querySelector("#img_menu");
fecharmenu = document.querySelector("#fechar");
menuu = document.querySelector("#menuhamburguer");

function menu(){
   
    if(fecharmenu.style.display = "none"){
        fecharmenu.style.display  = "block";
        menuimg.style.display  = "none";
        menuu.style.display = "block"
}
}
function menufechar(){
  
if(fecharmenu.style.display = "block"){
    fecharmenu.style.display  = "none";
    menuimg.style.display  = "block";
    
        menuu.style.display = "none"
}
}
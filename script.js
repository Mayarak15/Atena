function entrar(){
    window.location.href = "paginainicial.html";
}

menu = document.querySelector("#opc_menu")
fechar = document.querySelector("#fecharmenu")


function embloco(){
    menu.style.right = "0";
    fechar = document.querySelector("#fecharmenu").style.display = "block"
    abrir = document.querySelector("#abrirmenu").style.display = "none"
}
function invi(){
    menu.style.right = "-100%";
    abrir = document.querySelector("#abrirmenu").style.display = "block"
    fechar = document.querySelector("#fecharmenu").style.display = "none"
}

menuperfil = document.querySelector("#menuperfil");

function fecharmenuperfil(){
    menuperfil.style.bottom = "-100%"
}
function menuperrfil(){
    menuperfil.style.bottom = "0"
}

function grupo(){
    window.location.href = "grupo.html";
}

definirtema = document.querySelector("#definirtema");
imagtema = document.querySelector("#materiaescolhida_img");
humtema = document.querySelector("#materiaescolhida_h1");

function voltartema(){
    definirtema.style.bottom = "-100%";
}

function humanas(){
    definirtema.style.bottom = "0";
    imagtema.src = "./imagens/humano.png";
    humtema.innerHTML = "Ciências <br> Humanas"
}
function natureza(){
    definirtema.style.bottom = "0";
    imagtema.src = "./imagens/natureza.png";
    humtema.innerHTML = "Ciências da<br> Natureza"
}
function linguagens(){
    definirtema.style.bottom = "0";
    imagtema.src = "./imagens/redacao.png";
    humtema.innerHTML = "Linguagens"
}
function matematica(){
    definirtema.style.bottom = "0";
    imagtema.src = "./imagens/matematica.png";
    humtema.innerHTML = "Matemática"
}
function tecnologia(){
    definirtema.style.bottom = "0";
    imagtema.src = "./imagens/tecnologia.png";
    humtema.innerHTML = "Tecnologia"
}

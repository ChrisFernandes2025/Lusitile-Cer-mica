document.addEventListener("DOMContentLoaded", () =>{


const cookies = document.getElementById("cookies");
const aceitarCookies = document.getElementById("aceitarCookies");
const recusarCookies = document.getElementById("recusarCookies");

aceitarCookies.addEventListener("click", () =>{
    cookies.style.display = "none";
});

recusarCookies.addEventListener("click", () =>{
    cookies.style.display = "none";
});
})


const abrirExterior =
document.getElementById("abrirExterior");
const fecharExterior =
document.getElementById("fecharExterior");
const galeriaExterior =
document.getElementById("galeriaExterior");

abrirExterior.addEventListener("click", function(){

    galeriaExterior.style.display="flex";
});

fecharExterior.addEventListener("click", function(){

    galeriaExterior.style.display="none"
})

const abrirPequenosFormatos =
document.getElementById("abrirPequenosFormatos");
const fecharPequenosFormatos =
document.getElementById("fecharPequenosFormatos");
const galeriaPequenosFormatos =
document.getElementById("galeriaPequenosFormatos");

abrirPequenosFormatos.addEventListener("click", function(){

    galeriaPequenosFormatos.style.display="flex";
});

fecharPequenosFormatos.addEventListener("click", function(){

    galeriaPequenosFormatos.style.display="none"
})

const abrirPavimento = document.getElementById("abrirPavimento");
const fecharPavimento = document.getElementById("fecharPavimento");
const galeriaPavimento = document.getElementById("galeriaPavimento");

abrirPavimento.addEventListener("click", function () {
    galeriaPavimento.style.display = "flex";
});

fecharPavimento.addEventListener("click", function () {
    galeriaPavimento.style.display = "none";
});

const abrirRevestimento = document.getElementById("abrirRevestimento");
const fecharRevestimento = document.getElementById("fecharRevestimento");
const galeriaRevestimento = document.getElementById("galeriaRevestimento");

abrirRevestimento.addEventListener("click", function () {
    galeriaRevestimento.style.display = "flex";
});

fecharRevestimento.addEventListener("click", function () {
    galeriaRevestimento.style.display = "none";
});

const abrirGrandesFormatos = document.getElementById("abrirGrandesFormatos");
const fecharGrandesFormatos = document.getElementById("fecharGrandesFormatos");
const galeriaGrandesFormatos = document.getElementById("galeriaGrandesFormatos");

abrirGrandesFormatos.addEventListener("click", function () {
    galeriaGrandesFormatos.style.display = "flex";
});

fecharGrandesFormatos.addEventListener("click", function () {
    galeriaGrandesFormatos.style.display = "none";
});
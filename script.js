document.addEventListener("DOMContentLoaded", () => {

// COOKIES
const cookies = document.getElementById("cookies");
const aceitarCookies = document.getElementById("aceitarCookies");
const recusarCookies = document.getElementById("recusarCookies");

const escolhaCookies = localStorage.getItem("cookiesLusitile");

if (cookies) {
  if (escolhaCookies === "aceites" || escolhaCookies === "recusados") {
    cookies.style.display = "none";
  } else {
    cookies.style.display = "flex";
  }
}

if (aceitarCookies) {
  aceitarCookies.addEventListener("click", () => {
    localStorage.setItem("cookiesLusitile", "aceites");
    cookies.style.display = "none";
  });
}

if (recusarCookies) {
  recusarCookies.addEventListener("click", () => {
    localStorage.setItem("cookiesLusitile", "recusados");
    cookies.style.display = "none";
  });
}


  // GALERIA EXTERIOR
  const abrirExterior = document.getElementById("abrirExterior");
  const fecharExterior = document.getElementById("fecharExterior");
  const galeriaExterior = document.getElementById("galeriaExterior");

  if (abrirExterior && fecharExterior && galeriaExterior) {
    abrirExterior.addEventListener("click", () => {
      galeriaExterior.style.display = "flex";
    });

    fecharExterior.addEventListener("click", () => {
      galeriaExterior.style.display = "none";
    });
  }




  // GALERIA PAVIMENTO
  const abrirPavimento = document.getElementById("abrirPavimento");
  const fecharPavimento = document.getElementById("fecharPavimento");
  const galeriaPavimento = document.getElementById("galeriaPavimento");

  if (abrirPavimento && fecharPavimento && galeriaPavimento) {
    abrirPavimento.addEventListener("click", () => {
      galeriaPavimento.style.display = "flex";
    });

    fecharPavimento.addEventListener("click", () => {
      galeriaPavimento.style.display = "none";
    });
  }


  // GALERIA REVESTIMENTO
  const abrirRevestimento = document.getElementById("abrirRevestimento");
  const fecharRevestimento = document.getElementById("fecharRevestimento");
  const galeriaRevestimento = document.getElementById("galeriaRevestimento");

  if (abrirRevestimento && fecharRevestimento && galeriaRevestimento) {
    abrirRevestimento.addEventListener("click", () => {
      galeriaRevestimento.style.display = "flex";
    });

    fecharRevestimento.addEventListener("click", () => {
      galeriaRevestimento.style.display = "none";
    });
  }


  // GALERIA GRANDES FORMATOS
  const abrirGrandesFormatos = document.getElementById("abrirGrandesFormatos");
  const fecharGrandesFormatos = document.getElementById("fecharGrandesFormatos");
  const galeriaGrandesFormatos = document.getElementById("galeriaGrandesFormatos");

  if (abrirGrandesFormatos && fecharGrandesFormatos && galeriaGrandesFormatos) {
    abrirGrandesFormatos.addEventListener("click", () => {
      galeriaGrandesFormatos.style.display = "flex";
    });

    fecharGrandesFormatos.addEventListener("click", () => {
      galeriaGrandesFormatos.style.display = "none";
    });
  }


  // CARROSSEL DO HERO
  const slides = document.querySelectorAll(".hero-slide");
  let slideAtual = 0;

  if (slides.length > 0) {
    setInterval(() => {
      slides[slideAtual].classList.remove("ativo");

      slideAtual = (slideAtual + 1) % slides.length;

      slides[slideAtual].classList.add("ativo");
    }, 5000);
  }

});
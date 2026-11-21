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
    }, 3500);
  }

});

const botaoCalcular = document.getElementById("calcularArea");

if (botaoCalcular) {
  botaoCalcular.addEventListener("click", () => {
    const comprimento = parseFloat(
      document.getElementById("comprimento").value
    );

    const largura = parseFloat(
      document.getElementById("largura").value
    );

    const desperdicio = parseFloat(
      document.getElementById("desperdicio").value
    );

    const larguraPeca = parseFloat(
      document.getElementById("larguraPeca").value
    );

    const comprimentoPeca = parseFloat(
      document.getElementById("comprimentoPeca").value
    );

    const resultado = document.getElementById("resultadoArea");

    if (!comprimento || !largura || comprimento <= 0 || largura <= 0) {
      resultado.innerHTML = `
        <span>Quantidade estimada</span>
        <strong>0 m²</strong>
        <p>Introduza medidas válidas para calcular.</p>
      `;
      return;
    }

    const area = comprimento * largura;
    const areaComDesperdicio = area * (1 + desperdicio / 100);

    let textoPecas = "";

    if (
      larguraPeca &&
      comprimentoPeca &&
      larguraPeca > 0 &&
      comprimentoPeca > 0
    ) {
      const areaPeca =
        (larguraPeca / 100) * (comprimentoPeca / 100);

      const numeroPecas = Math.ceil(
        areaComDesperdicio / areaPeca
      );

     textoPecas = `
     <p class="resultado-pecas">
     Aproximadamente <strong>${numeroPecas} peças</strong>
     de ${larguraPeca} × ${comprimentoPeca} cm.
     </p>
`    ;
    }

    resultado.innerHTML = `
      <span>Quantidade estimada</span>
      <strong>${areaComDesperdicio.toFixed(2)} m²</strong>

      <p>
        Área base: ${area.toFixed(2)} m² ·
        Margem aplicada: ${desperdicio}%
      </p>

      ${textoPecas}
    `;
  });
}

const botaoLimpar = document.getElementById("limparCalculo");

if (botaoLimpar) {
  botaoLimpar.addEventListener("click", () => {
    document.getElementById("comprimento").value = "";
    document.getElementById("largura").value = "";
    document.getElementById("larguraPeca").value = "";
    document.getElementById("comprimentoPeca").value = "";
    document.getElementById("desperdicio").value = "10";

    document.getElementById("resultadoArea").innerHTML = `
      <span>Quantidade estimada</span>
      <strong>0 m²</strong>
      <p>Introduza as medidas para calcular.</p>
    `;
  });
}

const camposCalculadora = [
  "comprimento",
  "largura",
  "larguraPeca",
  "comprimentoPeca"
];

camposCalculadora.forEach((id) => {
  const campo = document.getElementById(id);

  if (campo) {
    campo.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        botaoCalcular.click();
      }
    });
  }
});

const botoesCarrinho = document.querySelectorAll(".adicionar-carrinho");

botoesCarrinho.forEach((botao) => {
  botao.addEventListener("click", () => {
    const nome = botao.dataset.nome;
    const preco = parseFloat(botao.dataset.preco);
    const imagem = botao.dataset.imagem;

    const carrinho =
      JSON.parse(localStorage.getItem("carrinho")) || [];

    const produtoExistente = carrinho.find(
      (produto) => produto.nome === nome
    );

    if (produtoExistente) {
      produtoExistente.quantidade++;

      if (!produtoExistente.imagem) {
        produtoExistente.imagem = imagem;
      }

    } else {
      carrinho.push({
        nome: nome,
        preco: preco,
        imagem: imagem,
        quantidade: 1
      });
    }

    localStorage.setItem(
      "carrinho",
      JSON.stringify(carrinho)
    );

    atualizarContadorCarrinho();

    const notificacao =
      document.getElementById("notificacaoCarrinho");

    if (notificacao) {
      notificacao.classList.add("ativo");

      setTimeout(() => {
        notificacao.classList.remove("ativo");
      }, 2000);
    }
  });
});
function atualizarContadorCarrinho() {
  const carrinho =
    JSON.parse(localStorage.getItem("carrinho")) || [];

  const contador =
    document.getElementById("contadorCarrinho");

  if (contador) {
    const quantidadeTotal = carrinho.reduce(
      (total, produto) => total + produto.quantidade,
      0
    );

    contador.textContent = quantidadeTotal;
  }
}

atualizarContadorCarrinho();

const listaCarrinho = document.getElementById("listaCarrinho");
const totalCarrinho = document.getElementById("totalCarrinho");

if (listaCarrinho && totalCarrinho) {

  let carrinho =
    JSON.parse(localStorage.getItem("carrinho")) || [];

  function mostrarCarrinho() {

    listaCarrinho.innerHTML = "";

    if (carrinho.length === 0) {

      listaCarrinho.innerHTML = `
        <p class="carrinho-vazio">
          O seu carrinho está vazio.
        </p>
      `;

      totalCarrinho.textContent = "0,00 €";

      atualizarContadorCarrinho();
      return;
    }

    let total = 0;

    carrinho.forEach((produto, index) => {

      total += produto.preco * produto.quantidade;

      listaCarrinho.innerHTML += `
  <div class="carrinho-item">

    <div class="carrinho-item-info">
      <h3>${produto.nome}</h3>

      <div class="carrinho-quantidade">
        <button
          type="button"
          class="diminuir"
          data-index="${index}">
          -
        </button>

        <span>${produto.quantidade}</span>

        <button
          type="button"
          class="aumentar"
          data-index="${index}">
          +
        </button>
      </div>

      <button
        type="button"
        class="remover-produto"
        data-index="${index}">
        Remover
      </button>
    </div>

    <strong>
      ${(produto.preco * produto.quantidade).toFixed(2).replace(".", ",")} €
    </strong>
  </div>
`;
});

  

    totalCarrinho.textContent =
      `${total.toFixed(2).replace(".", ",")} €`;

    ativarBotoesCarrinho();
    atualizarContadorCarrinho();
  }


  function ativarBotoesCarrinho() {

    const botoesAumentar =
      document.querySelectorAll(".aumentar");

    const botoesDiminuir =
      document.querySelectorAll(".diminuir");

    const botoesRemover =
      document.querySelectorAll(".remover-produto");


    botoesAumentar.forEach((botao) => {

      botao.addEventListener("click", () => {

        const index = Number(botao.dataset.index);

        carrinho[index].quantidade++;

        guardarCarrinho();
      });
    });


    botoesDiminuir.forEach((botao) => {

      botao.addEventListener("click", () => {

        const index = Number(botao.dataset.index);

        if (carrinho[index].quantidade > 1) {

          carrinho[index].quantidade--;

        } else {

          carrinho.splice(index, 1);
        }

        guardarCarrinho();
      });
    });


    botoesRemover.forEach((botao) => {

      botao.addEventListener("click", () => {

        const index = Number(botao.dataset.index);

        carrinho.splice(index, 1);

        guardarCarrinho();
      });
    });
  }


  function guardarCarrinho() {

    localStorage.setItem(
      "carrinho",
      JSON.stringify(carrinho)
    );

    mostrarCarrinho();
  }


  mostrarCarrinho();
}
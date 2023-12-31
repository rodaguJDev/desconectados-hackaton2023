const topHeaderElement = document.querySelector("#aviso");
const topHeaderElementText = "As inscrições do vestibulinho estão abertas!";
const titleHeaderElement = document.querySelector("#boas-vindas")
const titleHeaderElementText = "Bem-vindo ao Descotec";
const subTitleHeaderElement = document.querySelector("#boas-vindas-2");
const subTitleHeaderElementText = "Faça sua inscrição no conforto de sua casa!";

// Scroll Handler
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
// Mostra o botão quando o usuário rolar 100 pixels para baixo da parte superior da página
window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});
// Rola suavemente para o topo quando o botão é clicado
scrollToTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

async function fancyTyping(element, text, delay=25) {
  return new Promise((resolve) => {
    let index = 0;
    function type() {
      element.innerText = text.slice(0, index);
      index++;

      if (index <= text.length) {
        setTimeout(type, delay);
      }
      else {
        resolve();
      }
    }
    type();
  });
}

(async function() {
  fancyTyping(topHeaderElement, topHeaderElementText);
  await fancyTyping(titleHeaderElement, titleHeaderElementText);
  fancyTyping(subTitleHeaderElement, subTitleHeaderElementText);
})();

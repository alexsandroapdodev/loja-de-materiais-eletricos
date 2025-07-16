function scrollToSection() {
  document.getElementById("saiba-mais").scrollIntoView({ behavior: "smooth" });
}

const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

// Abrir/fechar menu ao clicar no botão
toggle.addEventListener("click", (event) => {
  event.stopPropagation(); // evita que o clique suba para o document
  menu.classList.toggle("show");
});

// Fechar menu ao clicar fora dele
document.addEventListener("click", (event) => {
  // se o menu está aberto E o clique não foi dentro do menu
  if (
    menu.classList.contains("show") &&
    !menu.contains(event.target) &&
    event.target !== toggle
  ) {
    menu.classList.remove("show");
  }
});

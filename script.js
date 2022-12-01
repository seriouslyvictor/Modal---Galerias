const portraits = document.querySelectorAll(".portrait");
// const imgPortrait = document.querySelector("#port1").src;
const imgFull = document.querySelector(".full");
console.log(portraits);
console.log(imgFull);

for (let i = 0; i < portraits.length; i++) {
  portraits[i].addEventListener("click", trocarImagem);
  function trocarImagem() {
    let imagemSelecionada = portraits[i].innerHTML;
    console.log(imagemSelecionada);
    imgFull.classList.add("fade-in-fwd");
    imgFull.innerHTML = imagemSelecionada;
  }
}
for (let i = 0; i < portraits.length; i++) {
  portraits[i].addEventListener("mouseout", function () {
    imgFull.classList.remove("fade-in-fwd");
  });
}

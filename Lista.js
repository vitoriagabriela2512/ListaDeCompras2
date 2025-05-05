const form = document.getElementById("form-lista");
const lista = document.getElementById("lista-itens");
const btnLimpar = document.getElementById("limpar-lista");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const produto = document.getElementById('produto').value.trim();
  const quantidade = document.getElementById('quantidade').value.trim();

  if (produto === '' || quantidade === '' || quantidade <= 0) {
    alert('Preencha o nome do produto e uma quantidade válida!');
    return;
  }

  const item = document.createElement('li');
  item.textContent = `${produto} (${quantidade})`;

  item.addEventListener('click', function () {
    item.classList.toggle('riscado');
  });

  lista.appendChild(item);

  form.reset();
});

btnLimpar.addEventListener('click', function () {
  lista.innerHTML = '';
  console.log("teste");
});

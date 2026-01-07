let dados = {};

function abrirAba(id) {
  transicao(() => {
    document.querySelectorAll("section").forEach(s =>
      s.classList.remove("ativa")
    );
    document.getElementById(id).classList.add("ativa");
  });
}

function calcularPerfil() {
  const salario = Number(document.getElementById("salario").value);
  const gastos = Number(document.getElementById("gastos").value);
  const meta = Number(document.getElementById("meta").value);
  const meses = Number(document.getElementById("meses").value);

  dados = { salario, gastos, meta, meses };

  const sobra = salario - gastos;
  const porMes = meta / meses;

  document.getElementById("resultadoPerfil").innerText =
    `Você precisará guardar $${porMes.toFixed(2)} por mês.`;

  if (porMes > sobra) {
    abrirAba("premium");
  }
}

function irParaPlano() {
  const { meta, meses } = dados;
  const valor = (meta / meses).toFixed(2);

  document.getElementById("textoPlano").innerText =
    "A chave para juntar dinheiro é constância, pequenas decisões corretas e um plano que respeita sua realidade.";

  document.getElementById("valorMensal").innerText =
    `$${valor} por mês durante ${meses} meses`;

  abrirAba("economia");
}

function transicao(callback) {
  const t = document.getElementById("transition");
  t.style.display = "flex";
  setTimeout(() => {
    t.style.display = "none";
    callback();
  }, 800);
}

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
  const salario = Number(salario.value);
  const gastos = Number(gastos.value);
  const meta = Number(meta.value);
  const meses = Number(meses.value);

  dados = { salario, gastos, meta, meses };

  const sobra = salario - gastos;
  const porMes = meta / meses;

  resultadoPerfil.innerText =
    `Você precisa guardar $${porMes.toFixed(2)} por mês.`;

  if (porMes > sobra) {
    abrirAba("premium");
  }
}

function irPlano() {
  const valor = (dados.meta / dados.meses).toFixed(2);

  textoPlano.innerText =
    "Pequenos hábitos, constância e planejamento tornam qualquer meta possível.";

  valorMensal.innerText =
    `$${valor} por mês durante ${dados.meses} meses`;

  abrirAba("economia");
}

function transicao(cb) {
  transition.style.display = "flex";
  setTimeout(() => {
    transition.style.display = "none";
    cb();
  }, 1000);
}

function tema(tipo) {
  if (tipo === "verde") {
    document.documentElement.style.setProperty("--principal", "green");
  } else if (tipo === "claro") {
    document.documentElement.style.setProperty("--principal", "green");
    document.documentElement.style.setProperty("--fundo", "white");
    document.documentElement.style.setProperty("--texto", "black");
  } else {
    document.documentElement.style.setProperty("--principal", "purple");
    document.documentElement.style.setProperty("--fundo", "black");
    document.documentElement.style.setProperty("--texto", "white");
  }
}

function salvarPerfil() {
  const nome = nomeUsuario.value;
  bemvindo.innerText = `Bem-vindo, Sr(a). ${nome}`;
}

function addGasto() {
  alert("Gasto adicionado (simulado)");
}

function addRenda() {
  alert("Renda adicionada (simulada)");
}


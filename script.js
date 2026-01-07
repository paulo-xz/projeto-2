function abrirAba(id) {
  const secoes = document.querySelectorAll("section");
  secoes.forEach(secao => secao.classList.remove("ativa"));

  document.getElementById(id).classList.add("ativa");
}

// Economia mensal
function calcularMensal() {
  const renda = Number(document.getElementById("renda").value);
  const gastos = Number(document.getElementById("gastos").value);
  const resultado = document.getElementById("resultadoMensal");

  if (renda <= 0 || gastos < 0) {
    resultado.innerText = "⚠️ Preencha valores válidos";
    return;
  }

  const economia = renda - gastos;

  if (economia > 0) {
    resultado.innerText = `Você economiza R$ ${economia.toFixed(2)} por mês ✅`;
  } else if (economia === 0) {
    resultado.innerText = "Você não está economizando nem gastando a mais ⚠️";
  } else {
    resultado.innerText = "Você está gastando mais do que ganha ❌";
  }
}

// Meta anual
function calcularMeta() {
  const meta = Number(document.getElementById("meta").value);
  const resultado = document.getElementById("resultadoAnual");

  if (meta <= 0) {
    resultado.innerText = "⚠️ Insira uma meta válida";
    return;
  }

  const mensal = (meta / 12).toFixed(2);
  resultado.innerText =
    `Para atingir R$ ${meta.toFixed(2)} no ano, economize R$ ${mensal} por mês 💡`;
}

function calcular() {
  const renda = Number(document.getElementById("renda").value);
  const gastos = Number(document.getElementById("gastos").value);
  const resultado = document.getElementById("resultado");

  if (renda <= 0 || gastos < 0) {
    resultado.innerText = "⚠️ Preencha valores válidos";
    return;
  }

  const economia = renda - gastos;

  if (economia > 0) {
    resultado.innerText =
      `Você economiza R$ ${economia.toFixed(2)} por mês ✅`;
  } else if (economia === 0) {
    resultado.innerText =
      "Você não está economizando nem gastando a mais ⚠️";
  } else {
    resultado.innerText =
      "Você está gastando mais do que ganha ❌";
  }
}

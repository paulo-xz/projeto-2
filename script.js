function calcular() {
  const renda = Number(document.getElementById("renda").value);
  const gastos = Number(document.getElementById("gastos").value);
  const resultado = document.getElementById("resultado");

  if (!renda || !gastos) {
    resultado.innerText = "⚠️ Preencha todos os campos";
    return;
  }

  const economia = renda - gastos;

  if (economia > 0) {
    resultado.innerText = `Você economiza R$ ${economia} por mês ✅`;
  } else if (economia === 0) {
    resultado.innerText = "Você não está economizando nem gastando a mais ⚠️";
  } else {
    resultado.innerText = "Você está gastando mais do que ganha ❌";
  }
}

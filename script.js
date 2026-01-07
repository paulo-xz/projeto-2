function abrirAba(id) {
  document.querySelectorAll("section").forEach(s =>
    s.classList.remove("ativa")
  );
  document.getElementById(id).classList.add("ativa");
}

function calcularMeta() {
  const salario = Number(document.getElementById("salario").value);
  const gastos = Number(document.getElementById("gastos").value);
  const meta = Number(document.getElementById("meta").value);
  const tempo = Number(document.getElementById("tempo").value);
  const resultado = document.getElementById("resultadoMeta");

  if (!salario || !meta || !tempo) {
    resultado.innerText = "Preencha todos os campos corretamente.";
    return;
  }

  const sobra = salario - gastos;
  const necessario = meta / tempo;

  if (necessario > sobra) {
    resultado.innerText =
      "⚠️ A meta é alta para sua realidade atual. Ajuste o prazo ou gastos.";
  } else {
    resultado.innerText =
      `Você deve guardar aproximadamente ${necessario.toFixed(2)} por mês.`;
  }

  desenharGrafico(salario, gastos, meta);
}

function desenharGrafico(salario, gastos, meta) {
  const canvas = document.getElementById("graficoCanvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "green";
  ctx.fillRect(50, 200 - salario / 50, 40, salario / 50);

  ctx.fillStyle = "red";
  ctx.fillRect(120, 200 - gastos / 50, 40, gastos / 50);

  ctx.fillStyle = "white";
  ctx.fillText("Receita", 50, 190);
  ctx.fillText("Gastos", 120, 190);
}

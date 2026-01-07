function trocarAba(id) {
  const overlay = document.getElementById("overlay");
  overlay.style.display = "flex";

  setTimeout(() => {
    document.querySelectorAll("section").forEach(s =>
      s.classList.remove("ativa")
    );
    document.getElementById(id).classList.add("ativa");
    overlay.style.display = "none";
  }, 600);
}

// MÁSCARA DE DINHEIRO
["salario", "gastos", "meta"].forEach(id => {
  const el = document.getElementById(id);
  el.addEventListener("input", () => {
    let v = el.value.replace(/\D/g, "");
    v = (Number(v) / 100).toFixed(2);
    el.value = "$ " + v;
  });
});

function calcularPlano() {
  const salario = parseFloat(salarioLimpo("salario"));
  const gastos = parseFloat(salarioLimpo("gastos"));
  const meta = parseFloat(salarioLimpo("meta"));
  const tempo = Number(document.getElementById("tempo").value);

  const sobra = salario - gastos;
  const mensal = meta / tempo;

  const r = document.getElementById("resultado");

  if (mensal > sobra) {
    alert("Conheça o MyMoney$PRO para acelerar sua meta com investimentos inteligentes.");
  } else {
    r.innerText = `Guarde aproximadamente $ ${mensal.toFixed(2)} por mês.`;
  }

  desenharGrafico(salario, gastos);
}

function salarioLimpo(id){
  return document.getElementById(id).value.replace(/[^0-9.]/g,"");
}

function desenharGrafico(salario, gastos){
  const c = document.getElementById("grafico");
  const ctx = c.getContext("2d");
  ctx.clearRect(0,0,c.width,c.height);

  ctx.strokeStyle = "#6a00ff";
  ctx.lineWidth = 3;
  ctx.beginPath();

  for(let i=0;i<12;i++){
    const y = 200 - (salario - gastos)/20 + i;
    ctx.lineTo(20 + i*25, y);
  }
  ctx.stroke();
}

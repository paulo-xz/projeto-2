<script>
/* =====================
   INTRO RÁPIDA (2s)
===================== */
const intro = document.getElementById("intro");
const transicaoBox = document.getElementById("transicao");

window.onload = () => {
  setTimeout(() => {
    intro.style.opacity = "0";
    intro.style.pointerEvents = "none";
    setTimeout(()=> intro.style.display="none",400);
  }, 1800);
};

/* =====================
   TRANSIÇÃO COM $
===================== */
function transicao(){
  transicaoBox.style.display = "flex";
  transicaoBox.innerHTML = `<span class="pulo">$</span>`;
  setTimeout(()=> transicaoBox.style.display="none",1400);
}

/* =====================
   NAVEGAÇÃO
===================== */
function trocarAba(id){
  transicao();
  setTimeout(()=>{
    document.querySelectorAll("section")
      .forEach(sec => sec.classList.remove("ativa"));
    document.getElementById(id).classList.add("ativa");
  },700);
}

/* =====================
   PERFIL / CÁLCULO
===================== */
let dados = {};

function calcularPerfil(){
  const salario = Number(document.getElementById("salario").value);
  const gastos  = Number(document.getElementById("gastos").value);
  const meta    = Number(document.getElementById("meta").value);
  const meses   = Number(document.getElementById("meses").value);

  if(!salario || !meta || !meses){
    resultado.innerText = "Preencha os campos corretamente.";
    return;
  }

  const sobra = salario - gastos;
  const porMes = meta / meses;

  dados = { salario, gastos, meta, meses, porMes };

  resultado.innerText =
    `Você precisa guardar $${porMes.toFixed(2)} por mês`;

  if(porMes > sobra){
    setTimeout(()=>trocarAba("premium"),900);
  }
}

function mostrarPlano(){
  textoPlano.innerText =
    "Constância vence talento. Seu plano começa agora.";
  valorMensal.innerText =
    `$${dados.porMes.toFixed(2)} / mês`;
  trocarAba("plano");
}

/* =====================
   HISTÓRICO FINANCEIRO
===================== */
const historico = document.createElement("div");
historico.id = "historico";
historico.style.marginTop = "10px";
document.getElementById("progresso").appendChild(historico);

function registrar(tipo){
  const valor = prompt(
    tipo === "renda" ? "Valor recebido:" : "Valor gasto:"
  );
  if(!valor || isNaN(valor)) return;

  const agora = new Date();
  const div = document.createElement("div");

  div.style.border = `2px solid ${tipo==="renda"?"#00ff88":"#ff4444"}`;
  div.style.borderRadius = "10px";
  div.style.padding = "8px";
  div.style.marginTop = "6px";
  div.style.fontSize = "13px";

  div.innerHTML = `
    ${tipo==="renda"?"Recebido":"Gasto"}: $${Number(valor).toFixed(2)}<br>
    ${agora.toLocaleDateString()} • ${agora.toLocaleTimeString()}
  `;

  historico.prepend(div);
}

function addRenda(){ registrar("renda"); }
function addGasto(){ registrar("gasto"); }

/* =====================
   CONFIGURAÇÕES VISUAL
===================== */
function trocarTema(tipo){
  if(tipo==="roxo"){
    document.documentElement.style.setProperty("--roxo","#8b00ff");
    document.body.style.background="#000";
  }
  if(tipo==="verde"){
    document.documentElement.style.setProperty("--roxo","#00ff88");
    document.body.style.background="#000";
  }
  if(tipo==="claro"){
    document.documentElement.style.setProperty("--roxo","#00aa66");
    document.body.style.background="#fff";
    document.body.style.color="#000";
  }
}

/* =====================
   PERFIL MODAL
===================== */
function abrirPerfil(){
  document.getElementById("perfilModal").style.display="flex";
}
function fecharPerfil(){
  document.getElementById("perfilModal").style.display="none";
}
</script>

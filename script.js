// INTRO
setTimeout(()=>document.getElementById("intro").style.display="none",1800);

// ABAS
function trocarAba(id){
  document.querySelectorAll("section").forEach(s=>s.classList.remove("ativa"));
  document.getElementById(id).classList.add("ativa");
}

// MERCADO REAL
async function mercado(){
  const r = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin&vs_currencies=usd");
  const d = await r.json();

  btc.innerText = "$ " + d.bitcoin.usd.toLocaleString();
  eth.innerText = "$ " + d.ethereum.usd.toLocaleString();
  bnb.innerText = "$ " + d.binancecoin.usd.toLocaleString();
  ibov.innerText = "Dados externos";
}
mercado();
setInterval(mercado,60000);

// PERFIL
function calcularPerfil(){
  const sobra = renda.value - gastos.value;
  const porMes = meta.value / meses.value;
  resultadoPerfil.innerText = `Guardar $${porMes.toFixed(2)} / mês`;
  if(porMes > sobra) trocarAba("premium");
}

// PROGRESSO
let dados=[];
function adicionarEntrada(tipo){
  const v = Number(prompt("Valor"));
  if(!v) return;
  dados.push(v * (tipo==="gasto"?-1:1));
  atualizarGrafico();
}

function atualizarGrafico(){
  const c = document.getElementById("grafico");
  const ctx = c.getContext("2d");
  ctx.clearRect(0,0,c.width,c.height);

  let x=20;
  dados.forEach(v=>{
    ctx.fillStyle = v>0?"green":"red";
    ctx.fillRect(x,120,20,-v);
    x+=30;
  });
}

// CONFIG
function abrirConfig(){configModal.style.display="block"}
function fecharConfig(){configModal.style.display="none"}

function setTema(t){
  if(t==="verde"){document.documentElement.style.setProperty("--primary","#00ff88")}
  if(t==="claro"){
    document.documentElement.style.setProperty("--bg","#fff");
    document.documentElement.style.setProperty("--text","#000");
    document.documentElement.style.setProperty("--primary","#00aa66");
  }
}

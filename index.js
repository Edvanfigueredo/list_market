<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>🛒 SUPER MARKET QUEST</title>
<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Orbitron:wght@400;700;900&display=sw… rel="stylesheet">
<style>
  :root {
    --bg: #020b1a;
    --bg2: #041126;
    --panel: #071e3d;
    --panel2: #0a2a52;
    --border: #1a4a8a;
    --accent: #00d4ff;
    --accent2: #ff6b00;
    --accent3: #00ff88;
    --gold: #ffd700;
    --text: #c8e6ff;
    --text2: #6a9fd8;
    --done-bg: #001f0d;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }
  body {
    background: var(--bg);
    font-family: 'Orbitron', sans-serif;
    color: var(--text);
      min-height: 100vh;
    overflow-x: hidden;
  }
  body::before {
    content: '';
    position: fixed; inset: 0;
    background: repeating-linear-gradient(
      0deg, transparent, transparent 3px,
      rgba(0,0,0,0.04) 3px, rgba(0,0,0,0.04) 4px
    );
    pointer-events: none;
    z-index: 9999;
  }
  .container {
    max-width: 480px;
    margin: 0 auto;
    padding: 0 10px 110px;
    position: relative;
    z-index: 1;
  }



  /* HEADER */
  .header {
    text-align: center;
    padding: 18px 0 8px;
    position: sticky; top: 0; z-index: 100;
    background: linear-gradient(180deg, var(--bg) 85%, transparent);
  }
  .logo {
    font-family: 'Press Start 2P', monospace;
    font-size: 12px;
    color: var(--accent);
    text-shadow: 0 0 8px var(--accent), 0 0 20px rgba(0,212,255,0.5);
    line-height: 1.7;
    animation: glow 2.5s ease-in-out infinite;
  }
  .logo span { color: var(--gold); text-shadow: 0 0 8px var(--gold); }
  @keyframes glow { 0%,100%{opacity:1} 50%{opacity:0.82} }



  .subtitle {
    font-size: 6px; color: var(--text2);
    margin-top: 5px;
    font-family: 'Press Start 2P', monospace;
    letter-spacing: 2px;
  }



  /* SCORE BAR */
  .score-bar {
    display: flex; justify-content: space-between; align-items: center;
    background: var(--panel);
    border: 2px solid var(--border);
    border-radius: 4px;
    padding: 8px 14px; margin: 8px 0;
    box-shadow: 0 0 15px rgba(0,212,255,0.1), inset 0 0 20px rgba(0,0,0,0.5);
  }
  .score-item { text-align: center; }
  .score-label {
    font-size: 6px; color: var(--text2);
    font-family: 'Press Start 2P', monospace;
    display: block; margin-bottom: 3px;
  }
  .score-value { font-size: 12px; font-weight: 900; color: var(--accent); }
  .score-value.gold { color: var(--gold); }
  .score-value.green { color: var(--accent3); }



  /* TABS */
  .tabs { display: flex; gap: 6px; margin: 6px 0 10px; }
  .tab-btn {
    flex: 1; padding: 10px 4px;
    background: var(--panel);
    border: 2px solid var(--border);
    border-radius: 4px;
    color: var(--text2);
    font-family: 'Press Start 2P', monospace;
    font-size: 7px;
    cursor: pointer; transition: all 0.2s; text-align: center;
  }
  .tab-btn.active {
    background: var(--accent); color: var(--bg);
    border-color: var(--accent);
    box-shadow: 0 0 14px rgba(0,212,255,0.45);
  }



  /* SECTION TITLE */
  .section-title {
    font-family: 'Press Start 2P', monospace;
    font-size: 7px;
    color: var(--accent2);
    text-shadow: 0 0 6px var(--accent2);
    padding: 14px 0 8px;
    display: flex; align-items: center; gap: 8px;
  }
  .section-title::after {
    content: ''; flex: 1; height: 1px;
    background: linear-gradient(90deg, var(--accent2), transparent);
  }



  /* ITEM CARD */
  .item-card {
    background: var(--panel);
    border: 2px solid var(--border);
    border-radius: 6px;
    margin-bottom: 8px;
    overflow: hidden;
    transition: border-color 0.3s, background 0.3s, box-shadow 0.3s;
    box-shadow: 0 2px 8px rgba(0,0,0,0.4);
    position: relative;
  }
  .item-card.done {
    background: var(--done-bg);
    border-color: var(--accent3);
    box-shadow: 0 0 12px rgba(0,255,136,0.2);
  }
  .done-badge {
    display: none;
    position: absolute; top: 6px; right: 8px;
    font-family: 'Press Start 2P', monospace;
    font-size: 6px; color: var(--accent3);
    text-shadow: 0 0 6px var(--accent3);
    z-index: 2;
  }
  .item-card.done .done-badge { display: block; }



  .item-inner {
    display: flex; align-items: center;
    gap: 10px; padding: 10px;
  }



  /* IMAGEM */
  .item-img-wrap {
    width: 56px; height: 56px;
    flex-shrink: 0;
      border-radius: 6px;
    border: 2px solid var(--border);
    overflow: hidden;
    display: flex; align-items: center; justify-content: center;
    position: relative;
    transition: border-color 0.3s, filter 0.3s;
  }
  .item-card.done .item-img-wrap {
    border-color: var(--accent3);
    filter: brightness(0.5) saturate(0.3);
  }
  .item-img-wrap canvas {
    display: block;
    width: 56px; height: 56px;
  }



  .item-info { flex: 1; min-width: 0; }
  .item-name {
    font-size: 9px; font-weight: 700; color: var(--text);
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    margin-bottom: 3px;
  }
  .item-card.done .item-name {
    color: var(--accent3); text-decoration: line-through; opacity: 0.7;
  }
  .item-sub { font-size: 6px; color: var(--text2); font-family: 'Press Start 2P', monospace; }



  .item-controls {
    display: flex; flex-direction: column;
    gap: 5px; align-items: flex-end;
  }



  /* QTY */
  .qty-row { display: flex; align-items: center; gap: 4px; }
  .qty-btn {
    width: 28px; height: 28px;
    background: var(--panel2);
    border: 2px solid var(--border);
    border-radius: 3px;
    color: var(--accent);
    font-size: 16px; font-weight: 900;
    cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    transition: all 0.12s; user-select: none;
  }
  .qty-btn:active { transform: scale(0.88); background: var(--accent); color: var(--bg); }
  .qty-display {
    width: 26px; text-align: center;
    font-size: 13px; font-weight: 900;
    color: var(--gold);
    font-family: 'Press Start 2P', monospace;
  }



  /* PREÇO */
  .price-row { display: flex; align-items: center; gap: 4px; }
  .price-label { font-size: 7px; color: var(--text2); font-family: 'Press Start 2P', monospace; }
  .price-input {
    width: 74px;
    background: var(--bg2);
    border: 2px solid var(--border);
    border-radius: 3px;
    color: var(--accent3);
    font-family: 'Orbitron', sans-serif;
    font-size: 11px; font-weight: 700;
    padding: 3px 5px; text-align: right;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
    -webkit-appearance: none;
  }
  .price-input:focus {
    border-color: var(--accent3);
    box-shadow: 0 0 8px rgba(0,255,136,0.3);
  }
  .price-input::placeholder { color: #1a3a5a; }



  /* SUBTOTAL */
  .item-total {
    font-size: 8px; font-weight: 900;
    color: var(--gold); text-align: right;
    padding: 4px 10px 6px;
    border-top: 1px solid rgba(255,215,0,0.15);
    font-family: 'Press Start 2P', monospace;
  }
  .item-card.done .item-total {
    color: var(--accent3);
    border-top-color: rgba(0,255,136,0.15);
  }



  /* TOTAL PANEL */
  .total-panel {
    background: var(--panel);
    border: 2px solid var(--gold);
    border-radius: 8px;
    padding: 16px;
    margin: 16px 0 8px;
    box-shadow: 0 0 20px rgba(255,215,0,0.15), inset 0 0 30px rgba(0,0,0,0.5);
    position: relative; overflow: hidden;
  }
  .total-panel::before {
    content: ''; position: absolute; inset: 0;
    background: repeating-linear-gradient(
      45deg, transparent, transparent 12px,
      rgba(255,215,0,0.015) 12px, rgba(255,215,0,0.015) 24px
    );
  }
  .total-title {
    font-family: 'Press Start 2P', monospace;
    font-size: 8px; color: var(--gold);
    text-shadow: 0 0 10px var(--gold);
    margin-bottom: 12px; text-align: center;
  }
  .total-row {
    display: flex; justify-content: space-between;
      align-items: center; padding: 5px 0;
    border-bottom: 1px dashed rgba(255,215,0,0.12);
    position: relative; z-index: 1;
  }
  .total-row:last-child { border-bottom: none; padding-top: 10px; margin-top: 4px; }
    .tlabel { color: var(--text2); font-family: 'Press Start 2P', monospace; font-size: 6px; }
  .tval { color: var(--accent3); font-weight: 700; font-size: 11px; }
  .tval.big { font-size: 18px; color: var(--gold); text-shadow: 0 0 14px var(--gold); font-weight: 900; }



  /* SAVE BTN */
  .save-btn {
    width: 100%; padding: 14px;
    background: linear-gradient(135deg, #ff6b00, #ff9500);
    border: none; border-radius: 6px;
    color: #fff;
    font-family: 'Press Start 2P', monospace;
      font-size: 10px; font-weight: 700;
    cursor: pointer; letter-spacing: 1px;
    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
    box-shadow: 0 4px 0 #aa4400, 0 0 18px rgba(255,107,0,0.35);
    transition: all 0.12s;
    margin: 10px 0;
      -webkit-appearance: none;
  }
  .save-btn:active { transform: translateY(3px); box-shadow: 0 1px 0 #aa4400; }
  .save-btn.saved {
    background: linear-gradient(135deg, #00994d, #00cc66);
    box-shadow: 0 4px 0 #005c2e, 0 0 18px rgba(0,255,136,0.35);
  }



  /* PROGRESS */
  .progress-wrap {
    background: var(--panel); border: 2px solid var(--border);
    border-radius: 4px; padding: 8px 12px; margin-bottom: 10px;
  }
  .progress-label {
    display: flex; justify-content: space-between;
    font-family: 'Press Start 2P', monospace;
    font-size: 6px; color: var(--text2); margin-bottom: 6px;
  }
  .progress-bar {
    height: 10px; background: var(--bg2);
    border-radius: 4px; overflow: hidden;
    border: 1px solid var(--border);
  }
  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--accent), var(--accent3));
    border-radius: 4px;
    transition: width 0.4s ease;
    box-shadow: 0 0 8px rgba(0,212,255,0.5);
    width: 0%;
  }



  /* TOAST */
  .toast {
    position: fixed; bottom: 80px; left: 50%;
    transform: translateX(-50%) translateY(20px);
    background: var(--accent3); color: var(--bg);
    font-family: 'Press Start 2P', monospace;
    font-size: 8px; padding: 10px 20px;
    border-radius: 4px; opacity: 0;
    transition: all 0.3s; z-index: 9998;
    white-space: nowrap;
    box-shadow: 0 0 20px rgba(0,255,136,0.5);
  }
  .toast.show { opacity: 1; transform: translateX(-50%) translateY(0); }



  /* TIP */
  .tip-box {
    background: rgba(0,212,255,0.05);
    border: 1px dashed rgba(0,212,255,0.2);
    border-radius: 4px; padding: 8px 12px; margin: 8px 0;
    font-family: 'Press Start 2P', monospace;
    font-size: 6px; color: var(--text2); line-height: 2;
  }



  .view { display: none; }
  .view.active { display: block; }
</style>
</head>
<body>
<div class="container">



  <div class="header">
    <div class="logo">🛒 SUPER<br><span>MARKET</span> QUEST</div>
    <div class="subtitle">▶ LISTA DE COMPRAS v2.0 ◀</div>
    <div class="score-bar">
      <div class="score-item">
        <span class="score-label">ITENS</span>
        <span class="score-value" id="totalItems">46</span>
      </div>
      <div class="score-item">
        <span class="score-label">COLETADOS</span>
        <span class="score-value green" id="doneItems">0</span>
      </div>
      <div class="score-item">
        <span class="score-label">TOTAL R$</span>
        <span class="score-value gold" id="grandTotal">0.00</span>
      </div>
    </div>
    <div class="tabs">
      <button class="tab-btn active" id="tab-planejar" onclick="switchTab('planejar')">📋 PLANEJAR</button>
      <button class="tab-btn" id="tab-mercado" onclick="switchTab('mercado')">🏪 MERCADO</button>
    </div>
  </div>



  <div class="view active" id="view-planejar">
    <div class="tip-box">💡 FASE 1: Ajuste as quantidades e salve antes de ir ao mercado!</div>
    <div id="list-planejar"></div>
    <button class="save-btn" id="saveBtn" onclick="saveList()">💾 SALVAR LISTA</button>
  </div>



  <div class="view" id="view-mercado">
    <div class="tip-box">🏪 FASE 2: Digite o preço — item fica VERDE quando coletado!</div>
    <div class="progress-wrap">
      <div class="progress-label">
        <span>PROGRESSO DA MISSÃO</span>
        <span id="progressText">0%</span>
      </div>
      <div class="progress-bar"><div class="progress-fill" id="progressFill"></div></div>
    </div>
    <div id="list-mercado"></div>
    <div class="total-panel">
      <div class="total-title">💰 RESUMO DA MISSÃO</div>
      <div class="total-row">
        <span class="tlabel">TOTAL DE ITENS</span>
        <span class="tval" id="t-itens">46</span>
      </div>
      <div class="total-row">
        <span class="tlabel">ITENS COLETADOS</span>
        <span class="tval" id="t-coletados">0</span>
      </div>
      <div class="total-row">
        <span class="tlabel">VALOR FINAL</span>
        <span class="tval big" id="t-total">R$ 0,00</span>
      </div>
    </div>
  </div>



</div>
<div class="toast" id="toast"></div>



<script>
// ============================================================
// PRODUTOS
// ============================================================
const produtos = [
  { id:1,  nome:"Arroz",           sub:"5kg",         emoji:"🌾", bg:"#3a2e10" },
  { id:2,  nome:"Feijão",          sub:"1kg",         emoji:"🫘", bg:"#3a1e0a" },
  { id:3,  nome:"Macarrão",        sub:"500g",        emoji:"🍝", bg:"#3a2e10" },
  { id:4,  nome:"Açúcar",          sub:"1kg",         emoji:"🍬", bg:"#2a2030" },
  { id:5,  nome:"Café",            sub:"500g",        emoji:"☕", bg:"#1a0f06" },
  { id:6,  nome:"Biscoito",        sub:"pacote",      emoji:"🍪", bg:"#3a2008" },
  { id:7,  nome:"Amendoim",        sub:"500g",        emoji:"🥜", bg:"#3a2810" },
  { id:8,  nome:"Ovos",            sub:"cx 60un",     emoji:"🥚", bg:"#2a2418" },
  { id:9,  nome:"Leite",           sub:"cx 14L",      emoji:"🥛", bg:"#1e2a38" },
  { id:10, nome:"Atum",            sub:"lata",        emoji:"🐟", bg:"#0a1e3a" },
  { id:11, nome:"Maionese",        sub:"pote",        emoji:"🫙", bg:"#2a2a18" },
  { id:12, nome:"Batata",          sub:"1kg",         emoji:"🥔", bg:"#2a2010" },
  { id:13, nome:"Tomate",          sub:"1kg",         emoji:"🍅", bg:"#3a0a0a" },
  { id:14, nome:"Brócolis",        sub:"bandeja",     emoji:"🥦", bg:"#0a2a10" },
  { id:15, nome:"Molho de Tomate", sub:"sachê",       emoji:"🍶", bg:"#3a0808" },
  { id:16, nome:"Tempero Baiano",  sub:"sachê",       emoji:"🌶️", bg:"#2a1008" },
  { id:17, nome:"Páprica",         sub:"sachê",       emoji:"🫙", bg:"#2a1008" },
  { id:18, nome:"Salsa",           sub:"maço",        emoji:"🌿", bg:"#0a2a0a" },
  { id:19, nome:"Coentro",         sub:"maço",        emoji:"🌿", bg:"#082008" },
  { id:20, nome:"Alho",            sub:"cabeça",      emoji:"🧄", bg:"#2a2820" },
  { id:21, nome:"Cebola",          sub:"400g",        emoji:"🧅", bg:"#2a1808" },
  { id:22, nome:"Frango Filé",     sub:"1kg",         emoji:"🍗", bg:"#2a1a08" },
  { id:23, nome:"Patinho",         sub:"1kg",         emoji:"🥩", bg:"#2a0808" },
  { id:24, nome:"Cenoura",         sub:"100g",        emoji:"🥕", bg:"#2a1608" },
  { id:25, nome:"Sabão Líquido",   sub:"3L",          emoji:"🧴", bg:"#0a1e2a" },
  { id:26, nome:"Amaciante Downy", sub:"1L",          emoji:"🧴", bg:"#1a0a2a" },
  { id:27, nome:"Sabão Senador",   sub:"barra",       emoji:"🧼", bg:"#0a2a1e" },
  { id:28, nome:"Shampoo CR7",     sub:"frasco",      emoji:"💆", bg:"#080e2a" },
  { id:29, nome:"Aromatizante",    sub:"ambiente",    emoji:"🌸", bg:"#2a0a18" },
  { id:30, nome:"Desinfetante",    sub:"frasco",      emoji:"🧫", bg:"#0a2a18" },
  { id:31, nome:"Pão de Forma",    sub:"pacote",      emoji:"🍞", bg:"#2a1e08" },
  { id:32, nome:"Bolacha",         sub:"pacote",      emoji:"🍪", bg:"#2a1808" },
  { id:33, nome:"Óleo",            sub:"900mL",       emoji:"🫙", bg:"#2a2008" },
  { id:34, nome:"Sal",             sub:"1kg",         emoji:"🧂", bg:"#1e2030" },
  { id:35, nome:"Papel Higiênico", sub:"Neve pct",    emoji:"🧻", bg:"#2a2a20" },
  { id:36, nome:"Azeite",          sub:"500mL",       emoji:"🫒", bg:"#1a2a08" },
  { id:37, nome:"Pato Vaso",       sub:"sanitário",   emoji:"🚽", bg:"#0a1e2a" },
  { id:38, nome:"Água Sanitária",  sub:"1L",          emoji:"🧴", bg:"#081a2a" },
  { id:39, nome:"Desodorante",     sub:"unidade",     emoji:"💨", bg:"#0a1e28" },
  { id:40, nome:"Gel Cabelo",      sub:"pote",        emoji:"💈", bg:"#080e2a" },
  { id:41, nome:"Espuma de Barba", sub:"lata",        emoji:"🪒", bg:"#0a1a2a" },
  { id:42, nome:"Detergente",      sub:"500mL",       emoji:"🧴", bg:"#0a2a0a" },
  { id:43, nome:"Sorvete",         sub:"pote",        emoji:"🍨", bg:"#2a0a18" },
  { id:44, nome:"Vinho",           sub:"garrafa"      emoji:"🍷", bg:"#2a0010" },
  { id:45, nome:"Cerveja",         sub:"pack",        emoji:"🍺", bg:"#1e1800" },
  { id:46, nome:"Picanha",         sub:"peça",        emoji:"🥩", bg:"#2a0808" },
];



const categorias = [
  { nome:"⚔️ GRÃOS & CEREAIS",    ids:[1,2,3,4,5,33,34] },
  { nome:"🥗 HORTIFRUTI",          ids:[12,13,14,18,19,20,21,24] },
  { nome:"🍗 PROTEÍNAS",           ids:[8,10,22,23,46] },
  { nome:"🥛 LATICÍNIOS & MOLHOS", ids:[9,11,15,16,17,36] },
  { nome:"🍪 SNACKS & PADARIA",    ids:[6,7,31,32] },
  { nome:"🧼 LIMPEZA",             ids:[25,26,27,30,37,38,42] },
  { nome:"💄 HIGIENE PESSOAL",     ids:[28,29,35,39,40,41] },
  { nome:"🎉 LAZER & ESPECIAIS",   ids:[43,44,45] },
];



// ============================================================
// ESTADO
// ============================================================
const state = {};
produtos.forEach(p => {
  const s = dbLoad(p.id);
  state[p.id] = { qty: s?.qty || 1, price: s?.price || '', done: s?.done || false };
});



// ============================================================
// CANVAS EMOJI — gera imagem local sem depender de internet
// ============================================================
function makeEmojiImg(emoji, bgColor, size) {
  size = size || 112;
  const c = document.createElement('canvas');
  c.width = size; c.height = size;
  const ctx = c.getContext('2d');



  // Fundo sólido + gradiente
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, size, size);



  const g = ctx.createRadialGradient(size/2, size/2, size*0.1, size/2, size/2, size*0.6);
  g.addColorStop(0, 'rgba(255,255,255,0.08)');
  g.addColorStop(1, 'rgba(0,0,0,0.35)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);



  // Emoji centralizado
  ctx.font = Math.round(size * 0.52) + 'px serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(emoji, size / 2, size / 2 + size * 0.04);



  return c;
}



// Cache
const canvasCache = {};
function getCanvas(produto) {
  if (!canvasCache[produto.id]) {
    canvasCache[produto.id] = makeEmojiImg(produto.emoji, produto.bg, 112);
  }
  return canvasCache[produto.id];
}



// ============================================================
// BUILD CARD
// ============================================================
function buildCard(produto, showPrice) {
  const s = state[produto.id];
  const priceNum = parseFloat((s.price | '').replace(',', '.')) || 0;
  const total = priceNum * s.qty;



  const card = document.createElement('div');
  card.className = 'item-card' + (s.done ? ' done' : '');
  card.id = 'card-' + produto.id;



  // Imagem via canvas
  const imgWrap = document.createElement('div');
  imgWrap.className = 'item-img-wrap';
  imgWrap.style.background = produto.bg;
  const canvas = getCanvas(produto);
  const displayCanvas = document.createElement('canvas');
  displayCanvas.width = 56;
  displayCanvas.height = 56;
  displayCanvas.style.display = 'block';
  displayCanvas.style.width = '56px';
  displayCanvas.style.height = '56px';
  const dCtx = displayCanvas.getContext('2d');
  dCtx.drawImage(canvas, 0, 0, 56, 56);
  imgWrap.appendChild(displayCanvas);



  // Info
  const info = document.createElement('div');
  info.className = 'item-info';
  info.innerHTML = `
    <div class="item-name">${produto.nome}</div>
    <div class="item-sub">${produto.sub}</div>
  `;



  // Controls
  const controls = document.createElement('div');
  controls.className = 'item-controls';



  // QTY row
  const qtyRow = document.createElement('div');
  qtyRow.className = 'qty-row';
  qtyRow.innerHTML = `
    <button class="qty-btn" ontouchstart="">−</button>
    <div class="qty-display" id="qty-${produto.id}">${s.qty}</div>
    <button class="qty-btn" ontouchstart="">+</button>
  `;
  qtyRow.querySelectorAll('.qty-btn')[0].addEventListener('click', () => changeQty(produto.id, -1));
  qtyRow.querySelectorAll('.qty-btn')[1].addEventListener('click', () => changeQty(produto.id, +1));
  controls.appendChild(qtyRow);



  // Price row (só no mercado)
  if (showPrice) {
    const priceRow = document.createElement('div');
    priceRow.className = 'price-row';
    const label = document.createElement('span');
    label.className = 'price-label';
    label.textContent = 'R$';
    const inp = document.createElement('input');
    inp.className = 'price-input';
    inp.id = 'price-' + produto.id;
    inp.type = 'number';
    inp.min = '0';
    inp.step = '0.01';
    inp.placeholder = '0,00';
    inp.value = s.price;
    inp.setAttribute('inputmode', 'decimal');
    inp.addEventListener('input', () => handlePrice(produto.id));
    priceRow.appendChild(label);
    priceRow.appendChild(inp);
    controls.appendChild(priceRow);
  }



  // Inner
  const inner = document.createElement('div');
  inner.className = 'item-inner';
  inner.appendChild(imgWrap);
  inner.appendChild(info);
  inner.appendChild(controls);



  // Badge
  const badge = document.createElement('div');
  badge.className = 'done-badge';
  badge.textContent = '✓ COLETADO';



  card.appendChild(badge);
  card.appendChild(inner);



  // Subtotal
  const totalEl = document.createElement('div');
  totalEl.className = 'item-total';
  totalEl.id = 'total-' + produto.id;
  if (showPrice && total > 0) {
    totalEl.textContent = 'SUBTOTAL: R$ ' + fmt(total);
  } else {
    totalEl.style.display = 'none';
  }
  card.appendChild(totalEl);



  return card;
}



// ============================================================
// RENDER
// ============================================================
function renderList(containerId, showPrice) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  categorias.forEach(cat => {
    const prods = cat.ids.map(id => produtos.find(p => p.id === id)).filter(Boolean);
    if (!prods.length) return;
    const title = document.createElement('div');
    title.className = 'section-title';
    title.textContent = cat.nome;
    container.appendChild(title);
    prods.forEach(p => container.appendChild(buildCard(p, showPrice)));
  });
}



// ============================================================
// AÇÕES
// ============================================================
function changeQty(id, delta) {
  state[id].qty = Math.max(1, state[id].qty + delta);
  const el = document.getElementById('qty-' + id);
  if (el) el.textContent = state[id].qty;
  if (document.getElementById('price-' + id)) recalcCard(id);
  dbSave(id);
  updateScores();
}



function handlePrice(id) {
  const inp = document.getElementById('price-' + id);
  if (!inp) return;
  state[id].price = inp.value;
  const num = parseFloat(inp.value.replace(',', '.')) || 0;
  state[id].done = num > 0;
  recalcCard(id);
  dbSave(id);
  updateScores();
}



function recalcCard(id) {
  const card = document.getElementById('card-' + id);
  if (!card) return;
  const s = state[id];
  const num = parseFloat((s.price || '').replace(',', '.')) || 0;
  const total = num * s.qty;



  card.className = 'item-card' + (s.done ? ' done' : '');



  const totalEl = document.getElementById('total-' + id);
  if (totalEl) {
    if (total > 0) {
      totalEl.style.display = '';
      totalEl.textContent = 'SUBTOTAL: R$ ' + fmt(total);
    } else {
      totalEl.style.display = 'none';
    }
  }
}



function updateScores() {
  const total = produtos.length;
  const done = produtos.filter(p => state[p.id].done).length;
  let grand = 0;
  produtos.forEach(p => {
    const num = parseFloat((state[p.id].price || '').replace(',', '.')) || 0;
    grand += num * state[p.id].qty;
  });



  document.getElementById('totalItems').textContent = total;
  document.getElementById('doneItems').textContent = done;
  document.getElementById('grandTotal').textContent = fmt(grand);



  const pct = Math.round((done / total) * 100);
  const fill = document.getElementById('progressFill');
  const txt  = document.getElementById('progressText');
  if (fill) fill.style.width = pct + '%';
  if (txt)  txt.textContent = pct + '%';



  const ti = document.getElementById('t-itens');
  const tc = document.getElementById('t-coletados');
  const tt = document.getElementById('t-total');
  if (ti) ti.textContent = total;
  if (tc) tc.textContent = done;
  if (tt) tt.textContent = 'R$ ' + fmt(grand);
}



// ============================================================
// TABS
// ============================================================
function switchTab(tab) {
  ['planejar','mercado'].forEach(t => {
    document.getElementById('tab-' + t).classList.toggle('active', t === tab);
    document.getElementById('view-' + t).classList.toggle('active', t == tab);
  });
  if (tab === 'mercado') {
    renderList('list-mercado', true);
  }
  updateScores();
}



function saveList() {
  produtos.forEach(p => dbSave(p.id));
  const btn = document.getElementById('saveBtn');
  btn.textContent = '✅ LISTA SALVA!';
  btn.classList.add('saved');
  showToast('💾 LISTA SALVA COM SUCESSO!');
  setTimeout(() => {
    btn.textContent = '💾 SALVAR LISTA';
    btn.classList.remove('saved');
  }, 2500);
}



// ============================================================
// STORAGE
// ============================================================
function dbSave(id) {
  try { localStorage.setItem('smq2_' + id, JSON.stringify(state[id])); } catch(e) {}
}
function dbLoad(id) {
  try { const r = localStorage.getItem('smq2_' + id); return r ? JSON.parse(r) : null; } catch(e) { return null; }
}



function fmt(n) { return n.toFixed(2).replace('.', ','); }



function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}



// ============================================================
// INIT
// ============================================================
renderList('list-planejar', false);
updateScores();
</script>
</body>
</html>
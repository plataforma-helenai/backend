/* ============================================
   HelenAI — Acessibilidade JS
   Controle dos toggles da barra de acessibilidade
   ============================================ */

(function () {
  'use strict';

  // Estado da acessibilidade (persiste no localStorage)
  const STORAGE_KEY = 'helenai_acessibilidade';

  const estadoPadrao = {
    altoContraste: false,
    fonteDislexia: false,
    tamanhoFonte: 'normal', // normal, grande, maior
    colorBlind: false,
    ledor: false,
    libras: false
  };

  function carregarEstado() {
    try {
      const salvo = localStorage.getItem(STORAGE_KEY);
      return salvo ? { ...estadoPadrao, ...JSON.parse(salvo) } : { ...estadoPadrao };
    } catch {
      return { ...estadoPadrao };
    }
  }

  function salvarEstado(estado) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(estado));
  }

  function aplicarEstado(estado) {
    const body = document.body;

    // Alto contraste
    body.classList.toggle('alto-contraste', estado.altoContraste);
    atualizarBotao('btn-contraste', estado.altoContraste);

    // Fonte dislexia
    body.classList.toggle('fonte-dislexia', estado.fonteDislexia);
    atualizarBotao('btn-dislexia', estado.fonteDislexia);

    // Tamanho da fonte
    body.classList.remove('fonte-grande', 'fonte-maior');
    if (estado.tamanhoFonte === 'grande') body.classList.add('fonte-grande');
    if (estado.tamanhoFonte === 'maior') body.classList.add('fonte-maior');

    // Color blind
    body.classList.toggle('color-blind', estado.colorBlind);
    atualizarBotao('btn-colorblind', estado.colorBlind);

    // Ledor
    const ledorPlayer = document.querySelector('.ledor-player');
    if (ledorPlayer) {
      ledorPlayer.classList.toggle('visivel', estado.ledor);
    }
    atualizarBotao('btn-ledor', estado.ledor);

    // LIBRAS
    const librasJanela = document.querySelector('.libras-janela');
    if (librasJanela) {
      librasJanela.classList.toggle('visivel', estado.libras);
    }
    atualizarBotao('btn-libras', estado.libras);
  }

  function atualizarBotao(id, ativo) {
    const btn = document.getElementById(id);
    if (btn) btn.classList.toggle('ativo', ativo);
  }

  // Inicializar barra de acessibilidade
  function inicializar() {
    const estado = carregarEstado();
    aplicarEstado(estado);

    // Alto contraste
    document.getElementById('btn-contraste')?.addEventListener('click', () => {
      estado.altoContraste = !estado.altoContraste;
      salvarEstado(estado);
      aplicarEstado(estado);
    });

    // Fonte dislexia
    document.getElementById('btn-dislexia')?.addEventListener('click', () => {
      estado.fonteDislexia = !estado.fonteDislexia;
      salvarEstado(estado);
      aplicarEstado(estado);
    });

    // Diminuir fonte
    document.getElementById('btn-fonte-menos')?.addEventListener('click', () => {
      if (estado.tamanhoFonte === 'maior') estado.tamanhoFonte = 'grande';
      else if (estado.tamanhoFonte === 'grande') estado.tamanhoFonte = 'normal';
      salvarEstado(estado);
      aplicarEstado(estado);
    });

    // Aumentar fonte
    document.getElementById('btn-fonte-mais')?.addEventListener('click', () => {
      if (estado.tamanhoFonte === 'normal') estado.tamanhoFonte = 'grande';
      else if (estado.tamanhoFonte === 'grande') estado.tamanhoFonte = 'maior';
      salvarEstado(estado);
      aplicarEstado(estado);
    });

    // Color blind
    document.getElementById('btn-colorblind')?.addEventListener('click', () => {
      estado.colorBlind = !estado.colorBlind;
      salvarEstado(estado);
      aplicarEstado(estado);
    });

    // Ledor
    document.getElementById('btn-ledor')?.addEventListener('click', () => {
      estado.ledor = !estado.ledor;
      if (!estado.ledor) {
        window.speechSynthesis?.cancel();
      }
      salvarEstado(estado);
      aplicarEstado(estado);
    });

    // LIBRAS
    document.getElementById('btn-libras')?.addEventListener('click', () => {
      estado.libras = !estado.libras;
      salvarEstado(estado);
      aplicarEstado(estado);
    });

    // Fechar LIBRAS
    document.getElementById('libras-fechar')?.addEventListener('click', () => {
      estado.libras = false;
      salvarEstado(estado);
      aplicarEstado(estado);
    });

    // Ledor — controles
    inicializarLedor(estado);
  }

  // Ledor com Web Speech API
  function inicializarLedor(estado) {
    let velocidade = 1;

    const btnPlay = document.getElementById('ledor-play');
    const btnPause = document.getElementById('ledor-pause');
    const btnStop = document.getElementById('ledor-stop');
    const velDisplay = document.querySelector('.velocidade-atual');
    const btnVelMenos = document.getElementById('ledor-vel-menos');
    const btnVelMais = document.getElementById('ledor-vel-mais');

    if (!btnPlay) return;

    btnPlay.addEventListener('click', () => {
      if (!('speechSynthesis' in window)) return;
      window.speechSynthesis.cancel();

      const texto = document.querySelector('.conteudo-principal')?.innerText
        || document.querySelector('main')?.innerText
        || document.body.innerText;

      const utterance = new SpeechSynthesisUtterance(texto);
      utterance.lang = 'pt-BR';
      utterance.rate = velocidade;
      window.speechSynthesis.speak(utterance);
    });

    btnPause?.addEventListener('click', () => {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      } else {
        window.speechSynthesis.pause();
      }
    });

    btnStop?.addEventListener('click', () => {
      window.speechSynthesis.cancel();
    });

    btnVelMenos?.addEventListener('click', () => {
      if (velocidade > 0.5) {
        velocidade -= 0.25;
        if (velDisplay) velDisplay.textContent = velocidade + 'x';
      }
    });

    btnVelMais?.addEventListener('click', () => {
      if (velocidade < 2) {
        velocidade += 0.25;
        if (velDisplay) velDisplay.textContent = velocidade + 'x';
      }
    });
  }

  // Inicializar quando DOM estiver pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializar);
  } else {
    inicializar();
  }
})();

/* ============================================
   HelenAI — Botão flutuante "Baixar PDF da tela"
   TEMPORÁRIO: remover quando começarmos as telas com banco.
   Para remover: apagar este arquivo e os <script src="/assets/js/botao-pdf.js">
   espalhados nos HTMLs.
   ============================================ */

(function () {
  'use strict';

  function pdfNomeDaUrl() {
    const path = window.location.pathname.replace(/^\/+|\/+$/g, '');
    if (!path || path === 'index.html' || path === 'apresentacao.html') return null;
    if (!/\.html$/i.test(path)) return null;
    const partes = path.split('/');
    if (partes.length < 2) return null;
    return partes.join('-').replace(/\.html$/i, '') + '.pdf';
  }

  const ESTILO_BASE = [
    'display:inline-flex',
    'align-items:center',
    'gap:6px',
    'padding:7px 14px',
    'background:#FFFFFF',
    'color:#1A3A6B',
    'border:1.5px solid #BEE3F8',
    'border-radius:999px',
    "font-family:'Inter',sans-serif",
    'font-size:0.78rem',
    'font-weight:700',
    'text-decoration:none',
    'box-shadow:0 2px 6px rgba(43,108,176,0.12)',
    'cursor:pointer',
    'transition:all 0.15s ease',
    'white-space:nowrap'
  ];

  function criarBotao(nome, extras) {
    const a = document.createElement('a');
    a.id = 'botao-pdf-tela';
    a.href = '/pdfs/' + nome;
    a.download = nome;
    a.title = 'Baixar PDF desta tela (' + nome + ')';
    a.textContent = '⬇ PDF da tela';
    a.style.cssText = ESTILO_BASE.concat(extras || []).join(';');
    a.addEventListener('mouseenter', () => {
      a.style.background = '#EBF8FF';
      a.style.borderColor = '#2B6CB0';
    });
    a.addEventListener('mouseleave', () => {
      a.style.background = '#FFFFFF';
      a.style.borderColor = '#BEE3F8';
    });
    return a;
  }

  function injetar() {
    const nome = pdfNomeDaUrl();
    if (!nome) return;
    if (document.getElementById('botao-pdf-tela')) return;

    const appbarDireita = document.querySelector('.appbar .appbar-direita');
    if (appbarDireita) {
      const btn = criarBotao(nome, ['margin-right:8px']);
      const refNotif = appbarDireita.querySelector('#btn-notificacoes');
      if (refNotif) appbarDireita.insertBefore(btn, refNotif);
      else appbarDireita.insertBefore(btn, appbarDireita.firstChild);
      return;
    }

    document.body.appendChild(criarBotao(nome, [
      'position:fixed',
      'top:12px',
      'right:16px',
      'z-index:99999'
    ]));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injetar);
  } else {
    injetar();
  }
})();

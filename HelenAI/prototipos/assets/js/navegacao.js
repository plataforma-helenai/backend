/* ============================================
   HelenAI — Navegação
   AppBar, sidebar, breadcrumb, dropdown perfil
   ============================================ */

(function () {
  'use strict';

  // Carregar usuário logado
  function getUsuario() {
    try {
      return JSON.parse(localStorage.getItem('helenai_usuario')) || { nome: 'Usuário', perfil: 'aluno' };
    } catch {
      return { nome: 'Usuário', perfil: 'aluno' };
    }
  }

  function getIniciais(nome) {
    return nome.split(' ').map(p => p[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
  }

  function capitalizar(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // Injetar AppBar
  function criarAppBar() {
    const usuario = getUsuario();
    const iniciais = getIniciais(usuario.nome);
    const perfil = capitalizar(usuario.perfil);

    // Detectar página atual para breadcrumb
    const path = window.location.pathname;
    const partes = path.split('/').filter(Boolean);
    const pagina = partes[partes.length - 1]?.replace('.html', '').replace(/-/g, ' ') || 'Dashboard';
    const modulo = partes.length > 1 ? capitalizar(partes[partes.length - 2]) : '';

    const botoesApresentacao = '';

    const appbarHTML = `
      <div class="appbar">
        <div class="appbar-esquerda">
          <span class="appbar-breadcrumb">
            ${modulo ? `<a href="/${partes[partes.length - 2]}/dashboard.html">${modulo}</a> / ` : ''}
            <strong>${capitalizar(pagina)}</strong>
          </span>
        </div>
        <div class="appbar-direita">
          ${botoesApresentacao}
          <button class="appbar-notificacao" id="btn-notificacoes" title="Notificações">
            🔔
            <span class="notif-badge">3</span>
          </button>
          <div class="appbar-perfil" id="btn-perfil">
            <div class="perfil-info">
              <div class="perfil-nome">${usuario.nome}</div>
              <div class="perfil-role">${perfil}</div>
            </div>
            <div class="avatar">${iniciais}</div>
          </div>
        </div>
        <div class="appbar-dropdown notif-dropdown" id="dropdown-notificacoes">
          <div class="notif-dropdown-header">
            <span class="notif-dropdown-titulo">Notificações</span>
            <button class="notif-marcar-lidas" onclick="marcarTodasLidas()">Marcar todas como lidas</button>
          </div>
          <div class="notif-dropdown-lista">
            <div class="notif-item nao-lida">
              <div class="notif-item-icone" style="background:#FED7E2;color:#97266D;">🔔</div>
              <div class="notif-item-info">
                <div class="notif-item-texto"><strong>Diego Nunes</strong> solicitou entrada na turma <strong>ENEM 2026 — Intensivo</strong></div>
                <div class="notif-item-tempo">Há 2 horas</div>
              </div>
            </div>
            <div class="notif-item nao-lida">
              <div class="notif-item-icone" style="background:#C6F6D5;color:#22543D;">✅</div>
              <div class="notif-item-info">
                <div class="notif-item-texto"><strong>Maria Oliveira</strong> completou o simulado <strong>ENEM 2025 — Caderno Azul</strong> com nota 76%</div>
                <div class="notif-item-tempo">Há 5 horas</div>
              </div>
            </div>
            <div class="notif-item nao-lida">
              <div class="notif-item-icone" style="background:#BEE3F8;color:#2A4365;">📝</div>
              <div class="notif-item-info">
                <div class="notif-item-texto"><strong>Ana Beatriz</strong> enviou um simulado para <strong>curadoria</strong></div>
                <div class="notif-item-tempo">Há 1 dia</div>
              </div>
            </div>
            <div class="notif-item">
              <div class="notif-item-icone" style="background:#E2E8F0;color:#4A5568;">👥</div>
              <div class="notif-item-info">
                <div class="notif-item-texto"><strong>Pedro Santos</strong> entrou na turma <strong>Matemática Básica</strong></div>
                <div class="notif-item-tempo">Há 2 dias</div>
              </div>
            </div>
          </div>
          <div class="notif-dropdown-footer">
            <a href="#">Ver todas as notificações</a>
          </div>
        </div>
        <div class="appbar-dropdown" id="dropdown-perfil">
          <a href="#" class="appbar-dropdown-item">👤 Meu Perfil</a>
          <a href="#" class="appbar-dropdown-item">⚙ Configurações</a>
          <div class="appbar-dropdown-divider"></div>
          <a href="/compartilhado/login.html" class="appbar-dropdown-item logout">⏻ Sair</a>
        </div>
      </div>
    `;

    // Inserir no início do layout ou do body
    const layout = document.querySelector('.layout');
    if (layout) {
      layout.insertAdjacentHTML('afterbegin', appbarHTML);
    }
  }

  // Toggle dropdowns
  function initDropdown() {
    const btnPerfil = document.getElementById('btn-perfil');
    const dropdownPerfil = document.getElementById('dropdown-perfil');
    const btnNotif = document.getElementById('btn-notificacoes');
    const dropdownNotif = document.getElementById('dropdown-notificacoes');

    if (btnPerfil && dropdownPerfil) {
      btnPerfil.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownNotif?.classList.remove('visivel');
        dropdownPerfil.classList.toggle('visivel');
      });
    }

    if (btnNotif && dropdownNotif) {
      btnNotif.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownPerfil?.classList.remove('visivel');
        dropdownNotif.classList.toggle('visivel');
      });

      dropdownNotif.addEventListener('click', (e) => {
        e.stopPropagation();
      });
    }

    document.addEventListener('click', () => {
      dropdownPerfil?.classList.remove('visivel');
      dropdownNotif?.classList.remove('visivel');
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        dropdownPerfil?.classList.remove('visivel');
        dropdownNotif?.classList.remove('visivel');
      }
    });
  }

  // Marcar todas como lidas
  window.marcarTodasLidas = function() {
    document.querySelectorAll('.notif-item.nao-lida').forEach(item => {
      item.classList.remove('nao-lida');
    });
    const badge = document.querySelector('.notif-badge');
    if (badge) badge.style.display = 'none';
  };

  // Logout ao clicar em sair
  function initLogout() {
    const logoutBtn = document.querySelector('.appbar-dropdown-item.logout');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', (e) => {
        localStorage.removeItem('helenai_usuario');
      });
    }
  }

  // Inicializar
  function init() {
    criarAppBar();
    initDropdown();
    initLogout();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

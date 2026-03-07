// =============================================
// Sidebar Toggle - assets/js/sidebar-toggle.js
// =============================================

(function () {
  'use strict';

  const STORAGE_KEY = 'chirpy-sidebar-collapsed';
  const COLLAPSED_CLASS = 'sidebar-collapsed';

  function init() {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) return;

    // 저장된 상태 복원
    if (localStorage.getItem(STORAGE_KEY) === 'true') {
      document.body.classList.add(COLLAPSED_CLASS);
    }

    // 토글 버튼 생성
    const btn = document.createElement('button');
    btn.id = 'sidebar-toggle-btn';
    btn.setAttribute('aria-label', 'Toggle Sidebar');
    btn.setAttribute('title', '사이드바 접기/펼치기');
    btn.innerHTML = '<i class="fas fa-chevron-left"></i>';

    document.body.appendChild(btn);

    // 클릭 이벤트
    btn.addEventListener('click', function () {
      const isCollapsed = document.body.classList.toggle(COLLAPSED_CLASS);
      localStorage.setItem(STORAGE_KEY, isCollapsed);
    });
  }

  // DOM 준비 후 실행
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

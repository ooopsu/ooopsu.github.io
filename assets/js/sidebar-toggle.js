// =============================================
// Sidebar Toggle - assets/js/sidebar-toggle.js
// localStorage 차단 환경 대응 버전
// =============================================

(function () {
  'use strict';

  const STORAGE_KEY = 'chirpy-sidebar-collapsed';
  const COLLAPSED_CLASS = 'sidebar-collapsed';

  function storageGet(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }

  function storageSet(key, val) {
    try { localStorage.setItem(key, val); } catch (e) {}
  }

  function init() {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) return;

    // 저장된 상태 복원
    if (storageGet(STORAGE_KEY) === 'true') {
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
      storageSet(STORAGE_KEY, isCollapsed);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

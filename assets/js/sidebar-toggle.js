(function () {
  'use strict';

  var STORAGE_KEY = 'sidebar-collapsed';
  var body = document.body;
  // 우리가 만든 네모 버튼(sidebar-toggle)을 찾아옵니다.
  var btn = document.getElementById('sidebar-toggle');

  if (!btn) return;

  // 새로고침해도 접힌 상태를 기억
  if (localStorage.getItem(STORAGE_KEY) === 'true') {
    body.classList.add('sidebar-collapsed');
  }

  // 버튼 클릭 시 사이드바 접기/펴기 로직
  btn.addEventListener('click', function () {
    body.classList.toggle('sidebar-collapsed');
    localStorage.setItem(STORAGE_KEY, body.classList.contains('sidebar-collapsed'));
  });
})();

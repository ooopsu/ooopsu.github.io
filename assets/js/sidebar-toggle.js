(function () {
  'use strict';

  var STORAGE_KEY = 'sidebar-collapsed';
  var body = document.body;
  
  // 우리가 만든 네모 버튼을 정확히 찾아옵니다.
  var btn = document.getElementById('sidebar-toggle');
  if (!btn) return;

  // 새로고침해도 접힌 상태인지 기억하기
  if (localStorage.getItem(STORAGE_KEY) === 'true') {
    body.classList.add('sidebar-collapsed');
  }

  // 버튼을 찰칵찰칵 누를 때마다 슬라이드 작동!
  btn.addEventListener('click', function () {
    body.classList.toggle('sidebar-collapsed');
    localStorage.setItem(STORAGE_KEY, body.classList.contains('sidebar-collapsed'));
  });
})();

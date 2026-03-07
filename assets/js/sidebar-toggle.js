/*!
 * Sidebar Toggle Script
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'sidebar-collapsed';
  var body = document.body;
  var btn = document.getElementById('sidebar-toggle');

  if (!btn) return;

  // Restore saved state
  if (localStorage.getItem(STORAGE_KEY) === 'true') {
    body.classList.add('sidebar-collapsed');
  }

  btn.addEventListener('click', function () {
    body.classList.toggle('sidebar-collapsed');
    localStorage.setItem(STORAGE_KEY, body.classList.contains('sidebar-collapsed'));
  });
})();

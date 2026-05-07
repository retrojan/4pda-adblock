// ==UserScript==
// @name         Simple 4pda Adblock
// @namespace    4PDA
// @version      1.0
// @description  4pda simple adblocker.
// @author       retrojan
// @match        https://4pda.to/*
// @icon         https://4pda.to/s/PXtiacOY8Mz0UBgLQBVkl40yz0oYH.svg
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

document.querySelectorAll('a').forEach(link => {
  const href = link.getAttribute('href');
  if (href && href.match(/\d{4}\/\d{2}\/\d{2}\/\d+\/$/)) {
      const td = link.closest('td');
      if (td) { td.style.display = 'none'; }
  }
});
  
document.querySelectorAll('li.menu-main-item a[href*="utm_"]').forEach(link => {
    const li = link.closest('li');
    if (li) { li.style.display = 'none'; }
});
document.querySelectorAll('a[href*="erid="]').forEach(link => {
    const li = link.closest('li');
    if (li) { li.style.display = 'none'; }
});

document.querySelectorAll('[ddocj0o]').forEach(el => { el.style.display = 'none'; }); })();

// ==UserScript==
// @name         Simple 4pda Adblock
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  4pda Simple Adblocker
// @author       retrojan
// @match        https://4pda.to/*
// @icon         https://4pda.to/s/PXtiacOY8Mz0UBgLQBVkl40yz0oYH.svg
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const style = document.createElement('style');
    style.textContent = `
        td:has(a[href*="/20"]) { display: none !important; }
        li.menu-main-item:has(a[href*="utm_"]) { display: none !important; }
        li:has(a[href*="erid="]) { display: none !important; }
        [ddocj0o] { display: none !important; }
        .banner, .advert, [class*="banner"], [class*="advert"],
        [id*="banner"], [id*="advert"], .adsbygoogle {
            display: none !important;
        }
    `;
    document.documentElement.appendChild(style);

    function hideElements() {
        document.querySelectorAll('a').forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.match(/\d{4}\/\d{2}\/\d{2}\/\d+\/$/)) {
                const td = link.closest('td');
                if (td) td.style.display = 'none';
            }
        });

        document.querySelectorAll('li.menu-main-item a[href*="utm_"]').forEach(link => {
            const li = link.closest('li');
            if (li) li.style.display = 'none';
        });

        document.querySelectorAll('a[href*="erid="]').forEach(link => {
            const li = link.closest('li');
            if (li) li.style.display = 'none';
        });

        document.querySelectorAll('[ddocj0o]').forEach(el => {
            el.style.display = 'none';
        });
    }

    if (document.documentElement) {
        hideElements();
    }

    const observer = new MutationObserver(() => hideElements());

    if (document.body) {
        observer.observe(document.body, { childList: true, subtree: true });
    } else {
        document.addEventListener('DOMContentLoaded', () => {
            observer.observe(document.body, { childList: true, subtree: true });
        });
    }
})();

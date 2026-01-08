/**
 * Common initialization for all pages
 * Handles: navbar, footer loading
 * This makes theme toggle work on every page
 */
(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', async function() {
    const loader = window.UXFolio.ComponentLoader;

    try {
      // Load navbar and footer on every page (parallel loading)
      await Promise.all([
        loader.load('navbar', '#navbar-container'),
        loader.load('footer', '#footer-container')
      ]);

      console.log('[UXFolio] Common components loaded');

      // Theme toggle will initialize automatically when footer loads
      // (theme-toggle.js listens for 'footer' component:loaded event)

    } catch (error) {
      console.error('[UXFolio] Failed to load common components:', error);
    }
  });
})();

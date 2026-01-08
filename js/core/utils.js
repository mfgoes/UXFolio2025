// Shared utility functions for all pages
const Utils = {
  /**
   * Parse CSV text into array of arrays
   * @param {string} csvText - Raw CSV data
   * @param {boolean} skipHeader - Skip first row
   * @returns {Array<Array<string>>}
   */
  parseCSV(csvText, skipHeader = true) {
    const lines = csvText.trim().split('\n');
    const data = skipHeader ? lines.slice(1) : lines;

    return data.map(line => {
      if (line.trim() === '') return null;
      return line.split(',').map(col => col.trim());
    }).filter(Boolean);
  },

  /**
   * RequestAnimationFrame throttle (performance optimization)
   * @param {Function} callback
   * @returns {Function}
   */
  throttle(callback) {
    let ticking = false;
    return function(...args) {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          callback.apply(this, args);
          ticking = false;
        });
        ticking = true;
      }
    };
  },

  /**
   * Wait for element to appear in DOM (better than polling)
   * @param {string} selector - CSS selector
   * @param {number} timeout - Max wait time in ms
   * @returns {Promise<HTMLElement>}
   */
  waitForElement(selector, timeout = 5000) {
    return new Promise((resolve, reject) => {
      const element = document.querySelector(selector);
      if (element) return resolve(element);

      const observer = new MutationObserver((mutations, obs) => {
        const element = document.querySelector(selector);
        if (element) {
          obs.disconnect();
          resolve(element);
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });

      setTimeout(() => {
        observer.disconnect();
        reject(new Error(`Element ${selector} not found after ${timeout}ms`));
      }, timeout);
    });
  }
};

// Export to global namespace (multi-page compatible)
window.UXFolio = window.UXFolio || {};
window.UXFolio.Utils = Utils;

// Custom event helpers for component communication
const EventBus = {
  /**
   * Emit component loaded event
   * @param {string} name - Component name (e.g., 'footer', 'navbar')
   * @param {HTMLElement} element - Container element
   */
  componentLoaded(name, element) {
    window.dispatchEvent(new CustomEvent('component:loaded', {
      detail: { name, element, timestamp: Date.now() }
    }));
  },

  /**
   * Wait for specific component to load
   * @param {string} name - Component name
   * @param {number} timeout - Max wait time
   * @returns {Promise<HTMLElement>}
   */
  waitForComponent(name, timeout = 5000) {
    return new Promise((resolve, reject) => {
      const handler = (event) => {
        if (event.detail.name === name) {
          window.removeEventListener('component:loaded', handler);
          resolve(event.detail.element);
        }
      };

      window.addEventListener('component:loaded', handler);

      setTimeout(() => {
        window.removeEventListener('component:loaded', handler);
        reject(new Error(`Component ${name} did not load after ${timeout}ms`));
      }, timeout);
    });
  },

  /**
   * Listen for any component load
   * @param {Function} callback
   */
  onComponentLoaded(callback) {
    window.addEventListener('component:loaded', callback);
  }
};

window.UXFolio = window.UXFolio || {};
window.UXFolio.EventBus = EventBus;

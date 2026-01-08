// DRY component loading - eliminates 6 files of duplication
class ComponentLoader {
  constructor() {
    this.cache = new Map();
    this.loading = new Map();
  }

  /**
   * Load HTML component into container
   * @param {string} componentName - Name of component (e.g., 'navbar')
   * @param {string} containerSelector - CSS selector for container
   * @param {string} basePath - Base path for HTML files
   * @returns {Promise<HTMLElement>}
   */
  async load(componentName, containerSelector, basePath = 'assets/html') {
    const container = document.querySelector(containerSelector);

    if (!container) {
      throw new Error(`Container ${containerSelector} not found`);
    }

    // Return existing promise if already loading
    if (this.loading.has(componentName)) {
      return this.loading.get(componentName);
    }

    const loadPromise = this._fetchAndRender(
      componentName,
      container,
      basePath
    );

    this.loading.set(componentName, loadPromise);

    try {
      const element = await loadPromise;
      this.loading.delete(componentName);
      return element;
    } catch (error) {
      this.loading.delete(componentName);
      throw error;
    }
  }

  async _fetchAndRender(componentName, container, basePath) {
    const url = `${basePath}/${componentName}.html`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Failed to load ${url}: ${response.status}`);
      }

      const html = await response.text();
      container.innerHTML = html;

      // Emit loaded event for other components to listen
      window.UXFolio.EventBus.componentLoaded(componentName, container);

      return container;
    } catch (error) {
      console.error(`Error loading component ${componentName}:`, error);
      throw error;
    }
  }

  /**
   * Load multiple components in parallel (performance optimization)
   * @param {Array} components - Array of {name, container, basePath}
   * @returns {Promise<Array<HTMLElement>>}
   */
  async loadAll(components) {
    return Promise.all(
      components.map(({ name, container, basePath }) =>
        this.load(name, container, basePath)
      )
    );
  }
}

// Create singleton instance
window.UXFolio = window.UXFolio || {};
window.UXFolio.ComponentLoader = new ComponentLoader();

document.addEventListener('DOMContentLoaded', async function () {
    try {
        await window.UXFolio.ComponentLoader.load('sidepanel', '#side-panel-container');

        // Ensure initializeSidePanel is only called after the HTML is loaded
        if (typeof initializeSidePanel === 'function') {
            initializeSidePanel();
        }
    } catch (error) {
        console.error('Error loading sidepanel:', error);
    }
});

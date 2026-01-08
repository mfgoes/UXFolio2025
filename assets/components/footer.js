document.addEventListener('DOMContentLoaded', async function() {
    try {
        await window.UXFolio.ComponentLoader.load('footer', '#footer-container');
    } catch (error) {
        console.error('Error loading footer:', error);
    }
});

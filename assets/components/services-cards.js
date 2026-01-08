document.addEventListener('DOMContentLoaded', async function() {
    try {
        await window.UXFolio.ComponentLoader.load('services-cards', '#services-container');
    } catch (error) {
        console.error('Error loading services:', error);
    }
});

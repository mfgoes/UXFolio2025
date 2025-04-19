document.addEventListener('DOMContentLoaded', function() {
    const navbarContainer = document.getElementById('navbar-container');

    fetch('assets/html/navbar-light.html')
        .then(response => response.text())
        .then(data => {
            navbarContainer.innerHTML = data;
        })
        .catch(error => console.error('Error loading navbar:', error));
});

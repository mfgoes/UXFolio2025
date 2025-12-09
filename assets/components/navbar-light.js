document.addEventListener('DOMContentLoaded', function() {
    const navbarContainer = document.getElementById('navbar-container');

    fetch('assets/html/navbar-light.html')
        .then(response => response.text())
        .then(data => {
            navbarContainer.innerHTML = data;

            // Auto-expand Case Studies dropdown on mobile
            const navbarCollapse = document.querySelector('#navbarNav');
            const dropdownToggle = document.querySelector('#caseStudiesDropdown');

            console.log('Navbar loaded. Elements found:', {
                navbarCollapse: !!navbarCollapse,
                dropdownToggle: !!dropdownToggle,
                bootstrapAvailable: typeof bootstrap !== 'undefined'
            });

            if (navbarCollapse && dropdownToggle) {
                // When mobile menu opens, auto-expand Case Studies dropdown
                navbarCollapse.addEventListener('shown.bs.collapse', function() {
                    console.log('Menu opened. Is mobile:', window.matchMedia('(max-width: 768px)').matches);

                    if (window.matchMedia('(max-width: 768px)').matches) {
                        // Use vanilla JS to show dropdown (works with both Bootstrap 4 & 5)
                        const dropdownMenu = dropdownToggle.nextElementSibling;

                        if (dropdownMenu && dropdownMenu.classList.contains('dropdown-menu')) {
                            // Add 'show' class to both toggle and menu
                            dropdownToggle.classList.add('show');
                            dropdownToggle.setAttribute('aria-expanded', 'true');
                            dropdownMenu.classList.add('show');
                            console.log('Dropdown auto-expanded');
                        }
                    }
                });

                // When mobile menu closes, reset dropdown state
                navbarCollapse.addEventListener('hide.bs.collapse', function() {
                    if (window.matchMedia('(max-width: 768px)').matches) {
                        const dropdownMenu = dropdownToggle.nextElementSibling;

                        if (dropdownMenu && dropdownMenu.classList.contains('dropdown-menu')) {
                            // Remove 'show' class from both toggle and menu
                            dropdownToggle.classList.remove('show');
                            dropdownToggle.setAttribute('aria-expanded', 'false');
                            dropdownMenu.classList.remove('show');
                        }
                    }
                });
            }
        })
        .catch(error => console.error('Error loading navbar:', error));
});

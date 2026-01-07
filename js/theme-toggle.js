class ThemeManager {
    constructor() {
        this.THEME_KEY = 'uxfolio-theme';
        this.currentTheme = localStorage.getItem(this.THEME_KEY) || 'light';
        this.init();
    }

    init() {
        this.applyTheme(this.currentTheme, false);
        this.waitForFooter();
    }

    waitForFooter() {
        const checkFooter = setInterval(() => {
            const toggleBtn = document.getElementById('theme-toggle');
            if (toggleBtn) {
                clearInterval(checkFooter);
                this.attachToggleListener();
                this.updateToggleUI();
            }
        }, 100);
    }

    applyTheme(theme, animate = true) {
        document.documentElement.setAttribute('data-bs-theme', theme);

        if (theme === 'dark') {
            document.body.classList.add('theme-dark');
        } else {
            document.body.classList.remove('theme-dark');
        }

        this.updateDitheringColor(theme);
        localStorage.setItem(this.THEME_KEY, theme);
        this.currentTheme = theme;
    }

    updateDitheringColor(theme) {
        if (window.ditheringUniforms) {
            const color = theme === 'dark' ? '#2a2a3e' : '#e8e8ff';
            window.ditheringUniforms.uColor.value.setStyle(color);
        }
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme(newTheme);
        this.updateToggleUI();
    }

    updateToggleUI() {
        const lightIcon = document.getElementById('theme-icon-light');
        const darkIcon = document.getElementById('theme-icon-dark');
        const text = document.getElementById('theme-text');

        if (this.currentTheme === 'dark') {
            lightIcon.style.display = 'inline-block';
            darkIcon.style.display = 'none';
            text.textContent = 'Light Mode';
        } else {
            lightIcon.style.display = 'none';
            darkIcon.style.display = 'inline-block';
            text.textContent = 'Dark Mode';
        }
    }

    attachToggleListener() {
        document.getElementById('theme-toggle').addEventListener('click', () => this.toggleTheme());
    }
}

// Initialize theme manager immediately
new ThemeManager();

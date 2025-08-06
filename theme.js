function initializeTheme() {
    const html = document.documentElement;
    const darkmodeToggle = document.getElementById('darkmodeToggle');
    const themeToggleBtn = document.querySelector('.theme-toggle');

    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);

    // Sync checkbox toggle if exists
    if (darkmodeToggle) {
        darkmodeToggle.checked = savedTheme === 'dark';
        darkmodeToggle.addEventListener('change', () => {
            const newTheme = darkmodeToggle.checked ? 'dark' : 'light';
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    // Handle button toggle if exists
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);

            // Keep checkbox in sync if present
            if (darkmodeToggle) {
                darkmodeToggle.checked = newTheme === 'dark';
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', initializeTheme);

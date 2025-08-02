// Remove these lines from script.js:
// const themeToggle = document.querySelector('.theme-toggle');
// const html = document.documentElement;
// themeToggle.addEventListener('click', () => { ... });
// const savedTheme = localStorage.getItem('theme') || 'light';
// html.setAttribute('data-theme', savedTheme);

// Keep all other existing functionality
const balanceToggle = document.querySelector('.toggle-balance');
const balanceCard = document.querySelector('.balance-card');

balanceToggle.addEventListener('click', () => {
    balanceCard.classList.toggle('balance-hidden');
});

// Interactive elements
document.querySelectorAll('.action-button, .action-item, .service-item, .nav-item').forEach(element => {
    element.addEventListener('click', function() {
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
});

// Navigation
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.nav-item').forEach(navItem => {
            navItem.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// Add this to your existing script.js

// Toggle between no records and transaction list (for demo purposes)
const toggleTransactions = () => {
    const noTransactions = document.querySelector('.no-transactions');
    const transactionsList = document.querySelector('.transactions-list');
    
    // You can set this based on your actual data
    const hasTransactions = true;
    
    if (hasTransactions) {
        noTransactions.style.display = 'none';
        transactionsList.style.display = 'flex';
    } else {
        noTransactions.style.display = 'flex';
        transactionsList.style.display = 'none';
    }
};

// Call this function when the page loads
document.addEventListener('DOMContentLoaded', toggleTransactions);
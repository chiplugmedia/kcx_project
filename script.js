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

// Modal functionality
const sendMoneyButton = document.querySelector('.send-money');
const modal = document.getElementById('sendMoneyModal');

// Open modal
sendMoneyButton.addEventListener('click', () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
});

// Close modal when clicking overlay
modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('modal-overlay')) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Add touch swipe down to close
let touchStart = null;
let touchEnd = null;

modal.addEventListener('touchstart', (e) => {
    touchStart = e.touches[0].clientY;
});

modal.addEventListener('touchmove', (e) => {
    if (!touchStart) return;
    
    touchEnd = e.touches[0].clientY;
    const distance = touchEnd - touchStart;
    
    if (distance > 50) { // If swipe down is more than 50px
        modal.classList.remove('active');
        document.body.style.overflow = '';
        touchStart = null;
        touchEnd = null;
    }
});

modal.addEventListener('touchend', () => {
    touchStart = null;
    touchEnd = null;
});
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
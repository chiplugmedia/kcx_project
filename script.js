const balanceToggle = document.querySelector('.toggle-balance');
const balanceCard = document.querySelector('.balance-card');

balanceToggle.addEventListener('click', () => {
    balanceCard.classList.toggle('balance-hidden');
});

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

// Profile page functionality
const biometricsToggle = document.getElementById('biometricsToggle');
const darkmodeToggle = document.getElementById('darkmodeToggle');
const editProfileBtn = document.querySelector('.edit-profile-btn');

// Initialize dark mode toggle state
document.addEventListener('DOMContentLoaded', () => {
    const darkmodeToggle = document.getElementById('darkmodeToggle');
    if (darkmodeToggle) {
        darkmodeToggle.checked = document.documentElement.getAttribute('data-theme') === 'dark';
    }
});

// Handle biometrics toggle
biometricsToggle?.addEventListener('change', function() {
    // Add your biometrics toggle logic here
    console.log('Biometrics:', this.checked);
});

// Handle darkmode toggle
darkmodeToggle?.addEventListener('change', function() {
    const newTheme = this.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Handle edit profile button
editProfileBtn?.addEventListener('click', function() {
    alert('Edit profile functionality coming soon!');
});

// Handle bottom navigation active state
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    item.addEventListener('click', function() {
        navItems.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
    });
});

// Giftcard Search Functionality
const giftcardSearch = document.getElementById('giftcardSearch');
const giftcardItems = document.querySelectorAll('.giftcard-item');

giftcardSearch?.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    
    giftcardItems.forEach(item => {
        const name = item.querySelector('.giftcard-name').textContent.toLowerCase();
        if (name.includes(searchTerm)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});

document.getElementById('sendMoneyModal').addEventListener('click', function() {
    const modal = document.getElementById('sendMoneyModalContent');
    const overlay = document.getElementById('modalOverlay');
    
    modal.classList.toggle('show');
    overlay.classList.toggle('show');
    
    // Close modal when clicking on overlay
    overlay.addEventListener('click', function() {
        modal.classList.remove('show');
        overlay.classList.remove('show');
    });
});

// Airtime Page Functionality
const providerModal = document.getElementById('providerModal');
const modalOverlay = providerModal?.querySelector('.modal-overlay');
const phoneInput = document.getElementById('phoneNumber');
const amountInput = document.getElementById('amount');
const continueButton = document.getElementById('continueButton');
const airtimeForm = document.getElementById('airtimeForm');

// Provider Select Functionality
const providerSelect = document.getElementById('providerSelect');
const providerDropdown = document.querySelector('.provider-dropdown');
const providerOptions = document.querySelectorAll('.provider-option');
const selectedProviderName = document.querySelector('.provider-name');
const selectedProviderLogo = document.querySelector('.select-display .provider-logo');

// Toggle dropdown
providerSelect?.addEventListener('click', (e) => {
    providerSelect.classList.toggle('active');
    e.stopPropagation();
});

// Close dropdown when clicking outside
document.addEventListener('click', () => {
    providerSelect?.classList.remove('active');
});

// Select provider
providerOptions.forEach(option => {
    option.addEventListener('click', () => {
        const provider = option.dataset.provider;
        const logo = option.querySelector('img').src;
        
        selectedProviderName.textContent = provider;
        selectedProviderLogo.style.backgroundImage = `url(${logo})`;
        providerSelect.classList.remove('active');
        
        // Trigger form validation if needed
        validateForm();
    });
});

// Format amount input
amountInput?.addEventListener('input', function(e) {
    let value = this.value.replace(/[^0-9]/g, '');
    if (value) {
        value = parseInt(value, 10).toLocaleString('en-NG', {
            style: 'currency',
            currency: 'NGN',
            minimumFractionDigits: 2
        });
        this.value = value;
    }
    validateForm();
});

// Validate phone number
phoneInput?.addEventListener('input', validateForm);

// Form validation
function validateForm() {
    const provider = providerSelect?.querySelector('.provider-name')?.textContent;
    const phone = phoneInput?.value;
    const amount = amountInput?.value;

    const isValid = 
        provider && provider !== 'Select Provider' &&
        phone && phone.length === 11 &&
        amount && amount.length > 0;

    if (continueButton) {
        continueButton.disabled = !isValid;
    }
}

// Handle form submission
airtimeForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
});

document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const providerSelect = document.getElementById('providerSelect');
    const providerModal = document.getElementById('providerModal');
    const providerOptions = document.querySelectorAll('.provider-option');
    const providerNameDisplay = document.querySelector('.provider-name');
    const providerLogoDisplay = document.querySelector('.select-display .provider-logo');
    const continueButton = document.getElementById('continueButton');
    const phoneNumberInput = document.getElementById('phoneNumber');
    const amountInput = document.getElementById('amount');
    const networkProviderSelect = document.getElementById('networkProvider');

    // Show modal when provider select is clicked
    providerSelect.addEventListener('click', function() {
        providerModal.style.display = 'block';
    });

    // Close modal when clicking outside
    providerModal.querySelector('.modal-overlay').addEventListener('click', function() {
        providerModal.style.display = 'none';
    });

    // Handle provider selection
    providerOptions.forEach(option => {
        option.addEventListener('click', function() {
            const provider = this.getAttribute('data-provider');
            const logo = this.querySelector('img').src;
            
            // Update display
            providerNameDisplay.textContent = provider;
            providerLogoDisplay.innerHTML = `<img src="${logo}" alt="${provider}">`;
            
            // Update hidden select
            networkProviderSelect.value = provider;
            
            // Close modal
            providerModal.style.display = 'none';
            
            // Validate form
            validateForm();
        });
    });

    // Validate form inputs
    function validateForm() {
        const isProviderSelected = networkProviderSelect.value !== '';
        const isPhoneValid = phoneNumberInput.value.length === 11;
        const isAmountValid = parseFloat(amountInput.value.replace(/[^0-9.]/g, '')) > 0;
        
        continueButton.disabled = !(isProviderSelected && isPhoneValid && isAmountValid);
    }

    // Add validation for phone number
    phoneNumberInput.addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '').slice(0, 11);
        validateForm();
    });

    // Add validation for amount
    amountInput.addEventListener('input', function() {
        // Format as currency
        let value = this.value.replace(/[^0-9.]/g, '');
        if (value) {
            value = parseFloat(value).toFixed(2);
            this.value = '₦ ' + value;
        } else {
            this.value = '₦ 0.00';
        }
        validateForm();
    });

    // Close modal on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            providerModal.style.display = 'none';
        }
    });
});
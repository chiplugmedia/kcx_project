// Exchange rate
const EXCHANGE_RATE = 1120; // 1 CAD = 1120 NGN

// DOM Elements
const sendAmountInput = document.getElementById('sendAmount');
const receiveAmountDiv = document.getElementById('receiveAmount');
const sendMoneyBtn = document.getElementById('sendMoneyBtn');
const successModal = document.getElementById('successModal');

// Format number with commas
function formatNumber(number) {
    return number.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

// Calculate and update receive amount
function updateReceiveAmount() {
    const sendAmount = parseFloat(sendAmountInput.value) || 0;
    const receiveAmount = sendAmount * EXCHANGE_RATE;
    receiveAmountDiv.textContent = formatNumber(receiveAmount);
}

// Event listeners
sendAmountInput.addEventListener('input', updateReceiveAmount);

sendMoneyBtn.addEventListener('click', () => {
    successModal.style.display = 'flex';
});

// Close modal
function closeModal() {
    successModal.style.display = 'none';
}

// Close modal when clicking outside
successModal.addEventListener('click', (e) => {
    if (e.target === successModal) {
        closeModal();
    }
});

// Initialize
updateReceiveAmount();
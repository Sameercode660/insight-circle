// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const paymentForm = document.getElementById('payment-form');

    // Add submit event listener
    paymentForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form submission

        // Collect form values
        const name = document.getElementById('name').value.trim();
        const cardNumber = document.getElementById('card-number').value.trim();
        const expiryDate = document.getElementById('expiry-date').value;
        const cvv = document.getElementById('cvv').value.trim();
        const billingAddress = document.getElementById('billing-address').value.trim();

        // Validate fields
        if (!validateName(name)) {
            alert('Please enter a valid full name.');
            return;
        }

        if (!validateCardNumber(cardNumber)) {
            alert('Please enter a valid 16-digit card number.');
            return;
        }

        if (!expiryDate) {
            alert('Please select a valid expiry date.');
            return;
        }

        if (!validateCVV(cvv)) {
            alert('Please enter a valid 3-digit CVV.');
            return;
        }

        if (!billingAddress) {
            alert('Please enter your billing address.');
            return;
        }

        // If all validations pass, submit the form
        alert('Payment successful! Thank you for your payment.');
        paymentForm.reset(); // Clear the form
    });

    // Validation functions
    function validateName(name) {
        return name.length > 2; // Name should have at least 3 characters
    }

    function validateCardNumber(cardNumber) {
        return /^\d{16}$/.test(cardNumber); // Ensure 16-digit numeric input
    }

    function validateCVV(cvv) {
        return /^\d{3}$/.test(cvv); // Ensure 3-digit numeric input
    }
});

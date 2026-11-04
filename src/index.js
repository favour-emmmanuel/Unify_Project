document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const feedbackMessage = document.getElementById('feedback-message');

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const currency = document.getElementById('currency').value;

            feedbackMessage.textContent = `Thank you! Subscribed ${email} with preferred currency: ${currency}.`;
            feedbackMessage.style.color = 'green';
            signupForm.reset();
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('beta-form');
    const submitBtn = document.getElementById('submit-btn');
    const successMsg = document.getElementById('message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Button-Animation
        submitBtn.innerText = 'Wird gespeichert...';
        submitBtn.style.opacity = '0.7';

        // Fake-Delay für das "App-Gefühl"
        setTimeout(() => {
            form.classList.add('hidden');
            successMsg.classList.remove('hidden');
            console.log("Email gespeichert: " + document.getElementById('email').value);
        }, 1000);
    });
});
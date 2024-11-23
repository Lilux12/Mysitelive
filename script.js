document.addEventListener('DOMContentLoaded', () => {
    const adminBtn = document.getElementById('admin-btn');
    const adminModal = document.getElementById('admin-modal');
    const closeModal = document.getElementById('close-modal');
    const submitPassword = document.getElementById('submit-password');
    const adminPassword = document.getElementById('admin-password');

    adminBtn.addEventListener('click', () => {
        adminModal.classList.remove('hidden');
    });

    closeModal.addEventListener('click', () => {
        adminModal.classList.add('hidden');
    });

    submitPassword.addEventListener('click', () => {
        if (adminPassword.value === '12347') {
            window.location.href = 'admin.html';
        } else {
            alert('Неверный пароль!');
        }
    });
});

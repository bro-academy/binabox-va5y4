document.addEventListener('DOMContentLoaded', function () {
    function toUpperCaseInput(e) {
        const value = e.target.value.replace(/[^a-zA-Z]/g, '');
        e.target.value = value.toUpperCase();
    }
    const nameInput = document.getElementById('name');
    const lastNameInput = document.getElementById('last-name');
    if (nameInput) {
        nameInput.addEventListener('input', toUpperCaseInput);
    }
    if (lastNameInput) {
        lastNameInput.addEventListener('input', toUpperCaseInput);
    }
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('keypress', function (e) {
            const char = String.fromCharCode(e.which);
            // Allow only digits and one leading plus
            if (!/^[0-9]$/.test(char)) {
                if (char === '+' && phoneInput.selectionStart === 0 && !phoneInput.value.includes('+')) {
                    return;
                }
                e.preventDefault();
            }
        });
        phoneInput.addEventListener('paste', function (e) {
            const paste = (e.clipboardData || window.clipboardData).getData('text');
            if (!/^\+?[0-9]+$/.test(paste)) {
                e.preventDefault();
            }
        });
    }
});

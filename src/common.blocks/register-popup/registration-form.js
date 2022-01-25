export function parseRegisterForm() {
    const form = $('.js-register-form');
    const name = $('.register-popup__name input');

    function registerFormHandler() {
        alert(name.value);
    }

    form.on("submit", registerFormHandler);
    return false;
}
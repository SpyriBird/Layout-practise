import './common.blocks/datepicker/datepicker'
import './common.blocks/guest-number-control-element/guest-number-control-element'

function showSignInPopup() {
    $(".main__search-popup").attr('style', 'display: none');
    $(".main__register-popup").attr('style', 'display: none');
    $(".main__sign-in-popup").attr('style', 'display: block');
    return false;
};

function showRegisterPopup() {
    $(".main__search-popup").css("display", "none");
    $(".main__register-popup").attr('style', 'display: block');
    $(".main__sign-in-popup").attr('style', 'display: none');
    return false;
};

// function showUserName(form) {
//     $("form.header-form").css("display", "none");
//     $(".header-username-container").css('display', 'block').html(form.useremail);
//     return false;
// };

$(document).ready(function() {
    $(".sign-in-button").on("click", showSignInPopup);
    $(".register-button").on("click", showRegisterPopup);
    //$(".sign-in-popup__submit input").on("click", showUserName(this.form));
});
import './style.sass'
import * as $ from 'jquery'

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

$(document).ready(function() {
    $(".sign-in-button").on("click", showSignInPopup);
    $(".register-button").on("click", showRegisterPopup);
});

import './common.blocks/datepicker/datepicker'
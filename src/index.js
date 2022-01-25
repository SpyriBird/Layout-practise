import { datepicker } from './common.blocks/datepicker/datepicker'
import { priceSlider } from './common.blocks/price-slider/price-slider'
import { parseRegisterForm } from './common.blocks/register-popup/registration-form'
import { slideshow } from './common.blocks/landing-page-main/landing-page-main'
import './common.blocks/guest-number-control-element/guest-number-control-element'

function goTo(href) {
    window.location.href = href;
    return false;
};


$(document).ready(function() {
    $(".sign-in-button").on("click", () => goTo("sign-in.html"));
    $(".register-button").on("click", () => goTo("registration.html"));
    priceSlider();
    parseRegisterForm();
    datepicker();
    slideshow([$('.js-landing-page__background-1'), $('.js-landing-page__background-2'), $('.js-landing-page__background-3')]);
});
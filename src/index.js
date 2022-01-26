import { datepicker } from './common.blocks/datepicker/datepicker'
import { priceSlider } from './common.blocks/price-slider/price-slider'
import { parseRegisterForm } from './common.blocks/register-popup/registration-form'
import { slideshow } from './common.blocks/landing-page-main/landing-page-main'
import { Guests } from './common.blocks/guest-number-control-element/guest-number-control-element'
import { createAccordion } from './common.blocks/aside/aside'
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
    createAccordion();

    function createBackgroundArray() {
        let backgrounds = [];
        let count = 1;

        for (let next = $(`.js-main__background-${count}`); next.length; ++count, next = $(`.js-main__background-${count}`)) {
            backgrounds.push(next);
        }
        return backgrounds;
    }

    slideshow(createBackgroundArray());

    let guests = new Guests();

});
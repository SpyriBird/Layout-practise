import { datepicker } from './common.blocks/datepicker/datepicker'
import { priceSlider } from './common.blocks/price-slider/price-slider'
import { slideshow } from './common.blocks/landing-page-main/landing-page-main'
import { UnitedQuantityIQDropdown } from './common.blocks/guest-number-control-element/guest-number-control-element'
import { SeparateQuantitiesIQDropdown } from './common.blocks/room-facilities-control-element/room-facilities-control-element'
import { createAccordion } from './common.blocks/aside/aside'
import { carousel } from './common.blocks/carousel/carousel'

function goTo(href) {
    window.location.href = href;
    return false;
};

document.addEventListener("DOMContentLoaded", function() {
    $(".sign-in-button").on("click", () => goTo("sign-in.html"));
    $(".register-button").on("click", () => goTo("registration.html"));
    $('.js-to-search-result').on('click', () => { goTo("search-result.html"); return false });

    priceSlider();

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

    new UnitedQuantityIQDropdown(['adults', 'children', 'babies'], 'guest-number', ['гостей', 'гость', 'гостя']);
    new SeparateQuantitiesIQDropdown(['bedrooms', 'beds', 'bathrooms'], 'room-facilities', {
        bedrooms: ['кроватей', 'кровать', 'кровати'],
        beds: ['спален', 'спальня', 'спальни'],
        bathrooms: ['ванных комнат', 'ванная комната', 'ванные комнаты']
    });

    carousel();

});
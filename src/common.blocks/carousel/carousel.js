export function carousel() {


    let carousels = document.querySelectorAll('.js-carousel');

    let width = 271;
    for (let carousel of carousels) {
        let list = carousel.querySelector('ul');
        let listElems = carousel.querySelectorAll('li');

        let position = 0;

        carousel.querySelector('.js-carousel__left-scroll-button').onclick = function() {

            position += width;

            position = Math.min(position, 0)
            list.style.marginLeft = position + 'px';
        };

        carousel.querySelector('.js-carousel__right-scroll-button').onclick = function() {

            position -= width;

            position = Math.max(position, -width * (listElems.length - 1));
            list.style.marginLeft = position + 'px';
        };

    }
}
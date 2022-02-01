export function carousel() {


    let carousels = document.querySelectorAll('.js-carousel');

    let width = 271; // ширина картинки 
    for (let carousel of carousels) {
        let list = carousel.querySelector('ul');
        let listElems = carousel.querySelectorAll('li');

        let position = 0; // положение ленты прокрутки

        carousel.querySelector('.js-carousel__left-scroll-button').onclick = function() {
            // сдвиг влево
            position += width;
            // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
            position = Math.min(position, 0)
            list.style.marginLeft = position + 'px';
        };

        carousel.querySelector('.js-carousel__right-scroll-button').onclick = function() {
            // сдвиг вправо
            position -= width;
            // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
            position = Math.max(position, -width * (listElems.length - 1));
            list.style.marginLeft = position + 'px';
        };

    }
}
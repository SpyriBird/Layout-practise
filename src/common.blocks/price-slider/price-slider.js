import 'webpack-jquery-ui'

export function priceSlider() {
    $(".js-price-slider__bar").slider({
        range: true,
        min: 0,
        max: 15000,
        values: [5000, 10000],
        slide: function(event, ui) {
            $(".price-slider__input").val(ui.values[0] + "₽ - " + ui.values[1] + "₽");
        }
    });
    $(".price-slider__input").val($(".price-slider__bar").slider("values", 0) +
        "₽ - " + $(".price-slider__bar").slider("values", 1) + "₽");
}
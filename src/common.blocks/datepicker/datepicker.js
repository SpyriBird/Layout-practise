import 'webpack-jquery-ui'
//import 'jquery-ui-multidatespicker'

(function(factory) {
    "use strict";

    if (typeof define === "function" && define.amd) {

        // AMD. Register as an anonymous module.
        define(["../widgets/datepicker"], factory);
    } else {

        // Browser globals
        factory($.datepicker);
    }
})
(function(datepicker) {
    "use strict";

    datepicker.regional.ru = {
        closeText: "Применить",
        prevText: "&#x3C;Пред",
        nextText: "След&#x3E;",
        currentText: "Очистить",
        monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
            "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
        ],
        monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн",
            "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"
        ],
        dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
        dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
        dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        weekHeader: "Нед",
        dateFormat: "dd.mm.yy",
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ""
    };
    datepicker.setDefaults(datepicker.regional.ru);

    return datepicker.regional.ru;

});

var dateToday = new Date();
var arrDate;

$(".has-datepicker").datepicker({
    showOn: "focus",
    showOtherMonths: true,
    selectOtherMonths: true,
    nextText: "Later",
    showButtonPanel: true,
    onSelect: function(dateText) {
        arrDate = this.value;
    },
    minDate: dateToday,
});
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["common_blocks_logo_logo_pug-common_blocks_social-network-links_social-network-links_pug-index-864e34"],{

/***/ "./common.blocks/logo/logo.pug":
/*!*************************************!*\
  !*** ./common.blocks/logo/logo.pug ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var pug = __webpack_require__(/*! !../../../node_modules/pug-runtime/index.js */ \"../node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv class=\\\"logo\\\"\\u003E\\u003Cimg\" + (\" class=\\\"logo__circle\\\"\"+pug.attr(\"src\", __webpack_require__(/*! ./Group.svg */ \"./common.blocks/logo/Group.svg\"), true, true)+\" alt=\\\"logo\\\" height=\\\"40\\\" width=\\\"40\\\"\") + \"\\u003E\\u003Cimg\" + (\" class=\\\"logo__text\\\"\"+pug.attr(\"src\", __webpack_require__(/*! ./TOXIN.svg */ \"./common.blocks/logo/TOXIN.svg\"), true, true)+\" alt=\\\"logo\\\" height=\\\"13\\\" width=\\\"53\\\"\") + \"\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./common.blocks/logo/logo.pug?");

/***/ }),

/***/ "./common.blocks/social-network-links/social-network-links.pug":
/*!*********************************************************************!*\
  !*** ./common.blocks/social-network-links/social-network-links.pug ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var pug = __webpack_require__(/*! !../../../node_modules/pug-runtime/index.js */ \"../node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv class=\\\"social-network-links-container\\\"\\u003E  \\u003Ca class=\\\"social-network-link social-network__twitter\\\" href=\\\"\\u002Fmock-address\\u002Fchange-me\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\"\\u003E\\u003Cimg\" + (pug.attr(\"src\", __webpack_require__(/*! ./footer-twitter-link.png */ \"./common.blocks/social-network-links/footer-twitter-link.png\"), true, true)+\" alt=\\\"twitter link\\\"\") + \"\\u003E\\u003C\\u002Fa\\u003E\\u003Ca class=\\\"social-network-link social-network__facebook\\\" href=\\\"\\u002Fmock-address\\u002Fchange-me\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\"\\u003E\\u003Cimg\" + (pug.attr(\"src\", __webpack_require__(/*! ./footer-facebook-link.png */ \"./common.blocks/social-network-links/footer-facebook-link.png\"), true, true)+\" alt=\\\"facebook link\\\"\") + \"\\u003E\\u003C\\u002Fa\\u003E\\u003Ca class=\\\"social-network-link social-network__instagram\\\" href=\\\"\\u002Fmock-address\\u002Fchange-me\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\"\\u003E\\u003Cimg\" + (pug.attr(\"src\", __webpack_require__(/*! ./footer-instagram-link.png */ \"./common.blocks/social-network-links/footer-instagram-link.png\"), true, true)+\" alt=\\\"instagram link\\\"\") + \"\\u003E\\u003C\\u002Fa\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./common.blocks/social-network-links/social-network-links.pug?");

/***/ }),

/***/ "./common.blocks/aside/aside.js":
/*!**************************************!*\
  !*** ./common.blocks/aside/aside.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createAccordion\": () => (/* binding */ createAccordion)\n/* harmony export */ });\n/* harmony import */ var webpack_jquery_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack-jquery-ui */ \"../node_modules/webpack-jquery-ui/index.js\");\n/* harmony import */ var webpack_jquery_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack_jquery_ui__WEBPACK_IMPORTED_MODULE_0__);\n/* provided dependency */ var $ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n\r\n\r\nfunction createAccordion() {\r\n    $('.aside-accordion-container').accordion({\r\n        collapsible: true,\r\n        active: false\r\n    })\r\n}\n\n//# sourceURL=webpack:///./common.blocks/aside/aside.js?");

/***/ }),

/***/ "./common.blocks/carousel/carousel.js":
/*!********************************************!*\
  !*** ./common.blocks/carousel/carousel.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"carousel\": () => (/* binding */ carousel)\n/* harmony export */ });\nfunction carousel() {\r\n\r\n\r\n    let carousels = document.querySelectorAll('.js-carousel');\r\n\r\n    let width = 271;\r\n    for (let carousel of carousels) {\r\n        let list = carousel.querySelector('ul');\r\n        let listElems = carousel.querySelectorAll('li');\r\n\r\n        let position = 0;\r\n\r\n        carousel.querySelector('.js-carousel__left-scroll-button').onclick = function() {\r\n\r\n            position += width;\r\n\r\n            position = Math.min(position, 0)\r\n            list.style.marginLeft = position + 'px';\r\n        };\r\n\r\n        carousel.querySelector('.js-carousel__right-scroll-button').onclick = function() {\r\n\r\n            position -= width;\r\n\r\n            position = Math.max(position, -width * (listElems.length - 1));\r\n            list.style.marginLeft = position + 'px';\r\n        };\r\n\r\n    }\r\n}\n\n//# sourceURL=webpack:///./common.blocks/carousel/carousel.js?");

/***/ }),

/***/ "./common.blocks/datepicker/datepicker.js":
/*!************************************************!*\
  !*** ./common.blocks/datepicker/datepicker.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"datepicker\": () => (/* binding */ datepicker)\n/* harmony export */ });\n/* harmony import */ var webpack_jquery_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack-jquery-ui */ \"../node_modules/webpack-jquery-ui/index.js\");\n/* harmony import */ var webpack_jquery_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack_jquery_ui__WEBPACK_IMPORTED_MODULE_0__);\n/* provided dependency */ var $ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n\r\n\r\n(function(factory) {\r\n    \"use strict\";\r\n\r\n    if (typeof define === \"function\" && __webpack_require__.amdO) {\r\n\r\n        // AMD. Register as an anonymous module.\r\n        define([\"../widgets/datepicker\"], factory);\r\n    } else {\r\n\r\n        // Browser globals\r\n        factory($.datepicker);\r\n    }\r\n})\r\n(function(datepicker) {\r\n    \"use strict\";\r\n\r\n    datepicker.regional.ru = {\r\n        closeText: \"Применить\",\r\n        prevText: \"&#x3C;Пред\",\r\n        nextText: \"След&#x3E;\",\r\n        currentText: \"Очистить\",\r\n        monthNames: [\"Январь\", \"Февраль\", \"Март\", \"Апрель\", \"Май\", \"Июнь\",\r\n            \"Июль\", \"Август\", \"Сентябрь\", \"Октябрь\", \"Ноябрь\", \"Декабрь\"\r\n        ],\r\n        monthNamesShort: [\"Янв\", \"Фев\", \"Мар\", \"Апр\", \"Май\", \"Июн\",\r\n            \"Июл\", \"Авг\", \"Сен\", \"Окт\", \"Ноя\", \"Дек\"\r\n        ],\r\n        dayNames: [\"воскресенье\", \"понедельник\", \"вторник\", \"среда\", \"четверг\", \"пятница\", \"суббота\"],\r\n        dayNamesShort: [\"вск\", \"пнд\", \"втр\", \"срд\", \"чтв\", \"птн\", \"сбт\"],\r\n        dayNamesMin: [\"Вс\", \"Пн\", \"Вт\", \"Ср\", \"Чт\", \"Пт\", \"Сб\"],\r\n        weekHeader: \"Нед\",\r\n        dateFormat: \"dd.mm.yy\",\r\n        firstDay: 1,\r\n        isRTL: false,\r\n        showMonthAfterYear: false,\r\n        yearSuffix: \"\"\r\n    };\r\n    datepicker.setDefaults(datepicker.regional.ru);\r\n\r\n    return datepicker.regional.ru;\r\n\r\n});\r\nfunction datepicker() {\r\n    $(\".has-datepicker\").datepicker({\r\n        showOn: \"focus\",\r\n        showOtherMonths: true,\r\n        selectOtherMonths: true,\r\n        nextText: \"Later\",\r\n        showButtonPanel: true,\r\n        onSelect: function(dateText) {\r\n            let arrDate = this.value;\r\n        },\r\n        minDate: new Date(),\r\n    });\r\n}\n\n//# sourceURL=webpack:///./common.blocks/datepicker/datepicker.js?");

/***/ }),

/***/ "./common.blocks/guest-number-control-element/guest-number-control-element.js":
/*!************************************************************************************!*\
  !*** ./common.blocks/guest-number-control-element/guest-number-control-element.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UnitedQuantityIQDropdown\": () => (/* binding */ UnitedQuantityIQDropdown)\n/* harmony export */ });\n/* harmony import */ var _item_quantity_dropdown_item_quantity_dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item-quantity-dropdown/item-quantity-dropdown */ \"./common.blocks/item-quantity-dropdown/item-quantity-dropdown.js\");\n\r\n\r\nclass UnitedQuantityIQDropdown extends _item_quantity_dropdown_item_quantity_dropdown__WEBPACK_IMPORTED_MODULE_0__.IQDropdown {\r\n\r\n    get currentValue() {\r\n\r\n        let quantity = this.options.reduce((sum, current) => sum + this['_' + current], 0);\r\n        let result = String(quantity);\r\n\r\n        result += ' ';\r\n        result += this.wordForms[this.validateWordForm(quantity)];\r\n\r\n        return result;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./common.blocks/guest-number-control-element/guest-number-control-element.js?");

/***/ }),

/***/ "./common.blocks/item-quantity-dropdown/item-quantity-dropdown.js":
/*!************************************************************************!*\
  !*** ./common.blocks/item-quantity-dropdown/item-quantity-dropdown.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"IQDropdown\": () => (/* binding */ IQDropdown)\n/* harmony export */ });\n/* provided dependency */ var $ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\nclass IQDropdown {\r\n\r\n    // аргументами в конструктор передавать:\r\n    // 1 - массив с опциями\r\n    // 2 - имя компонента, использующееся в классах\r\n    // 3 - массив с формами слов с разными числительными: [ \r\n    //     с числительными, кончающимися на 0 и цифры больше 5, \r\n    //     единственное число, \r\n    //     с числительными, кончающимися на 2, 3 и 4\r\n    // ]\r\n    constructor(arr, comp, words) {\r\n\r\n        this.comp = comp;\r\n        this.component = \".js-\" + comp;\r\n\r\n        this.options = arr;\r\n        this.input = $(this.component + '-control-element');\r\n\r\n        this.wordForms = words;\r\n\r\n        for (let opt of this.options) {\r\n\r\n            this['_' + opt] = 0;\r\n\r\n            this[opt + 'CurrentNumber'] = $(this.component + '__' + opt + '-current-number');\r\n            this[opt + 'IncreaseButton'] = $(this.component + '__' + opt + '-increase-button');\r\n            this[opt + 'DecreaseButton'] = $(this.component + '__' + opt + '-decrease-button');\r\n        }\r\n\r\n        this.dropdown = $(this.component + '-dropdown-container');\r\n        this.clearButton = $(this.component + '__clear-button');\r\n        this.applyButton = $(this.component + '__apply-button');\r\n\r\n        this.addEventHandlers();\r\n    }\r\n\r\n    setOptionValue(value, opt) {\r\n\r\n        if (value < 0) return;\r\n\r\n        if (value === 0) this.inactivateDecreaseButton(opt);\r\n        if (value === 1) this.activateDecreaseButton(opt);\r\n\r\n        this['_' + opt] = value;\r\n        this[opt + 'CurrentNumber'].html(this['_' + opt]);\r\n\r\n        this.input.val(this.currentValue);\r\n    }\r\n\r\n    activateDecreaseButton(opt) {\r\n\r\n        this[opt + 'DecreaseButton'].removeClass('i-q-dropdown-button__inactive')\r\n            .addClass('i-q-dropdown-button__active');\r\n    }\r\n\r\n    inactivateDecreaseButton(opt) {\r\n\r\n        this[opt + 'DecreaseButton'].removeClass('i-q-dropdown-button__active')\r\n            .addClass('i-q-dropdown-button__inactive');\r\n    }\r\n\r\n    clearQuantities() {\r\n\r\n        for (let opt of this.options) {\r\n            this.setOptionValue(0, opt);\r\n        }\r\n    }\r\n\r\n    addEventHandlers() {\r\n        for (let opt of this.options) {\r\n\r\n            this[opt + 'IncreaseButton'].on('click', () => this.setOptionValue(1 + this['_' + opt], opt));\r\n            this[opt + 'DecreaseButton'].on('click', () => this.setOptionValue(this['_' + opt] - 1, opt));\r\n        }\r\n\r\n        this.input.on('click', () => this.dropdown.removeAttr('hidden'));\r\n\r\n        this.applyButton.on('click', () => this.dropdown.attr('hidden', 'hidden'));\r\n        this.clearButton.on('click', () => this.clearQuantities());\r\n    }\r\n\r\n    validateWordForm(num) {\r\n\r\n        if (num > 10 && num < 20) {\r\n            return 0;\r\n        }\r\n\r\n        switch (num % 10) {\r\n            case 1:\r\n                return 1;\r\n            case 2:\r\n            case 3:\r\n            case 4:\r\n                return 2;\r\n            default:\r\n                return 0;\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./common.blocks/item-quantity-dropdown/item-quantity-dropdown.js?");

/***/ }),

/***/ "./common.blocks/landing-page-main/landing-page-main.js":
/*!**************************************************************!*\
  !*** ./common.blocks/landing-page-main/landing-page-main.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"slideshow\": () => (/* binding */ slideshow)\n/* harmony export */ });\nfunction slideshow(show) {\r\n\r\n    if (show.length === 0) return;\r\n    let count = 1;\r\n\r\n    setInterval(() => {\r\n\r\n        let i = count % show.length;\r\n        let prev = ((i - 1 + show.length) % show.length);\r\n\r\n        show[prev].fadeOut(200, () => show[i].fadeIn(200));\r\n\r\n        ++count;\r\n\r\n    }, 8000);\r\n}\n\n//# sourceURL=webpack:///./common.blocks/landing-page-main/landing-page-main.js?");

/***/ }),

/***/ "./common.blocks/price-slider/price-slider.js":
/*!****************************************************!*\
  !*** ./common.blocks/price-slider/price-slider.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"priceSlider\": () => (/* binding */ priceSlider)\n/* harmony export */ });\n/* harmony import */ var webpack_jquery_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack-jquery-ui */ \"../node_modules/webpack-jquery-ui/index.js\");\n/* harmony import */ var webpack_jquery_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack_jquery_ui__WEBPACK_IMPORTED_MODULE_0__);\n/* provided dependency */ var $ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n\r\n\r\nfunction priceSlider() {\r\n    $(\".js-price-slider__bar\").slider({\r\n        range: true,\r\n        min: 0,\r\n        max: 15000,\r\n        values: [5000, 10000],\r\n        slide: function(event, ui) {\r\n            $(\".price-slider__input\").val(ui.values[0] + \"₽ - \" + ui.values[1] + \"₽\");\r\n        }\r\n    });\r\n    $(\".price-slider__input\").val($(\".price-slider__bar\").slider(\"values\", 0) +\r\n        \"₽ - \" + $(\".price-slider__bar\").slider(\"values\", 1) + \"₽\");\r\n}\n\n//# sourceURL=webpack:///./common.blocks/price-slider/price-slider.js?");

/***/ }),

/***/ "./common.blocks/room-facilities-control-element/room-facilities-control-element.js":
/*!******************************************************************************************!*\
  !*** ./common.blocks/room-facilities-control-element/room-facilities-control-element.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SeparateQuantitiesIQDropdown\": () => (/* binding */ SeparateQuantitiesIQDropdown)\n/* harmony export */ });\n/* harmony import */ var _item_quantity_dropdown_item_quantity_dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../item-quantity-dropdown/item-quantity-dropdown */ \"./common.blocks/item-quantity-dropdown/item-quantity-dropdown.js\");\n\r\n\r\nclass SeparateQuantitiesIQDropdown extends _item_quantity_dropdown_item_quantity_dropdown__WEBPACK_IMPORTED_MODULE_0__.IQDropdown {\r\n\r\n    get currentValue() {\r\n\r\n        let result = [];\r\n\r\n        for (let opt of this.options) {\r\n\r\n            if (this['_' + opt] === 0) continue;\r\n\r\n            let word = String(this['_' + opt]);\r\n            word += ' ';\r\n            word += this.wordForms[opt][this.validateWordForm(this['_' + opt])];\r\n\r\n            result.push(word);\r\n        }\r\n        return result.join(', ');\r\n    }\r\n}\n\n//# sourceURL=webpack:///./common.blocks/room-facilities-control-element/room-facilities-control-element.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_blocks_datepicker_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.blocks/datepicker/datepicker */ \"./common.blocks/datepicker/datepicker.js\");\n/* harmony import */ var _common_blocks_price_slider_price_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common.blocks/price-slider/price-slider */ \"./common.blocks/price-slider/price-slider.js\");\n/* harmony import */ var _common_blocks_landing_page_main_landing_page_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common.blocks/landing-page-main/landing-page-main */ \"./common.blocks/landing-page-main/landing-page-main.js\");\n/* harmony import */ var _common_blocks_guest_number_control_element_guest_number_control_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common.blocks/guest-number-control-element/guest-number-control-element */ \"./common.blocks/guest-number-control-element/guest-number-control-element.js\");\n/* harmony import */ var _common_blocks_room_facilities_control_element_room_facilities_control_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common.blocks/room-facilities-control-element/room-facilities-control-element */ \"./common.blocks/room-facilities-control-element/room-facilities-control-element.js\");\n/* harmony import */ var _common_blocks_aside_aside__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common.blocks/aside/aside */ \"./common.blocks/aside/aside.js\");\n/* harmony import */ var _common_blocks_carousel_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common.blocks/carousel/carousel */ \"./common.blocks/carousel/carousel.js\");\n/* provided dependency */ var $ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction goTo(href) {\r\n    window.location.href = href;\r\n    return false;\r\n};\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function() {\r\n    $(\".sign-in-button\").on(\"click\", () => goTo(\"sign-in.html\"));\r\n    $(\".register-button\").on(\"click\", () => goTo(\"registration.html\"));\r\n    $('.js-to-search-result').on('click', () => { goTo(\"search-result.html\"); return false });\r\n\r\n    (0,_common_blocks_price_slider_price_slider__WEBPACK_IMPORTED_MODULE_1__.priceSlider)();\r\n\r\n    (0,_common_blocks_datepicker_datepicker__WEBPACK_IMPORTED_MODULE_0__.datepicker)();\r\n    (0,_common_blocks_aside_aside__WEBPACK_IMPORTED_MODULE_5__.createAccordion)();\r\n\r\n    function createBackgroundArray() {\r\n        let backgrounds = [];\r\n        let count = 1;\r\n\r\n        for (let next = $(`.js-main__background-${count}`); next.length; ++count, next = $(`.js-main__background-${count}`)) {\r\n            backgrounds.push(next);\r\n        }\r\n        return backgrounds;\r\n    }\r\n\r\n    (0,_common_blocks_landing_page_main_landing_page_main__WEBPACK_IMPORTED_MODULE_2__.slideshow)(createBackgroundArray());\r\n\r\n    new _common_blocks_guest_number_control_element_guest_number_control_element__WEBPACK_IMPORTED_MODULE_3__.UnitedQuantityIQDropdown(['adults', 'children', 'babies'], 'guest-number', ['гостей', 'гость', 'гостя']);\r\n    new _common_blocks_room_facilities_control_element_room_facilities_control_element__WEBPACK_IMPORTED_MODULE_4__.SeparateQuantitiesIQDropdown(['bedrooms', 'beds', 'bathrooms'], 'room-facilities', {\r\n        bedrooms: ['кроватей', 'кровать', 'кровати'],\r\n        beds: ['спален', 'спальня', 'спальни'],\r\n        bathrooms: ['ванных комнат', 'ванная комната', 'ванные комнаты']\r\n    });\r\n\r\n    (0,_common_blocks_carousel_carousel__WEBPACK_IMPORTED_MODULE_6__.carousel)();\r\n\r\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./common.blocks/logo/Group.svg":
/*!**************************************!*\
  !*** ./common.blocks/logo/Group.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"static/44cfdc12f6fd641ca0f8.svg\";\n\n//# sourceURL=webpack:///./common.blocks/logo/Group.svg?");

/***/ }),

/***/ "./common.blocks/logo/TOXIN.svg":
/*!**************************************!*\
  !*** ./common.blocks/logo/TOXIN.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"static/8cf96a244641e2f88684.svg\";\n\n//# sourceURL=webpack:///./common.blocks/logo/TOXIN.svg?");

/***/ }),

/***/ "./common.blocks/social-network-links/footer-facebook-link.png":
/*!*********************************************************************!*\
  !*** ./common.blocks/social-network-links/footer-facebook-link.png ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"static/b45f88fcaa9388b9aac4.png\";\n\n//# sourceURL=webpack:///./common.blocks/social-network-links/footer-facebook-link.png?");

/***/ }),

/***/ "./common.blocks/social-network-links/footer-instagram-link.png":
/*!**********************************************************************!*\
  !*** ./common.blocks/social-network-links/footer-instagram-link.png ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"static/a96289ddacce63f63703.png\";\n\n//# sourceURL=webpack:///./common.blocks/social-network-links/footer-instagram-link.png?");

/***/ }),

/***/ "./common.blocks/social-network-links/footer-twitter-link.png":
/*!********************************************************************!*\
  !*** ./common.blocks/social-network-links/footer-twitter-link.png ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"static/6bf54387ab7f658a1db0.png\";\n\n//# sourceURL=webpack:///./common.blocks/social-network-links/footer-twitter-link.png?");

/***/ }),

/***/ "./favicon.png":
/*!*********************!*\
  !*** ./favicon.png ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"static/7b7a35ed0d0e6ff6647c.png\";\n\n//# sourceURL=webpack:///./favicon.png?");

/***/ }),

/***/ "?16ca":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///fs_(ignored)?");

/***/ })

}]);
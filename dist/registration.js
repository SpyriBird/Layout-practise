/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./common.blocks/sex-input-radio/sex-input-radio.pug":
/*!***********************************************************!*\
  !*** ./common.blocks/sex-input-radio/sex-input-radio.pug ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var pug = __webpack_require__(/*! !../../../node_modules/pug-runtime/index.js */ \"../node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Clabel class=\\\"radio-label\\\"\\u003E \\u003Cinput class=\\\"input-radio\\\" type=\\\"radio\\\" name=\\\"sex\\\" value=\\\"male\\\" checked\\u003EМужчина\\u003C\\u002Flabel\\u003E\\u003Clabel class=\\\"radio-label\\\"\\u003E \\u003Cinput class=\\\"input-radio\\\" type=\\\"radio\\\" name=\\\"sex\\\" value=\\\"female\\\"\\u003EЖенщина\\u003C\\u002Flabel\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./common.blocks/sex-input-radio/sex-input-radio.pug?");

/***/ }),

/***/ "./registration.pug":
/*!**************************!*\
  !*** ./registration.pug ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var pug = __webpack_require__(/*! !../node_modules/pug-runtime/index.js */ \"../node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003C!DOCTYPE html\\u003E\\u003Chtml lang=\\\"ru\\\"\\u003E\\u003Chead\\u003E\\u003Cmeta charset=\\\"UTF-8\\\"\\u003E\\u003Cmeta name=\\\"description\\\" content=\\\"some description\\\"\\u003E\\u003Cmeta name=\\\"keywords\\\" content=\\\"some keywords\\\"\\u003E\\u003Cmeta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\"\\u003E\\u003Cmeta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\"\\u003E\\u003Clink\" + (\" rel=\\\"icon\\\" type=\\\"image\\u002Fpng\\\"\"+pug.attr(\"href\", __webpack_require__(/*! ./favicon.png */ \"./favicon.png\"), true, true)) + \"\\u003E\\u003Clink rel=\\\"stylesheet\\\" type=\\\"text\\u002Fcss\\\" href=\\\"style.css\\\"\\u003E\\u003Ctitle\\u003EToxin\\u003C\\u002Ftitle\\u003E\\u003C\\u002Fhead\\u003E\\u003Cbody\\u003E \\u003Cdiv class=\\\"body-content-wrapper\\\"\\u003E\\u003Cdiv class=\\\"everything-except-footer\\\"\\u003E\";\npug_mixins[\"button\"] = pug_interp = function(option){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\nvar btnClasses = \"btn\"\nbtnClasses += option.isWhite ? \" btn_theme_white\" : \"\" \nbtnClasses += option.isBlue ? \" btn_theme_blue\" : \"\"   \nbtnClasses += option.isNarrow ? \" btn_theme_narrow\" : \"\"   \nbtnClasses += option.isWide ? \" btn_theme_wide\" : \"\"   \npug_html = pug_html + \"\\u003Cdiv\" + (pug.attr(\"class\", pug.classes([option.class], [true]), false, true)) + \"\\u003E\";\nif (option.isWhite) {\n}\npug_html = pug_html + \"\\u003Cdiv class=\\\"btn-border-wrap\\\"\\u003E\\u003Cbutton\" + (pug.attr(\"class\", pug.classes([btnClasses], [true]), false, true)+\" type=\\\"button\\\"\") + \"\\u003E\" + (pug.escape(null == (pug_interp = option.btnText) ? \"\" : pug_interp)) + \"\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";\n};\npug_mixins[\"link\"] = pug_interp = function(option){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\nvar linkClasses = \"link\"\noption.href += option.href ? \"\" : \"/mock-address/change-me\"\nlinkClasses += option.hasArrow ? \" link_theme_arrow\" : \"\" \nlinkClasses += option.isBlack ? \" link_theme_black\" : \"\"\nlinkClasses += option.usual ? \" link_theme_usual\" : \"\"\npug_html = pug_html + (\"\\u003Cdiv\" + (pug.attr(\"class\", pug.classes([option.class], [true]), false, true)) + \"\\u003E\\u003Ca\" + (pug.attr(\"class\", pug.classes([linkClasses], [true]), false, true)+pug.attr(\"href\", option.href, true, true)) + \"\\u003E\" + (pug.escape(null == (pug_interp = option.linkText) ? \"\" : pug_interp)));\nif (option.hasArrow) {\npug_html = pug_html + \"\\u003Cdiv class=\\\"arrow-container\\\"\\u003E\\u003Cdiv class=\\\"link__arrow\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";\n}\npug_html = pug_html + \"\\u003C\\u002Fa\\u003E\\u003C\\u002Fdiv\\u003E\";\n};\npug_html = pug_html + \"\\u003Cheader class=\\\"header\\\"\\u003E\\u003Ca class=\\\"header-logo\\\" href=\\\"index.html\\\"\\u003E\" + (null == (pug_interp = (__webpack_require__(/*! ./common.blocks/logo/logo.pug */ \"./common.blocks/logo/logo.pug\").call)(this, locals)) ? \"\" : pug_interp) + \"\\u003C\\u002Fa\\u003E\\u003Cdiv class=\\\"header-nav-and-form-container\\\"\\u003E\\u003Cnav class=\\\"header-nav\\\"\\u003E\";\npug_mixins[\"link\"]({class: 'header-link', linkText: \"О нас\", usual: true});\npug_mixins[\"link\"]({class: 'header-link', linkText: \"Услуги\", usual: true, hasArrow: true});\npug_mixins[\"link\"]({class: 'header-link', linkText: \"Вакансии\", usual: true});\npug_mixins[\"link\"]({class: 'header-link', linkText: \"Новости\", usual: true});\npug_mixins[\"link\"]({class: 'header-link',linkText: \"Соглашения\" , usual: true, hasArrow: true});\npug_html = pug_html + \"\\u003C\\u002Fnav\\u003E\\u003Cform class=\\\"header-form\\\"\\u003E\\u003Cdiv class=\\\"header-btn\\\"\\u003E\";\npug_mixins[\"button\"]({class: 'sign-in-button', btnText: \"войти\", isWhite: true, isNarrow: true });\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"header-btn\\\"\\u003E\";\npug_mixins[\"button\"]({class: 'register-button', btnText: \"зарегистрироваться\", isBlue: true, isNarrow: true});\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fform\\u003E\\u003Cdiv class=\\\"header-username-container\\\" hidden\\u003E\\u003Cusername\\u003E\\u003C\\u002Fusername\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fheader\\u003E\\u003Cmain class=\\\"registration-page-main\\\"\\u003E\\u003Cimg\" + (\" class=\\\"js-main__background-1 registration-page__background\\\"\"+pug.attr(\"src\", __webpack_require__(/*! ./common.blocks/registration-page-main/registration-page-background-1.jpg */ \"./common.blocks/registration-page-main/registration-page-background-1.jpg\"), true, true)+\" alt=\\\"\\\"\") + \"\\u003E\\u003Cimg\" + (\" class=\\\"js-main__background-2 registration-page__background\\\"\"+pug.attr(\"src\", __webpack_require__(/*! ./common.blocks/registration-page-main/registration-page-background-2.jpg */ \"./common.blocks/registration-page-main/registration-page-background-2.jpg\"), true, true)+pug.attr(\"hidden\", true, true, true)+\" alt=\\\"\\\"\") + \"\\u003E\\u003Cdiv class=\\\"main__register-popup\\\"\\u003E\";\npug_mixins[\"input\"] = pug_interp = function(option){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\nif (option.type === 'email-and-submit') {\npug_html = pug_html + \"\\u003Cdiv class=\\\"input-email-and-submit-container\\\"\\u003E\\u003Cinput class=\\\"text_style_usual-black input-email_submit\\\" type=\\\"email\\\" name=\\\"\\\" placeholder=\\\"Email\\\" required value=\\\"\\\"\\u003E\\u003Cinput class=\\\"input-submit_email\\\" type=\\\"submit\\\" value=\\\"\\\"\\u003E\\u003C\\u002Fdiv\\u003E\";\n}\nelse\nif (option.type === 'date') {\npug_html = pug_html + \"\\u003Cinput class=\\\"input_type_date has-datepicker\\\" type=\\\"text\\\" required placeholder=\\\"ДД.ММ.ГГГГ\\\"\\u003E\";\n}\nelse\nif (option.type === 'submit') {\npug_html = pug_html + \"\\u003Cinput\" + (pug.attr(\"class\", pug.classes([option.class,\"input-submit\"], [true,false]), false, true)+\" type=\\\"submit\\\"\"+pug.attr(\"value\", option.text, true, true)) + \"\\u003E\";\n}\nelse\nif (option.type === 'email') {\npug_html = pug_html + \"\\u003Cinput class=\\\"text_style_usual-black input-email\\\" type=\\\"email\\\" name=\\\"\\\" placeholder=\\\"Email\\\" required value=\\\"\\\"\\u003E\";\n}\nelse\nif (option.type === 'password') {\npug_html = pug_html + \"\\u003Cinput class=\\\"text_style_usual-black input-password\\\" type=\\\"password\\\" name=\\\"\\\" placeholder=\\\"Password\\\" required value=\\\"\\\"\\u003E\";\n}\nelse\nif (option.type === 'text') {\npug_html = pug_html + \"\\u003Cinput\" + (\" class=\\\"input-text\\\"\"+\" type=\\\"text\\\"\"+pug.attr(\"placeholder\", option.text, true, true)+pug.attr(\"required\", true, true, true)+\" value=\\\"\\\"\") + \"\\u003E\";\n}\nelse\nif (option.type === 'toggle') {\npug_html = pug_html + \"\\u003Cdiv class=\\\"toggle-container\\\"\\u003E\\u003Clabel class=\\\"toggle-label\\\"\\u003E\\u003Cinput class=\\\"input-toggle\\\" type=\\\"checkbox\\\"\\u003E\" + (pug.escape(null == (pug_interp = option.text) ? \"\" : pug_interp)) + \"\\u003C\\u002Flabel\\u003E\\u003C\\u002Fdiv\\u003E\";\n}\n};\npug_mixins[\"button\"] = pug_interp = function(option){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\nvar btnClasses = \"btn\"\nbtnClasses += option.isWhite ? \" btn_theme_white\" : \"\" \nbtnClasses += option.isBlue ? \" btn_theme_blue\" : \"\"   \nbtnClasses += option.isNarrow ? \" btn_theme_narrow\" : \"\"   \nbtnClasses += option.isWide ? \" btn_theme_wide\" : \"\"   \npug_html = pug_html + \"\\u003Cdiv\" + (pug.attr(\"class\", pug.classes([option.class], [true]), false, true)) + \"\\u003E\";\nif (option.isWhite) {\n}\npug_html = pug_html + \"\\u003Cdiv class=\\\"btn-border-wrap\\\"\\u003E\\u003Cbutton\" + (pug.attr(\"class\", pug.classes([btnClasses], [true]), false, true)+\" type=\\\"button\\\"\") + \"\\u003E\" + (pug.escape(null == (pug_interp = option.btnText) ? \"\" : pug_interp)) + \"\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";\n};\npug_html = pug_html + \"\\u003Cform class=\\\"register-popup-container js-register-form\\\" name=\\\"registration\\\"\\u003E\\u003Ch1 class=\\\"register-popup__heading text_style_large-bold\\\"\\u003EРегистрация аккаунта\\u003C\\u002Fh1\\u003E\\u003Cdiv class=\\\"register-popup__name\\\"\\u003E\";\npug_mixins[\"input\"]({type: 'text', text: 'Имя'});\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"register-popup__surname\\\"\\u003E\";\npug_mixins[\"input\"]({type: 'text', text: 'Фамилия'});\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"register-popup__sex\\\"\\u003E\" + (null == (pug_interp = (__webpack_require__(/*! ./common.blocks/sex-input-radio/sex-input-radio.pug */ \"./common.blocks/sex-input-radio/sex-input-radio.pug\").call)(this, locals)) ? \"\" : pug_interp) + \"\\u003C\\u002Fdiv\\u003E\\u003Ch2 class=\\\"register-popup__field-heading text_style_small-bold register-popup__field-heading\\\"\\u003Eдата рождения\\u003C\\u002Fh2\\u003E\\u003Cdiv class=\\\"register-popup__birth-date\\\"\\u003E\";\npug_mixins[\"input\"]({type: 'text', text: 'ДД.ММ.ГГГГ'});\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\\u003Ch2 class=\\\"register-popup__field-heading text_style_small-bold\\\"\\u003Eданные для входа в сервис\\u003C\\u002Fh2\\u003E\\u003Cdiv class=\\\"register-popup__email\\\"\\u003E\";\npug_mixins[\"input\"]({type: 'email'});\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"register-popup__password\\\"\\u003E\";\npug_mixins[\"input\"]({type: 'password'});\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"register-popup__special-offer\\\"\\u003E\";\npug_mixins[\"input\"]({type: 'toggle', text: 'Получать спецпредложения'});\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"register-popup__submit\\\"\\u003E\";\npug_mixins[\"input\"]({type: 'submit', text: 'зарегистрироваться'});\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"register-popup-sign-in-container\\\"\\u003E\\u003Cp class=\\\"text_style_usual register-popup__sign-in-par\\\"\\u003EУже есть аккаунт на Toxin\\u003C\\u002Fp\\u003E\\u003Cdiv class=\\\"register-popup__sign-in-button\\\"\\u003E\";\npug_mixins[\"button\"]({class: 'sign-in-button', btnText: \"войти\", isWhite: true, isWide: true});\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fform\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fmain\\u003E\\u003C\\u002Fdiv\\u003E\";\npug_mixins[\"link\"] = pug_interp = function(option){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\nvar linkClasses = \"link\"\noption.href += option.href ? \"\" : \"/mock-address/change-me\"\nlinkClasses += option.hasArrow ? \" link_theme_arrow\" : \"\" \nlinkClasses += option.isBlack ? \" link_theme_black\" : \"\"\nlinkClasses += option.usual ? \" link_theme_usual\" : \"\"\npug_html = pug_html + (\"\\u003Cdiv\" + (pug.attr(\"class\", pug.classes([option.class], [true]), false, true)) + \"\\u003E\\u003Ca\" + (pug.attr(\"class\", pug.classes([linkClasses], [true]), false, true)+pug.attr(\"href\", option.href, true, true)) + \"\\u003E\" + (pug.escape(null == (pug_interp = option.linkText) ? \"\" : pug_interp)));\nif (option.hasArrow) {\npug_html = pug_html + \"\\u003Cdiv class=\\\"arrow-container\\\"\\u003E\\u003Cdiv class=\\\"link__arrow\\\"\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";\n}\npug_html = pug_html + \"\\u003C\\u002Fa\\u003E\\u003C\\u002Fdiv\\u003E\";\n};\npug_mixins[\"input\"] = pug_interp = function(option){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\nif (option.type === 'email-and-submit') {\npug_html = pug_html + \"\\u003Cdiv class=\\\"input-email-and-submit-container\\\"\\u003E\\u003Cinput class=\\\"text_style_usual-black input-email_submit\\\" type=\\\"email\\\" name=\\\"\\\" placeholder=\\\"Email\\\" required value=\\\"\\\"\\u003E\\u003Cinput class=\\\"input-submit_email\\\" type=\\\"submit\\\" value=\\\"\\\"\\u003E\\u003C\\u002Fdiv\\u003E\";\n}\nelse\nif (option.type === 'date') {\npug_html = pug_html + \"\\u003Cinput class=\\\"input_type_date has-datepicker\\\" type=\\\"text\\\" required placeholder=\\\"ДД.ММ.ГГГГ\\\"\\u003E\";\n}\nelse\nif (option.type === 'submit') {\npug_html = pug_html + \"\\u003Cinput\" + (pug.attr(\"class\", pug.classes([option.class,\"input-submit\"], [true,false]), false, true)+\" type=\\\"submit\\\"\"+pug.attr(\"value\", option.text, true, true)) + \"\\u003E\";\n}\nelse\nif (option.type === 'email') {\npug_html = pug_html + \"\\u003Cinput class=\\\"text_style_usual-black input-email\\\" type=\\\"email\\\" name=\\\"\\\" placeholder=\\\"Email\\\" required value=\\\"\\\"\\u003E\";\n}\nelse\nif (option.type === 'password') {\npug_html = pug_html + \"\\u003Cinput class=\\\"text_style_usual-black input-password\\\" type=\\\"password\\\" name=\\\"\\\" placeholder=\\\"Password\\\" required value=\\\"\\\"\\u003E\";\n}\nelse\nif (option.type === 'text') {\npug_html = pug_html + \"\\u003Cinput\" + (\" class=\\\"input-text\\\"\"+\" type=\\\"text\\\"\"+pug.attr(\"placeholder\", option.text, true, true)+pug.attr(\"required\", true, true, true)+\" value=\\\"\\\"\") + \"\\u003E\";\n}\nelse\nif (option.type === 'toggle') {\npug_html = pug_html + \"\\u003Cdiv class=\\\"toggle-container\\\"\\u003E\\u003Clabel class=\\\"toggle-label\\\"\\u003E\\u003Cinput class=\\\"input-toggle\\\" type=\\\"checkbox\\\"\\u003E\" + (pug.escape(null == (pug_interp = option.text) ? \"\" : pug_interp)) + \"\\u003C\\u002Flabel\\u003E\\u003C\\u002Fdiv\\u003E\";\n}\n};\npug_html = pug_html + \"\\u003Cfooter class=\\\"footer\\\"\\u003E\\u003Cdiv class=\\\"footer-grid\\\"\\u003E\\u003Cdiv class=\\\"footer-logo-column\\\"\\u003E\" + (null == (pug_interp = (__webpack_require__(/*! ./common.blocks/logo/logo.pug */ \"./common.blocks/logo/logo.pug\").call)(this, locals)) ? \"\" : pug_interp) + \"\\u003Cp class=\\\"footer-under-logo-paragraph text_style_usual\\\"\\u003EБронирование номеров в лучшем отеле 2019 года по версии ассоциации «Отельные взгляды»\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"footer-nav-column\\\"\\u003E \\u003Cp class=\\\"footer-column-header text_style_small-bold\\\"\\u003Eнавигация\\u003C\\u002Fp\\u003E\";\npug_mixins[\"link\"]({class: 'footer-link', linkText: \"О нас\" , usual: true});\npug_mixins[\"link\"]({class: 'footer-link', linkText: \"Новости\" , usual: true});\npug_mixins[\"link\"]({class: 'footer-link', linkText: \"Служба поддержки\" , usual: true});\npug_mixins[\"link\"]({class: 'footer-link', linkText: \"Услуги\" , usual: true});\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"footer-about-us-column\\\"\\u003E \\u003Cp class=\\\"footer-column-header text_style_small-bold\\\"\\u003Eо нас\\u003C\\u002Fp\\u003E\";\npug_mixins[\"link\"]({class: 'footer-link', linkText: \"О сервисе\" , usual: true});\npug_mixins[\"link\"]({class: 'footer-link', linkText: \"Наша команда\" , usual: true});\npug_mixins[\"link\"]({class: 'footer-link', linkText: \"Вакансии\" , usual: true});\npug_mixins[\"link\"]({class: 'footer-link', linkText: \"Инвесторы\" , usual: true});\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"footer-support-column\\\"\\u003E \\u003Cp class=\\\"footer-column-header text_style_small-bold\\\"\\u003Eслужба поддержки\";\npug_mixins[\"link\"]({class: 'footer-link', linkText: \"Соглашения\" , usual: true});\npug_mixins[\"link\"]({class: 'footer-link', linkText: \"Сообщества\" , usual: true});\npug_mixins[\"link\"]({class: 'footer-link', linkText: \"Связь с нами\" , usual: true});\npug_html = pug_html + \"\\u003C\\u002Fp\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"footer-subscribe-column\\\"\\u003E \\u003Cp class=\\\"footer-column-header text_style_small-bold\\\"\\u003Eподписка\\u003C\\u002Fp\\u003E\\u003Cp class=\\\"footer-under-subscribe-paragraph text_style_usual\\\"\\u003EПолучайте специальные предложения и новости сервиса\\u003C\\u002Fp\\u003E\\u003Cform class=\\\"footer-subscribe-form\\\"\\u003E\";\npug_mixins[\"input\"]({type: 'email-and-submit'});\npug_html = pug_html + \"\\u003C\\u002Fform\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Chr class=\\\"footer-hr\\\"\\u003E\\u003Cdiv class=\\\"footer-copyright-and-links-container\\\"\\u003E\\u003Cp class=\\\"footer__copyright text_style_usual\\\"\\u003ECopyright © 2018 Toxin отель. Все права защищены.\\u003C\\u002Fp\\u003E\\u003Cdiv class=\\\"footer__social-links-container\\\"\\u003E\" + (null == (pug_interp = (__webpack_require__(/*! ./common.blocks/social-network-links/social-network-links.pug */ \"./common.blocks/social-network-links/social-network-links.pug\").call)(this, locals)) ? \"\" : pug_interp) + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Ffooter\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fbody\\u003E\\u003C\\u002Fhtml\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./registration.pug?");

/***/ }),

/***/ "./common.blocks/registration-page-main/registration-page-background-1.jpg":
/*!*********************************************************************************!*\
  !*** ./common.blocks/registration-page-main/registration-page-background-1.jpg ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"static/b16b5f294258b914f18e.jpg\";\n\n//# sourceURL=webpack:///./common.blocks/registration-page-main/registration-page-background-1.jpg?");

/***/ }),

/***/ "./common.blocks/registration-page-main/registration-page-background-2.jpg":
/*!*********************************************************************************!*\
  !*** ./common.blocks/registration-page-main/registration-page-background-2.jpg ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"static/88a4f5bfc021d5c555f5.jpg\";\n\n//# sourceURL=webpack:///./common.blocks/registration-page-main/registration-page-background-2.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"registration": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_pug-runtime_index_js-node_modules_webpack-jquery-ui_index_js","common_blocks_logo_logo_pug-common_blocks_social-network-links_social-network-links_pug-index-864e34"], () => (__webpack_require__("./registration.pug")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_pug-runtime_index_js-node_modules_webpack-jquery-ui_index_js","common_blocks_logo_logo_pug-common_blocks_social-network-links_social-network-links_pug-index-864e34"], () => (__webpack_require__("./index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
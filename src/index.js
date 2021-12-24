import './style.sass'
import * as $ from 'jquery'

sign_in.onclick = function() {
    $(".main__search-popup").attr('style', 'display: none');
    $(".main__sign-in-popup").attr('style', 'display: block')

};

register.onclick = function() {
    $(".main__search-popup").attr('style', 'display: none');
    $(".main__register-popup").attr('style', 'display: block')

};
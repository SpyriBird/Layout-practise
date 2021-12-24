import './style.sass'
import * as $ from 'jquery'

sign_in.onclick = function() {
    $(".search-window-container").attr('style', 'display: none');
    $(".sign-in-window-container").attr('style', 'display: block')

};
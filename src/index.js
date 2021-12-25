import './style.sass'
import * as $ from 'jquery'

sign_in.onclick = function() {
    document.getElementById('3').style.display = 'none';
    document.getElementById('1').style.display = 'block';

};

register.onclick = function() {
    document.getElementById('3').style.display = 'none';
    document.getElementById('2').style.display = 'block';
};
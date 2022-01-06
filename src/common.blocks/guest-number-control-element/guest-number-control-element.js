import '../../../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.js'
import '../../../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.css'

$(document).ready(function() {
    $(".i-q-control").iqDropdown({
        minItems: 0,
    });
});
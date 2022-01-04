import * as $ from 'jquery'
import '../../../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.js'
//import '../../../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.css'

$(".has-i-q-control").iqDropdown({
    maxItems: 3,
    minItems: 0,
    selectionText: 'item',
});
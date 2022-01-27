import { IQDropdown } from '../item-quantity-dropdown/item-quantity-dropdown'

export class UnitedQuantityIQDropdown extends IQDropdown {

    get currentValue() {

        let quantity = this.options.reduce((sum, current) => sum + this['_' + current], 0);
        let result = String(quantity);

        result += ' ';
        result += this.wordForms[this.validateWordForm(quantity)];

        return result;
    }
}
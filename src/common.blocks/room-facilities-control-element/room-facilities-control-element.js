import { IQDropdown } from '../item-quantity-dropdown/item-quantity-dropdown'

export class SeparateQuantitiesIQDropdown extends IQDropdown {

    get currentValue() {

        let result = [];

        for (let opt of this.options) {

            if (this['_' + opt] === 0) continue;

            let word = String(this['_' + opt]);
            word += ' ';
            word += this.wordForms[opt][this.validateWordForm(this['_' + opt])];

            result.push(word);
        }
        return result.join(', ');
    }
}
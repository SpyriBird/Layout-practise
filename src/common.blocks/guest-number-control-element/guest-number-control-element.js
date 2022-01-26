export class Guests {

    constructor() {

        this.options = ['adults', 'children', 'babies'];
        this.input = $('.js-guest-number-control-element');

        for (let opt of this.options) {

            this['_' + opt] = 0;

            this[opt + 'CurrentNumber'] = $(".js-guest-number__" + opt + "-current-number");
            this[opt + 'IncreaseButton'] = $('.js-guest-number__' + opt + '-increase-button');
            this[opt + 'DecreaseButton'] = $('.js-guest-number__' + opt + '-decrease-button');
        }

        this.dropdown = $('.guest-number-dropdown-container');
        this.clearButton = $('.js-guest-number__clear-button');
        this.applyButton = $('.js-guest-number__apply-button');

        this.addEventHandlers();
    }

    setOptionValue(value, opt) {

        if (value < 0) return;

        if (value === 0) this.inactivateDecreaseButton(opt);
        if (value === 1) this.activateDecreaseButton(opt);

        this['_' + opt] = value;
        this[opt + 'CurrentNumber'].html(this['_' + opt]);

        this.input.val(this.currentValue);

        return;
    }

    activateDecreaseButton(opt) {

        this[opt + 'DecreaseButton'].removeClass('guest-number-button__inactive')
            .addClass('guest-number-button__active');
    }

    inactivateDecreaseButton(opt) {

        this[opt + 'DecreaseButton'].removeClass('guest-number-button__active')
            .addClass('guest-number-button__inactive');
    }

    get currentValue() {

        let guestsNumber = this._babies + this._children + this._adults;
        let result = String(guestsNumber);

        if (guestsNumber > 10 && guestsNumber < 20) {

            result += ' гостей';
            return result;
        }

        switch (guestsNumber % 10) {
            case 1:
                result += ' гость';
                break;
            case 2:
            case 3:
            case 4:
                result += ' гостя';
                break;
            default:
                result += ' гостей';
                break;
        }

        return result;
    }

    clearQuantities() {

        for (let opt of this.options) {
            this.setOptionValue(0, opt);
        }
    }

    addEventHandlers() {
        for (let opt of this.options) {

            this[opt + 'IncreaseButton'].on('click', () => this.setOptionValue(1 + this['_' + opt], opt));
            this[opt + 'DecreaseButton'].on('click', () => this.setOptionValue(this['_' + opt] - 1, opt));
        }

        this.input.on('click', () => this.dropdown.removeAttr('hidden'));

        this.applyButton.on('click', () => this.dropdown.attr('hidden', 'hidden'));
        this.clearButton.on('click', () => this.clearQuantities());
    }

}
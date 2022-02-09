export class IQDropdown {

    // аргументами в конструктор передавать:
    // 1 - массив с опциями
    // 2 - имя компонента, использующееся в классах
    // 3 - массив с формами слов с разными числительными: [ 
    //     с числительными, кончающимися на 0 и цифры больше 5, 
    //     единственное число, 
    //     с числительными, кончающимися на 2, 3 и 4
    // ]
    constructor(arr, comp, words) {

        this.comp = comp;
        this.component = ".js-" + comp;

        this.options = arr;
        this.input = $(this.component + '-control-element');

        this.wordForms = words;

        for (let opt of this.options) {

            this['_' + opt] = 0;

            this[opt + 'CurrentNumber'] = $(this.component + '__' + opt + '-current-number');
            this[opt + 'IncreaseButton'] = $(this.component + '__' + opt + '-increase-button');
            this[opt + 'DecreaseButton'] = $(this.component + '__' + opt + '-decrease-button');
        }

        this.dropdown = $(this.component + '-dropdown-container');
        this.container = $(this.component + '-container');
        this.clearButton = $(this.component + '__clear-button');
        this.applyButton = $(this.component + '__apply-button');

        this.addEventHandlers();
    }

    setOptionValue(value, opt) {

        if (value < 0) return;

        if (value === 0) this.inactivateDecreaseButton(opt);
        if (value === 1) this.activateDecreaseButton(opt);

        this['_' + opt] = value;
        this[opt + 'CurrentNumber'].html(this['_' + opt]);

        this.input.val(this.currentValue);
    }

    activateDecreaseButton(opt) {

        this[opt + 'DecreaseButton'].removeClass('i-q-dropdown-button__inactive')
            .addClass('i-q-dropdown-button__active');
    }

    inactivateDecreaseButton(opt) {

        this[opt + 'DecreaseButton'].removeClass('i-q-dropdown-button__active')
            .addClass('i-q-dropdown-button__inactive');
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
        this.container.on('mouseleave', () => this.dropdown.attr('hidden', 'hidden'))

        this.applyButton.on('click', () => this.dropdown.attr('hidden', 'hidden'));
        this.clearButton.on('click', () => this.clearQuantities());
    }

    validateWordForm(num) {

        if (num > 10 && num < 20) {
            return 0;
        }

        switch (num % 10) {
            case 1:
                return 1;
            case 2:
            case 3:
            case 4:
                return 2;
            default:
                return 0;
        }
    }
}
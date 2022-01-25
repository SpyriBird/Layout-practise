export class Guests {

    _children = 0;

    get children() {
        return _children;
    }

    set children(value) {

        if (value < 0) return;
        _children = value;

        return;
    }

    _babies = 0;

    get babies() {
        return _babies;
    }

    set babies(value) {

        if (value < 0) return;
        _babies = value;

        return;
    }

    _adults = 0;

    get adults() {
        return _adults;
    }

    set adults(value) {

        if (value < 0) return;
        _adults = value;

        return;
    }

    get currentValue() {

        let guestsNumber = this.babies + this.children + this.adults;
        let result = String(guestsNumber);

        switch (questsNumber % 10) {
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

    input = $('.js-guest-number-control-element');

    createDropdown() {

    }

    showDropdown() {

    }

}
import 'webpack-jquery-ui'

export function createAccordion() {
    $('.aside-accordion-container').accordion({
        collapsible: true
    })
}
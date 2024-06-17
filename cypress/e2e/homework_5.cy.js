import user from '../fixtures/user.json';
import { searchProd } from '../support/helper';
import { login } from '../support/helper'

beforeEach(() => {
    login(user.loginname, user.password);

    // cy.log('Verify shopping cart')
    // cy.get('.cart_total').click()
    // cy.get('.cart_total').eq(0).then(($span) => {
    //     const text = $span.text().trim().replace('$', '').replace('.00', '');
    //     const value = parseFloat(text);
    //     if (value >= 1) {
    //         cy.get('#top_cart_product_list').click({ force: true })
    //         cy.log('Delete products from shopping cart')
    //         cy.get('.btn.btn-sm.btn-default').click()
    //         cy.get('.contentpanel').should('contain', 'Your shopping cart is empty!')
    //     } else if (value === 0) {
    //         cy.log('Value is 0, Your shopping cart is empty!');
    //     }
    // })
})

it('Place order from the main page', () => {
    searchProd('Euphoria Men Intense Eau De Toilette Spray')

})


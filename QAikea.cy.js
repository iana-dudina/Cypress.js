describe('Тестируем корзину', function () {

    it('Выбираем кровать', function () {
        cy.visit('https://testqastudio.me/');
        cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.wait(6000);
        cy.get('#cart-modal > div.cart-panel-content.panel-content > div.modal-header > a > span > svg').click();
        cy.get('[href="https://sh3910517.c.had.su"]').click();
        cy.get('.post-11337 > .product-inner > .product-thumbnail > .product-loop__buttons > .button').click();
        cy.get('.header-right-items > .header-cart').click();
        cy.get('.checkout').click();
        cy.get('#billing_first_name').type('Name');
        cy.get('#billing_last_name').type('Last_Name');
        cy.get('#billing_address_1').type('Street,9');
        cy.get('#billing_city').type('City');
        cy.get('#billing_state').type('District');
        cy.get('#billing_postcode').type('123456');
        cy.get('#billing_phone').type('81110001111');
        cy.get('#billing_email').type('email@email.com');
        cy.get('#place_order').click();
        cy.wait(6000);
        cy.contains('Ваш заказ принят. Благодарим вас.')
    })


})
describe('Форма авторизации', function () {

        it('Корректные логин/пароль', function () {
                cy.visit('https://login.qa.studio/');
                cy.get('#mail').type('german@dolnikov.ru');
                cy.get('#pass').type('iLoveqastudio1');
                cy.get('#loginButton').click();
                cy.contains('Авторизация прошла успешно').should('be.visible');
                cy.get('#exitMessageButton > .exitIcon').should('be.visible');

        })

        it('Восстановление пароля', function () {
                cy.reload();
                cy.visit('https://login.qa.studio/');
                cy.get('#forgotEmailButton').click();
                cy.get('#forgotForm > .header').should('be.visible');
                cy.get('#mailForgot').type('german@dolnikov.ru');
                cy.get('#restoreEmailButton').click();
                cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
                cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })

        it('Корректный логин/некорректный пароль', function () {
                cy.reload();
                cy.visit('https://login.qa.studio/');
                cy.get('#mail').type('german@dolnikov.ru');
                cy.get('#pass').type('iLoveqastudio2');
                cy.get('#loginButton').click();
                cy.contains('Такого логина или пароля нет').should('be.visible');
                cy.get('#exitMessageButton > .exitIcon').should('be.visible');

        })

        it('Некорректный логин/корректный пароль', function () {
                cy.reload();
                cy.visit('https://login.qa.studio/');
                cy.get('#mail').type('german@dolnikov1.ru');
                cy.get('#pass').type('iLoveqastudio1');
                cy.get('#loginButton').click();
                cy.contains('Такого логина или пароля нет').should('be.visible');
                cy.get('#exitMessageButton > .exitIcon').should('be.visible');

        })

        it('Забыли собачку', function () {
                cy.reload();
                cy.visit('https://login.qa.studio/');
                cy.get('#mail').type('germandolnikov.ru');
                cy.get('#pass').type('iLoveqastudio1');
                cy.get('#loginButton').click();
                cy.contains('Нужно исправить проблему валидации').should('be.visible');
                cy.get('#exitMessageButton > .exitIcon').should('be.visible');

        })

        it('Большие буквы', function () {
                cy.reload();
                cy.visit('https://login.qa.studio/');
                cy.get('#mail').type('GerMan@Dolnikov1.ru');
                cy.get('#pass').type('iLoveqastudio1');
                cy.get('#loginButton').click();
                cy.contains('Авторизация прошла успешно').should('be.visible');
                cy.get('#exitMessageButton > .exitIcon').should('be.visible');

        })

})
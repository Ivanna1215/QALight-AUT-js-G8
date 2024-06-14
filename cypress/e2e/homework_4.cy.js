import data from '../fixtures/toasts.json'
describe('Homework 4', () => {

    beforeEach('Open page', () => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');

        cy.contains('Material Light').click();
        cy.contains('Modal & Overlays').click();
        cy.get('[ng-reflect-router-link="/pages/modal-overlays/toastr"]').click();
      
      })

    data.forEach(({testData, expected}) => {

            it(`Toast test for position ${testData.position}, and type ${testData.type}`, () => {

                cy.get('[class*="mat-ripple position-select "]').click();
                cy.contains(testData.position).click();
                cy.get('[name="title"]').clear().type(testData.title);
                cy.get('[name="content"]').clear().type(testData.content);
                cy.get('[name="timeout"]').clear().type(testData.time);
                cy.get('[class*="mat-ripple appearance-outline"]').click();
                cy.get('ul[class="option-list"]', { timeout: 5000 }).contains(testData.type).click();
                cy.contains('button', 'Show toast').click();

                cy.get('nb-toast[ng-reflect-toast]').then(toast => {
                    cy.wrap(toast).should('contain', expected.title)
                        .and('contain', expected.content)
                        .and('have.css', 'background-color')
                        .and('eq', expected.color);
              
                    cy.wrap(toast).find(`g[data-name="${expected.icon}"]`).should('exist');
              
                    cy.wrap(toast).parents('.toastr-overlay-container').should('have.css', 'justify-content').and('eq', expected.position.justifyContent);
                    cy.wrap(toast).parents('.toastr-overlay-container').should('have.css', 'align-items').and('eq', expected.position.alignItems);
                })
            });
        });
    });


describe('Homework 4', () => {

    const testCases = [
        {
            testData: [
                { position: 'top-right', title: 'Ivanna', content: 'primary', time: '10000', type: 'primary' },
                { position: 'top-left', title: 'Anna', content: 'success', time: '20000', type: 'success' },
                { position: 'bottom-left', title: 'Nata', content: 'info', time: '30000', type: 'info' },
            ],
            expectedResult: [
                { icon: 'email', title: 'Ivanna', content: 'primary', color: 'rgb(98, 0, 238)',  position: 'cdk-overlay-0' },
                { icon: 'checkmark', title: 'Anna', content: 'success', color: 'rgb(96, 175, 32)', position: 'cdk-overlay-2' },
                { icon: 'question-mark', title: 'Nata', content: 'info', color: 'rgb(4, 149, 238)',  position: 'cdk-overlay-5' }
            ]
        }
    ];

    testCases.forEach(({ testData, expectedResult }) => {
        testData.forEach((data, index) => {
            const { position, title, content, time, type } = data;
            const expected = expectedResult[index];

            it(`Enter "${title}" `, () => {
                cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
                cy.contains('Material Light').click();
                cy.contains('Modal & Overlays').click();
                cy.get('[ng-reflect-router-link="/pages/modal-overlays/toastr"]').click();

                cy.get('[class*="mat-ripple position-select "]').click();
                cy.contains(position).click();
                cy.get('[name="title"]').clear().type(title);
                cy.get('[name="content"]').clear().type(content);
                cy.get('[name="timeout"]').clear().type(time);
                cy.get('[class*="mat-ripple appearance-outline"]').click();
                cy.get('ul[class="option-list"]', { timeout: 5000 }).contains(type).click();
                cy.contains('button', 'Show toast').click();

                cy.get(`[data-name=${expected.icon}]`).should('be.visible')
                cy.get('[class="title subtitle"]').should('contain', expected.title)
                cy.get('nb-toastr-container [class="message"]').should('contain', expected.content)
                cy.get('[class*="ng-trigger ng-trigger-fadeIn"]').should('have.css','background-color', expected.color)
                cy.get(`[class*="toastr-overlay-container"] [id=${expected.position}]`,{timeout:5000}).should('be.visible')

            });
        });
    });

});
describe('Homework 4', () => {

    const testCases = [
        {
            testData: [
                { position: 'top-right', title: 'water', content: 'primary', time: '10000', type: 'primary' },
                { position: 'top-left', title: 'eggs', content: 'success', time: '20000', type: 'success' }
            ],
            expectedResult: [
                { icon: 'email', title: 'water', content: 'primary', color: 'rgb(98, 0, 238)', position: 'top-right' },
                { icon: 'email', title: 'eggs', content: 'success', color: 'rgb(56, 142, 60)', position: 'top-left' }
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


            cy.get('[class="title subtitle"]').should('contain', expected.title)
            cy.get('nb-toastr-container [class="message"]').should('contain',expected.content)


        });
    });
});

});
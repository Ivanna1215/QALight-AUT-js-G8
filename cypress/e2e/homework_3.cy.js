describe('Homework 3', () => {

    const testCases = [
        { recipients: 'Ivanna', subject: 'english', message: 'I like study english' },
        { recipients: 'Dmytro', subject: 'music', message: 'I like listen music always' },
        { recipients: 'Anton', subject: 'sport', message: 'I like running' },
        { recipients: 'Olexandr', subject: 'history', message: 'I like movie' },
    ];

    testCases.forEach(({ recipients, subject, message }) => {
        it(`Enter "${recipients}" `, () => {
            cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
            cy.contains('Material Light').click()
            cy.contains('Forms').click()
            cy.contains('Form Layouts', { timeout: 5000 }).click()
            cy.get('[placeholder="Recipients"]', { timeout: 5000 }).clear().type(recipients)
            cy.get('[placeholder="Subject"]', { timeout: 5000 }).clear().type(subject)
            cy.get('[placeholder="Message"]', { timeout: 5000 }).clear().type(message)
        })
    })

})
export function login(loginname, password) {
    cy.log('Open home page');
    cy.visit('/');

    cy.log('Open account/login page');
    cy.get('#customer_menu_top').click();

    cy.log("Fill login form")
    cy.get('#loginFrm_loginname').type(loginname)
    cy.get('#loginFrm_password').type(password)
    cy.get('[title="Login"]').click()
}

export function searchProd(nameProd) {
    cy.get('[placeholder="Search Keywords"]').type('E');
    cy.get('[title="Go"]').click();
    checkProductOnPage(nameProd);
}

function checkProductOnPage(nameProd, counter) {

    cy.get('[class="prdocutname"]').then(($elements) => {
        const foundElement = $elements.toArray().find(element => {
            return element.innerText.includes(nameProd);
        });

        if (foundElement) {
            cy.wrap(foundElement).click({ force: true });
        } else {
            cy.get('.pagination .disabled+li a').then($page => {
                if ($page.is(':visible')) {
                    cy.wrap($page).click();
                    checkProductOnPage(nameProd); 
                }
            });
        }
    });
}
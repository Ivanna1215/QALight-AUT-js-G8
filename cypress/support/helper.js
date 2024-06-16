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
    cy.get('[placeholder="Search Keywords"]').type('E')
    cy.get('[title="Go"]').click()
    let counter = 0;

    while (counter < 5) {
        cy.get('[class="prdocutname"]').each(($el)=>{
            if($el.text().includes(nameProd)) {
                cy.contains(nameProd).click();
            }
        });
            cy.get('.pagination .disabled+li a').then($page => {
                if($page.is(':visible')) {
                    cy.get($page).click();
                }
            })
        counter++;
    }
}
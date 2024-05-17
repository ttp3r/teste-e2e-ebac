Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('preencherDados', (nome, sobrenome, pais, endereco, cidade, estado, cep, telefone, email) => {
    cy.get('#billing_first_name').type(nome)
    cy.get('#billing_last_name').type(sobrenome)
    cy.get('#billing_country_field > .woocommerce-input-wrapper > .select2 > .selection > .select2-selection > .select2-selection__arrow').click()
    cy.get('.select2-search__field').type(pais).click()    
    cy.get('#billing_address_1').type(endereco, {force: true})
    cy.get('#billing_city').type(cidade)
    cy.get('#billing_state_field > .woocommerce-input-wrapper > .select2 > .selection > .select2-selection > .select2-selection__arrow').click()
    cy.get('.select2-search__field').type(estado).click()
    cy.get('#billing_postcode').type(cep, {force: true})
    cy.get('#billing_phone').type(telefone)
    cy.get('#billing_email').type(email)    
 })


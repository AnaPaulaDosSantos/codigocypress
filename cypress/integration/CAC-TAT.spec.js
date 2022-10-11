/// <reference types="Cypress" />



describe('Central de Atedimento ao Cliente TAT', function() {
    beforeEach(function() {
        cy.visit('./src/index.html')
    })
    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
        
    })
    { delay: 10}
    it.only('preenche os campos obrigatórios e envia o formulário', function() {
        const longtext = 'Teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste,'
        
        cy.get('#firstName').type('Kaique')
        { delay: 10}
        cy.get('#lastName').type('Dos Santos')
        { delay: 10}
        cy.get('#email').type('teste@teste.com')
        { delay: 10}
        cy.get('#open-text-area').type(longtext, { delay: 0})
        { delay: 10}
        cy.get('button[type="submit"]').click()
        { delay: 10}
        cy.get('.success').should('be.visible')
    })
    { delay: 10}
    it.only('preenche os campos obrigatórios e envia o formulário', function() {
        const longtext = 'Teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste,'
        
        cy.get('#firstName').type('Kaique')
        { delay: 10}
        cy.get('#lastName').type('Dos Santos')
        { delay: 10}
        cy.get('#email').type('teste@teste,com')
        { delay: 10}
        cy.get('#open-text-area').type(longtext, { delay: 0})
        cy.get('button[type="submit"]').click()
        { delay: 10}
        cy.get('.error').should('be.visible')
    })
    { delay: 10}

    it.only('campo telefone continua vazio quando preenchido com valor não-numérico', function() {
        cy.get('#phone')
        .type('abcdefghij')
        .should('have.value', '')
    })
    { delay: 10}
    it.only('exibe mensagem de erro quando o telefone se torna obrigatório mas não e preenchido antes do envio do formulário', function() {
        const longtext = 'Teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste,'
        
        cy.get('#firstName').type('Kaique')
        { delay: 10}
        cy.get('#lastName').type('Dos Santos')
        { delay: 10}
        cy.get('#email').type('teste@teste,com')
        { delay: 10}
        cy.get('#phone-checkbox').click()
        { delay: 10}
        cy.get('#open-text-area').type(longtext, { delay: 0})
        { delay: 10}
        cy.get('button[type="submit"]').click()
        { delay: 10}
        cy.get('.error').should('be.visible')
})
{ delay: 10}
 it.only('preencher e limpa os campos nome, sobrenome, email e telefone', function() {
    { delay: 10}
    cy.get('#firstName')
    .type('Kaique')
    .should('have.value', 'Kaique')
    .clear()
    .should('have.value', '')
    { delay: 10}
    cy.get('#lastName')
    .type('Dos Santos')
    .should('have.value', 'Dos Santos')
    .clear()
    .should('have.value', '')
    { delay: 10}
    cy.get('#email')
    .type('kaique@exemplo.com')
    .should('have.value', 'kaique@exemplo.com')
    .clear()
    .should('have.value', '')
    { delay: 10}
    cy.get('#phone')
    .type('1234567890')
    .should('have.value', '1234567890')
    .clear()
    .should('have.value', '')
    { delay: 10}
    cy.get('#open-text-area')
    .type('teste')
    .should('have.value', 'teste')
    .clear()
    .should('have.value', '')
 })
}) 